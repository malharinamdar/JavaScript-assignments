let arr = [];
let maxSize = 0;

function createArray() {
  const size = parseInt(document.getElementById("size").value);
  if (isNaN(size) || size <= 0) {
    document.getElementById("createOut").innerHTML =
      '<span class="error">Please enter a valid size.</span>';
    return;
  }
  maxSize = size;
  arr = [];
  document.getElementById("createOut").innerHTML =
    `Array created. Now add ${maxSize} element(s).<br>
     <span class="array-line">Array: ${JSON.stringify(arr)}</span>`;
  document.getElementById("addOut").innerHTML = "";
  document.getElementById("checkOut").innerHTML = "";
}

function addElement() {
  const val = document.getElementById("elemVal").value.trim();
  const out = document.getElementById("addOut");

  if (maxSize === 0) {
    out.innerHTML = '<span class="error">Please create an array first.</span>';
    return;
  }
  if (arr.length >= maxSize) {
    out.innerHTML =
      `Array already full. Cannot add more elements.<br>
       <span class="array-line">Array: ${JSON.stringify(arr)}</span>`;
    return;
  }
  if (val === "") {
    out.innerHTML = '<span class="error">Please enter a value.</span>';
    return;
  }

  // Auto-convert to number, boolean, or array/object if applicable
  let parsed;
  if (val === "true") parsed = true;
  else if (val === "false") parsed = false;
  else if (!isNaN(val) && val !== "") parsed = Number(val);
  else if (val.startsWith("[") || val.startsWith("{")) {
    try { parsed = JSON.parse(val); }
    catch (e) { parsed = val; }
  }
  else parsed = val;

  arr.push(parsed);
  document.getElementById("elemVal").value = "";

  out.innerHTML =
    `Added ${JSON.stringify(parsed)}. (${arr.length}/${maxSize} filled)<br>
     <span class="array-line">Array: ${JSON.stringify(arr)}</span>`;
}

function checkIsArray() {
  const idx = parseInt(document.getElementById("indexVal").value);
  const out = document.getElementById("checkOut");

  if (arr.length === 0) {
    out.innerHTML = '<span class="error">Array is empty. Please add elements first.</span>';
    return;
  }
  if (isNaN(idx) || idx < 0 || idx >= arr.length) {
    out.innerHTML =
      `<span class="error">Please enter a valid index within array bounds.</span><br>
       <span class="array-line">Array: ${JSON.stringify(arr)}</span>`;
    return;
  }

  const el = arr[idx];
  const result = Array.isArray(el);
  out.innerHTML =
    `(arr[${idx}]): ${result} &nbsp; (arr[${idx}] = ${JSON.stringify(el)})<br>
     <span class="array-line">Array: ${JSON.stringify(arr)}</span>`;
}
