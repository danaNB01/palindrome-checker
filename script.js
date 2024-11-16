const btn = document.querySelector('button[type="button"]');
btn.addEventListener("click", checkPalindrome);

// prevent reloading
const form = document.querySelector("form");
form.addEventListener("submit", checkPalindrome);

function checkPalindrome(event) {
  event.preventDefault();
  //   calculate the result
  const word = document.getElementById("word");
  let str = word.value;
  if (str === "") {
    window.alert("Pleas input a value.");
  } else {
    // remove all non-alphanumeric chars.
    const regex = /[^a-zA-Z0-9]/g;
    let cleanStr = str.replace(regex, "");
    let palindrome = cleanStr.split("").reverse().join("");

    //   show the result
    let h2 = document.getElementById("result");
    h2.classList.remove("hide");
    h2.classList.add("show-result");
    // EX: Madam should evaluate true.
    const result = cleanStr.toLowerCase() === palindrome.toLowerCase();
    if (result) {
      h2.innerHTML = `<span class="show-result bold">${str}</span> is a palindrome.`;
    } else {
      h2.innerHTML = `<span class="show-result bold">${str}</span> is not a palindrome.`;
    }
  }
}
