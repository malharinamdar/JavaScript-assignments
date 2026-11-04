// 1. REVERSE STRING (with methods + without methods)
function reverseString() {
  var str = document.getElementById("revInput").value;
  var result = document.getElementById("revResult");

  if (str == "") {
    result.innerHTML = "Enter a string!";
    result.className = "error";
    return;
  }

  // Using built-in methods
  var rev1 = str.split("").reverse().join("");

  // Without built-in methods (loop)
  var rev2 = "";
  for (var i = str.length - 1; i >= 0; i--) {
    rev2 = rev2 + str[i];
  }

  result.innerHTML = "Using methods: " + rev1 + "<br>Using loop: " + rev2;
  result.className = "ok";
}

// 2. REPLACE CHARACTERS (with methods + without methods)
function replaceChar() {
  var str = document.getElementById("repInput").value;
  var oldCh = document.getElementById("oldChar").value;
  var newCh = document.getElementById("newChar").value;
  var result = document.getElementById("repResult");

  if (str == "" || oldCh == "") {
    result.innerHTML = "Enter string and character to replace!";
    result.className = "error";
    return;
  }

  // Using built-in method
  var rep1 = str.replaceAll(oldCh, newCh);

  // Without built-in methods (loop)
  var rep2 = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == oldCh) {
      rep2 = rep2 + newCh;
    } else {
      rep2 = rep2 + str[i];
    }
  }

  result.innerHTML = "Using methods: " + rep1 + "<br>Using loop: " + rep2;
  result.className = "ok";
}

// 3. PALINDROME CHECK (compare first & last characters using loop)
function checkPalindrome() {
  var str = document.getElementById("palInput").value.toLowerCase();
  var result = document.getElementById("palResult");

  if (str == "") {
    result.innerHTML = "Enter a string!";
    result.className = "error";
    return;
  }

  var isPalindrome = true;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    result.innerHTML = "\"" + str + "\" is a Palindrome!";
    result.className = "ok";
  } else {
    result.innerHTML = "\"" + str + "\" is NOT a Palindrome!";
    result.className = "error";
  }
}
