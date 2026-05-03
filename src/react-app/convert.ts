export async function convertFile(file: File): Promise<File> {
  const text = await file.text();
  const convertedText = convertText(text);

  // Rename the file to indicate it's been converted
  const newFileName = file.name.replace(/\.csv$/i, "_fortnox.csv");
  const convertedFile = new File([convertedText], newFileName, {
    type: "text/csv",
  });
  return convertedFile;
}

export function convertText(test: string): string {
  const lines = test.split("\n");

  // Grab the lines AFTER the "Bokföringsdatum" header
  const dataLines = lines
    .slice(lines.findIndex((line) => line.includes("Bokföringsdatum")) + 1)
    .filter((line) => line.trim() !== "");

  const transactions = dataLines.map((line) => {
    const parts = line.split('";"');
    const date = parts[0].replace('"', "");
    const description = parts[3];
    const amount = parts[4].replace('"', "");
    return `${date};${description};${amount}`;
  });

  return (
    "Datum;Ingående saldo-Beskrivning;Belopp\n" +
    transactions.join("\n") +
    "\nLäses;ej;in"
  );
}
