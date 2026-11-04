function showTable() {
  var n = parseInt(document.getElementById("num").value);
  var limit = parseInt(document.getElementById("limit").value);

  document.getElementById("error").innerHTML = "";
  document.getElementById("forResult").innerHTML = "";
  document.getElementById("whileResult").innerHTML = "";
  document.getElementById("doResult").innerHTML = "";

  if (isNaN(n) || isNaN(limit) || n == 0 || limit < 1) {
    document.getElementById("error").innerHTML = "Enter a valid number (not 0) and length!";
    return;
  }

  // 1. FOR loop
  var forOut = "<table>";
  for (var i = 1; i <= limit; i++) {
    forOut += "<tr><td>" + n + " x " + i + "</td><td>" + (n * i) + "</td></tr>";
  }
  forOut += "</table>";
  document.getElementById("forResult").innerHTML = forOut;

  // 2. WHILE loop
  var whileOut = "<table>";
  var j = 1;
  while (j <= limit) {
    whileOut += "<tr><td>" + n + " x " + j + "</td><td>" + (n * j) + "</td></tr>";
    j++;
  }
  whileOut += "</table>";
  document.getElementById("whileResult").innerHTML = whileOut;

  // 3. DO-WHILE loop
  var doOut = "<table>";
  var k = 1;
  do {
    doOut += "<tr><td>" + n + " x " + k + "</td><td>" + (n * k) + "</td></tr>";
    k++;
  } while (k <= limit);
  doOut += "</table>";
  document.getElementById("doResult").innerHTML = doOut;
}
