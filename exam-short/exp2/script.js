// one row of the table:  n x i | answer
function row(n, i) {
  return "<tr><td>" + n + " x " + i + "</td><td>" + (n * i) + "</td></tr>";
}

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
  var t1 = "";
  for (var i = 1; i <= limit; i++) { 
    t1 += row(n, i); 
  }

  // 2. WHILE loop
  var t2 = "";
  var j = 1;
  while (j <= limit) 
    { t2 += row(n, j); 
      j++; 
    }

  // 3. DO-WHILE loop
  var t3 = "";
  var k = 1;
  do 
  { 
    t3 += row(n, k); 
    k++; 
  } while (k <= limit);

  document.getElementById("forResult").innerHTML = "<table>" + t1 + "</table>";
  document.getElementById("whileResult").innerHTML = "<table>" + t2 + "</table>";
  document.getElementById("doResult").innerHTML = "<table>" + t3 + "</table>";
}
