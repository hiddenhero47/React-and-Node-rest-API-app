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

export const GrabMe = (data, title) => {
  let GrabbedContent;

  if (!title || title.length === 0 || !data) {
    return null;
  }

  if (Array.isArray(title)) {
    GrabbedContent = data.filter((content) => title.includes(content.title));
  } else {
    GrabbedContent = data.find((content) => content.title === title);
  }

  if (
    typeof GrabbedContent === "object" &&
    Object.keys(GrabbedContent).length === 0
  ) {
    return null;
  }

  return GrabbedContent;
};

export const GiveMeSliderData = (data) => {
  if (!data || data === undefined || data === null || Array.isArray(data)) {
    return null;
  }

  const ImageURL = data?.content;
  const tags = Object.values(data?.tags);

  const content = ImageURL.map((element, index) => {
    return {
      pictures: element,
      overlay: index+1 === 1 ? false : true,
      narration:
        tags[index] ?? "We Construct and Manage Places and Infrastructures.",
    };
  });

  return content;
};
