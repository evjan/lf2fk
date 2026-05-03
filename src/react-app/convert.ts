// import Papa from 'papaparse';

export async function convertFile(file: File): Promise<string> {
  return await file.text();
  // let config = {
  //   delimiter: ",",
  // }
	// Papa.parse<Row>(file, {config});
}

export function convertText(test: string): string {
  return test;
}
