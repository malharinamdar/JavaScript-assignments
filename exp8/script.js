var focused = false;

function setStatus(evt, source, color) {
  document.body.style.backgroundColor = color;
  document.getElementById('status').innerHTML =
    'Event: <u>' + evt + '</u> on <b>' + source + '</b> &nbsp;|&nbsp; Color: ' + color;
}

function resetDefault() {
  document.body.style.backgroundColor = 'white';
  document.getElementById('status').innerHTML = 'Default &nbsp;|&nbsp; Color: white';
}

function doHover(color, source) {
  if (focused) return;
  setStatus('mouseover', source, color);
}

function doHoverOut() {
  if (focused) return;
  resetDefault();
}

function doFocus(color, source) {
  focused = true;
  setStatus('focus', source, color);
}

function doBlurReset() {
  focused = false;
  resetDefault();
}
