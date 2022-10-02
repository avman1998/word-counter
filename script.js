const textareaEle = document.querySelector(".main-container #myText");
const wordResult = document.querySelector(".main-container div p #result-word");
const charResult = document.querySelector(
  ".main-container div p #result-character"
);
let len2 = 0;
textareaEle.addEventListener("input", function () {
  const inputString = textareaEle.value;

  // This Code Will Give Me Word Count
  // <!!!---!!!>
  const trimmedInputString = inputString.trim();
  const newStringArray = trimmedInputString.split(" ");
  // wordResult.innerHTML = newStringArray.length;
  // <!!!---!!!>

  // This Code Will Give Me Character Count
  // <!!!---!!!>
  const joinedString = newStringArray.join("");
  charResult.innerHTML = joinedString.length;
  // <!!!---!!!>

  if (inputString == "") {
    newStringArray.length = 0;
    joinedString.length = 0;
  }
});
