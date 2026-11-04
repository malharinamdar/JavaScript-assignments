let arr = [];

// ---------------- Messages ----------------
function showCreateMessage(msg) { document.getElementById("createMessage").textContent = msg; }
function showRemoveMessage(msg) { document.getElementById("removeMessage").textContent = msg; }
function showSearchMessage(msg) { document.getElementById("searchMessage").textContent = msg; }
function showEmptyMessage(msg)  { document.getElementById("emptyMessage").textContent = msg; }
function clearMessages() {
  showCreateMessage(""); showRemoveMessage("");
  showSearchMessage(""); showEmptyMessage("");
}

// ---------------- Generate Inputs ----------------
function generateElementInputs() {
  clearMessages();
  const size = parseInt(document.getElementById("arraySize").value);
  const container = document.getElementById("elementInputs");
  container.innerHTML = "";
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.id = "element_" + i;
      input.placeholder = "Element " + (i + 1);
      container.appendChild(input);
    }
    document.getElementById("submitElementsBtn").style.display = "inline-block";
    showCreateMessage("Enter " + size + " integer elements and click Submit.");
  } else {
    document.getElementById("submitElementsBtn").style.display = "none";
    showCreateMessage("Please enter a valid array size.");
  }
}

// ---------------- Submit Array ----------------
function submitElements() {
  clearMessages();
  const inputs = document.getElementById("elementInputs").getElementsByTagName("input");
  let temp = [];
  for (let input of inputs) {
    let num = parseInt(input.value);
    if (isNaN(num)) {
      showCreateMessage("Please enter all elements.");
      return;
    }
    temp.push(num);
  }
  arr = temp.slice();
  displayMasterArray();
  document.getElementById("removeArray").textContent = "[]";
  document.getElementById("emptyArray").textContent = "[]";
  showCreateMessage("Array created successfully.");
}

// ---------------- Remove Normal ----------------
function removeNormal() {
  const value = parseInt(document.getElementById("removeValue").value);
  if (isNaN(value)) { showRemoveMessage("Please enter a value to remove."); return; }
  const newArray = arr.filter(item => item !== value);
  displayMasterArray();
  document.getElementById("removeArray").textContent = JSON.stringify(newArray);
  if (newArray.length < arr.length)
    showRemoveMessage("Element removed using normal method.");
  else
    showRemoveMessage("Element not found.");
}

// ---------------- Remove Splice ----------------
function removeSplice() {
  const value = parseInt(document.getElementById("removeValue").value);
  if (isNaN(value)) { showRemoveMessage("Please enter a value to remove."); return; }
  let newArray = arr.slice();
  let index = newArray.indexOf(value);
  if (index != -1) {
    newArray.splice(index, 1);
    showRemoveMessage("Element removed using splice().");
  } else {
    showRemoveMessage("Element not found.");
  }
  displayMasterArray();
  document.getElementById("removeArray").textContent = JSON.stringify(newArray);
}

// ---------------- Linear Search ----------------
function searchLinear() {
  const value = parseInt(document.getElementById("searchValue").value);
  if (isNaN(value)) { showSearchMessage("Please enter a value to search."); return; }
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) { index = i; break; }
  }
  if (index != -1)
    showSearchMessage("Element found at index " + index);
  else
    showSearchMessage("Element not found.");
}

// ---------------- Includes Search ----------------
function searchIncludes() {
  const value = parseInt(document.getElementById("searchValue").value);
  if (isNaN(value)) { showSearchMessage("Please enter a value to search."); return; }
  let index = arr.indexOf(value);
  if (index != -1)
    showSearchMessage("Element found at index " + index);
  else
    showSearchMessage("Element not found.");
}

// ---------------- Empty Normal ----------------
function emptyNormal() {
  const empty = [];
  displayMasterArray();
  document.getElementById("emptyArray").textContent = JSON.stringify(empty);
  showEmptyMessage("Array emptied using normal method.");
}

// ---------------- Empty Splice ----------------
function emptySplice() {
  let empty = arr.slice();
  empty.splice(0, empty.length);
  displayMasterArray();
  document.getElementById("emptyArray").textContent = JSON.stringify(empty);
  showEmptyMessage("Array emptied using splice().");
}

// ---------------- Display ----------------
function displayMasterArray() {
  document.getElementById("currentArray").textContent = JSON.stringify(arr);
}
