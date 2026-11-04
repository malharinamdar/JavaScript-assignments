// Strict Equality
function strictEqual() {
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;
  document.getElementById("out1").innerHTML = (s1 === s2) ? "Strings are Strictly Equal" : "Strings are NOT Strictly Equal";
}

// Loose Equality
function looseEqual() {
  let s1 = document.getElementById("l1").value;
  let s2 = document.getElementById("l2").value;
  document.getElementById("out2").innerHTML = (s1 == s2) ? "Strings are Loosely Equal" : "Strings are NOT Loosely Equal";
}

// Compare Length
function compareLength() {
  let s1 = document.getElementById("len1").value;
  let s2 = document.getElementById("len2").value;
  let msg = "Both Strings have Equal Length";
  if (s1.length > s2.length) msg = "First String is Longer";
  else if (s2.length > s1.length) msg = "Second String is Longer";
  document.getElementById("out3").innerHTML = msg;
}

// Alphabetical Order
function alphabet() {
  let s1 = document.getElementById("a1").value;
  let s2 = document.getElementById("a2").value;
  let x = s1.localeCompare(s2);
  let msg = "Both Strings are Same";
  if (x < 0) msg = s1 + " comes Before " + s2;
  else if (x > 0) msg = s1 + " comes After " + s2;
  document.getElementById("out4").innerHTML = msg;
}

// User Defined Comparison (Ignores Case)
function userDefined() {
  let s1 = document.getElementById("u1").value;
  let s2 = document.getElementById("u2").value;
  let flag = (s1.length == s2.length);
  if (flag) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i].toLowerCase() != s2[i].toLowerCase()) { flag = false; break; }
    }
  }
  document.getElementById("out5").innerHTML = flag ? "Strings are Equal (Ignoring Case)" : "Strings are NOT Equal";
}
