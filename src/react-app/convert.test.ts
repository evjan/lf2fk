import { describe, expect, it } from "vitest";
import { convertText } from "./convert";

describe("convert", () => {
  it("should convert a CSV file to FK format", () => {
    const inputText = "a,b,c\n1,2,3";
    const output = convertText(inputText);
    expect(output).toBe("a,b,c\n1,2,4");
  });
});
