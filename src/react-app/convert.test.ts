import { describe, expect, it } from "vitest";
import { convertText } from "./convert";

describe("convert", () => {
  it("should convert a CSV file to FK format", () => {
    const inputText =
      '"Kontonummer";"Kontonamn";"";"Saldo";"Tillgängligt belopp"\n"1122";"Mitt Rörelsekonto";"";"10 000,00";"10 000,00"\n\n"Bokföringsdatum";"Transaktionsdatum";"Transaktionstyp";"Meddelande";"Belopp"\n"2026-04-25";"2026-04-24";"Kortköp";"FACEBOOK,fb.me/ads,IE";"-42,00"';
    const output = convertText(inputText);
    expect(output).toBe(
      "Datum;Ingående saldo-Beskrivning;Belopp\n2026-04-25;FACEBOOK,fb.me/ads,IE;-42,00\nLäses;ej;in",
    );
  });
});
