let valid;

// shows the error div if ok is false, hides it if ok is true
function check(id, ok) {
  document.getElementById(id).style.display = ok ? "none" : "block";
  if (!ok) valid = false;
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+\-]*@[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$/;

  valid = true;
  check("nameErr", /^[a-zA-Z\s]{3,}$/.test(name));          // letters + spaces, min 3
  check("addressErr", address !== "");                        // not empty
  check("cityErr", /^[a-zA-Z\s]{2,}$/.test(city));           // letters, min 2
  check("stateErr", state !== "");                            // a state selected
  check("genderErr", genderEl !== null);                      // a gender selected
  check("mobileErr", /^[7-9][0-9]{9}$/.test(mobile));         // 10 digits, starts 7/8/9
  check("emailErr", emailRegex.test(email) && !email.includes(".."));
  if (!valid) return;

  // Show success page
  document.getElementById("rName").textContent = name;
  document.getElementById("rAddress").textContent = address;
  document.getElementById("rCity").textContent = city;
  document.getElementById("rState").textContent = state;
  document.getElementById("rGender").textContent = genderEl.value;
  document.getElementById("rMobile").textContent = mobile;
  document.getElementById("rEmail").textContent = email;
  document.getElementById("formPage").style.display = "none";
  document.getElementById("successPage").style.display = "block";
}

function goBack() {
  // Clear all filled details
  ["name", "address", "city", "state", "mobile", "email"].forEach(function (id) { document.getElementById(id).value = ""; });
  const genderEl = document.querySelector('input[name="gender"]:checked');
  if (genderEl) genderEl.checked = false;

  document.getElementById("formPage").style.display = "block";
  document.getElementById("successPage").style.display = "none";
}
