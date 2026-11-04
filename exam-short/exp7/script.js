let arr = [];
let maxSize = 0;

// small helpers
function out(id, html) { document.getElementById(id).innerHTML = html; }
function error(text) { return '<span class="error">' + text + '</span>'; }
function arrayLine() { return '<br><span class="array-line">Array: ' + JSON.stringify(arr) + '</span>'; }

function createArray() {
  const size = parseInt(document.getElementById("size").value);
  if (isNaN(size) || size <= 0) { out("createOut", error("Please enter a valid size.")); return; }
  maxSize = size;
  arr = [];
  out("createOut", "Array created. Now add " + maxSize + " element(s)." + arrayLine());
  out("addOut", "");
  out("checkOut", "");
}

function addElement() {
  const val = document.getElementById("elemVal").value.trim();
  if (maxSize === 0) { out("addOut", error("Please create an array first.")); return; }
  if (arr.length >= maxSize) { out("addOut", "Array already full. Cannot add more elements." + arrayLine()); return; }
  if (val === "") { out("addOut", error("Please enter a value.")); return; }

  // convert to the right type: number / boolean / array / object, otherwise keep as string
  let parsed;
  if (val === "true") parsed = true;
  else if (val === "false") parsed = false;
  else if (!isNaN(val)) parsed = Number(val);
  else if (val.startsWith("[") || val.startsWith("{")) {
    try { parsed = JSON.parse(val); }
    catch (e) { parsed = val; }
  }
  else parsed = val;

  arr.push(parsed);
  document.getElementById("elemVal").value = "";
  out("addOut", "Added " + JSON.stringify(parsed) + ". (" + arr.length + "/" + maxSize + " filled)" + arrayLine());
}

function checkIsArray() {
  const idx = parseInt(document.getElementById("indexVal").value);
  if (arr.length === 0) { out("checkOut", error("Array is empty. Please add elements first.")); return; }
  if (isNaN(idx) || idx < 0 || idx >= arr.length) { out("checkOut", error("Please enter a valid index within array bounds.") + arrayLine()); return; }

  const el = arr[idx];
  out("checkOut", "(arr[" + idx + "]): " + Array.isArray(el) + " &nbsp; (arr[" + idx + "] = " + JSON.stringify(el) + ")" + arrayLine());
}
