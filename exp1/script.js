// CIRCLE
function circleArea() {
  var r = parseFloat(document.getElementById("radius").value);
  var result = document.getElementById("circleResult");

  if (isNaN(r) || r <= 0) {
    result.innerHTML = "Invalid input! Radius must be positive.";
    result.className = "error";
    return;
  }

  var area = Math.PI * r * r;
  result.innerHTML = "Area = " + area.toFixed(2);
  result.className = "ok";
}

// RECTANGLE
function rectangleArea() {
  var l = parseFloat(document.getElementById("length").value);
  var w = parseFloat(document.getElementById("width").value);
  var result = document.getElementById("rectResult");

  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
    result.innerHTML = "Invalid input! Sides must be positive.";
    result.className = "error";
    return;
  }

  var area = l * w;
  result.innerHTML = "Area = " + area;
  result.className = "ok";
}

// TRIANGLE (3 sides + Heron's formula)
function triangleArea() {
  var a = parseFloat(document.getElementById("sideA").value);
  var b = parseFloat(document.getElementById("sideB").value);
  var c = parseFloat(document.getElementById("sideC").value);
  var result = document.getElementById("triResult");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    result.innerHTML = "Invalid input! Sides must be positive.";
    result.className = "error";
    return;
  }

  // Triangle inequality: sum of any two sides > third side
  if (a + b <= c || b + c <= a || a + c <= b) {
    result.innerHTML = "Not a valid triangle!";
    result.className = "error";
    return;
  }

  // Heron's formula
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  result.innerHTML = "Area = " + area.toFixed(2);
  result.className = "ok";
}
