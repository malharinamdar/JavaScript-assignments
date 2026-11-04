// writes the message into the result <p> and colours it (ok = green, error = red)
function show(id, msg, cls) {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).className = cls;
}

// CIRCLE
function circleArea() {
  var r = parseFloat(document.getElementById("radius").value);
  if (isNaN(r) || r <= 0) { show("circleResult", "Invalid input! Radius must be positive.", "error"); return; }
  show("circleResult", "Area = " + (Math.PI * r * r).toFixed(2), "ok");
}

// RECTANGLE
function rectangleArea() {
  var l = parseFloat(document.getElementById("length").value);
  var w = parseFloat(document.getElementById("width").value);
  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) { show("rectResult", "Invalid input! Sides must be positive.", "error"); return; }
  show("rectResult", "Area = " + (l * w), "ok");
}

// TRIANGLE (3 sides + Heron's formula)
function triangleArea() {
  var a = parseFloat(document.getElementById("sideA").value);
  var b = parseFloat(document.getElementById("sideB").value);
  var c = parseFloat(document.getElementById("sideC").value);
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) { show("triResult", "Invalid input! Sides must be positive.", "error"); return; }
  if (a + b <= c || b + c <= a || a + c <= b) { show("triResult", "Not a valid triangle!", "error"); return; }

  var s = (a + b + c) / 2;                                   // semi-perimeter
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));     // Heron's formula
  show("triResult", "Area = " + area.toFixed(2), "ok");
}
