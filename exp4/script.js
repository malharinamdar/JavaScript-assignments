// Strict Equality
function strictEqual() {
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;
  if (s1 === s2)
    document.getElementById("out1").innerHTML = "Strings are Strictly Equal";
  else
    document.getElementById("out1").innerHTML = "Strings are NOT Strictly Equal";
}

// Loose Equality
function looseEqual() {
  let s1 = document.getElementById("l1").value;
  let s2 = document.getElementById("l2").value;
  if (s1 == s2)
    document.getElementById("out2").innerHTML = "Strings are Loosely Equal";
  else
    document.getElementById("out2").innerHTML = "Strings are NOT Loosely Equal";
}

// Compare Length
function compareLength() {
  let s1 = document.getElementById("len1").value;
  let s2 = document.getElementById("len2").value;
  if (s1.length > s2.length)
    document.getElementById("out3").innerHTML = "First String is Longer";
  else if (s2.length > s1.length)
    document.getElementById("out3").innerHTML = "Second String is Longer";
  else
    document.getElementById("out3").innerHTML = "Both Strings have Equal Length";
}

// Alphabetical Order
function alphabet() {
  let s1 = document.getElementById("a1").value;
  let s2 = document.getElementById("a2").value;
  let x = s1.localeCompare(s2);
  if (x < 0)
    document.getElementById("out4").innerHTML = s1 + " comes Before " + s2;
  else if (x > 0)
    document.getElementById("out4").innerHTML = s1 + " comes After " + s2;
  else
    document.getElementById("out4").innerHTML = "Both Strings are Same";
}

// User Defined Comparison (Ignores Case)
function userDefined() {
  let s1 = document.getElementById("u1").value;
  let s2 = document.getElementById("u2").value;
  if (s1.length != s2.length) {
    document.getElementById("out5").innerHTML = "Strings are NOT Equal";
    return;
  }
  let flag = true;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toLowerCase() != s2[i].toLowerCase()) {
      flag = false;
      break;
    }
  }
  if (flag)
    document.getElementById("out5").innerHTML = "Strings are Equal (Ignoring Case)";
  else
    document.getElementById("out5").innerHTML = "Strings are NOT Equal";
}
