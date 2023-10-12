export function numberToWords(number) {
  const units = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (number === 0) {
    return "Zero";
  }

  if (number < 10) {
    return units[number];
  }

  if (number >= 11 && number <= 19) {
    return teens[number - 11];
  }

  const numArray = number.toString().split("").map(Number);
  const numWords = [];

  if (numArray[0] > 0) {
    numWords.push(units[numArray[0]] + " Hundred");
  }

  if (numArray[1] > 1) {
    numWords.push(tens[numArray[1]]);
    if (numArray[2] > 0) {
      const unitWord = units[numArray[2]];
      numWords.push(unitWord);
    }
  } else if (numArray[1] === 1) {
    numWords.push(teens[numArray[2] - 1]);
  } else if (numArray[2] > 0) {
    const unitWord = units[numArray[2]];
    numWords.push(unitWord);
  }

  return numWords.join(" ");
}
