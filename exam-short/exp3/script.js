// writes the message into the result <p> and colours it (ok = green, error = red)
function show(id, msg, cls) {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).className = cls;
}

// 1. REVERSE STRING (with methods + without methods)
function reverseString() {
  var str = document.getElementById("revInput").value;
  if (str == "") { show("revResult", "Enter a string!", "error"); return; }

  var rev1 = str.split("").reverse().join("");                    // with methods
  var rev2 = "";
  for (var i = str.length - 1; i >= 0; i--) { rev2 += str[i]; }   // without methods

  show("revResult", "Using methods: " + rev1 + "<br>Using loop: " + rev2, "ok");
}

// 2. REPLACE CHARACTERS (with methods + without methods)
function replaceChar() {
  var str = document.getElementById("repInput").value;
  var oldCh = document.getElementById("oldChar").value;
  var newCh = document.getElementById("newChar").value;
  if (str == "" || oldCh == "") { show("repResult", "Enter string and character to replace!", "error"); return; }

  var rep1 = str.replaceAll(oldCh, newCh);                        // with methods
  var rep2 = "";
  for (var i = 0; i < str.length; i++) {                          // without methods
    if (str[i] == oldCh) rep2 += newCh;
    else rep2 += str[i];
  }

  show("repResult", "Using methods: " + rep1 + "<br>Using loop: " + rep2, "ok");
}

// 3. PALINDROME CHECK (compare first & last characters using loop)
function checkPalindrome() {
  var str = document.getElementById("palInput").value.toLowerCase();
  if (str == "") { show("palResult", "Enter a string!", "error"); return; }

  var isPalindrome = true;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) { isPalindrome = false; break; }
  }

  if (isPalindrome) show("palResult", "\"" + str + "\" is a Palindrome!", "ok");
  else show("palResult", "\"" + str + "\" is NOT a Palindrome!", "error");
}
