let arr = [];

// small helpers
function msg(id, text) { document.getElementById(id).textContent = text; }
function showArray(id, a) { document.getElementById(id).textContent = JSON.stringify(a); }
function clearMessages() { msg("createMessage", ""); msg("removeMessage", ""); msg("searchMessage", ""); msg("emptyMessage", ""); }

// ---------------- Generate Inputs ----------------
function generateElementInputs() {
  clearMessages();
  const size = parseInt(document.getElementById("arraySize").value);
  const container = document.getElementById("elementInputs");
  container.innerHTML = "";
  if (isNaN(size) || size < 1) {
    document.getElementById("submitElementsBtn").style.display = "none";
    msg("createMessage", "Please enter a valid array size.");
    return;
  }
  for (let i = 0; i < size; i++) {
    container.innerHTML += '<input type="number" id="element_' + i + '" placeholder="Element ' + (i + 1) + '">';
  }
  document.getElementById("submitElementsBtn").style.display = "inline-block";
  msg("createMessage", "Enter " + size + " integer elements and click Submit.");
}

// ---------------- Submit Array ----------------
function submitElements() {
  clearMessages();
  const inputs = document.getElementById("elementInputs").getElementsByTagName("input");
  let temp = [];
  for (let input of inputs) {
    let num = parseInt(input.value);
    if (isNaN(num)) { msg("createMessage", "Please enter all elements."); return; }
    temp.push(num);
  }
  arr = temp;
  showArray("currentArray", arr);
  showArray("removeArray", []);
  showArray("emptyArray", []);
  msg("createMessage", "Array created successfully.");
}

// ---------------- Remove ----------------
function removeNormal() {
  const value = parseInt(document.getElementById("removeValue").value);
  if (isNaN(value)) { msg("removeMessage", "Please enter a value to remove."); return; }
  const newArray = arr.filter(item => item !== value);
  showArray("removeArray", newArray);
  msg("removeMessage", newArray.length < arr.length ? "Element removed using normal method." : "Element not found.");
}

function removeSplice() {
  const value = parseInt(document.getElementById("removeValue").value);
  if (isNaN(value)) { msg("removeMessage", "Please enter a value to remove."); return; }
  let newArray = arr.slice();
  let index = newArray.indexOf(value);
  if (index != -1) newArray.splice(index, 1);
  showArray("removeArray", newArray);
  msg("removeMessage", index != -1 ? "Element removed using splice()." : "Element not found.");
}

// ---------------- Search ----------------
function searchLinear() {
  const value = parseInt(document.getElementById("searchValue").value);
  if (isNaN(value)) { msg("searchMessage", "Please enter a value to search."); return; }
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) { index = i; break; }
  }
  msg("searchMessage", index != -1 ? "Element found at index " + index : "Element not found.");
}

function searchIncludes() {
  const value = parseInt(document.getElementById("searchValue").value);
  if (isNaN(value)) { msg("searchMessage", "Please enter a value to search."); return; }
  msg("searchMessage", arr.includes(value) ? "Element found at index " + arr.indexOf(value) : "Element not found.");
}

// ---------------- Empty ----------------
function emptyNormal() {
  showArray("emptyArray", []);
  msg("emptyMessage", "Array emptied using normal method.");
}

function emptySplice() {
  let empty = arr.slice();
  empty.splice(0, empty.length);
  showArray("emptyArray", empty);
  msg("emptyMessage", "Array emptied using splice().");
}
