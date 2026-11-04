function showError(id, show) {
  document.getElementById(id).style.display = show ? "block" : "none";
}

function validateForm() {
  let valid = true;

  // Name: only letters and spaces, min 3 chars
  const name = document.getElementById("name").value.trim();
  if (name === "" || !/^[a-zA-Z\s]{3,}$/.test(name)) {
    showError("nameErr", true); valid = false;
  } else { showError("nameErr", false); }

  // Address: not empty
  const address = document.getElementById("address").value.trim();
  if (address === "") {
    showError("addressErr", true); valid = false;
  } else { showError("addressErr", false); }

  // City: only letters, min 2 chars
  const city = document.getElementById("city").value.trim();
  if (city === "" || !/^[a-zA-Z\s]{2,}$/.test(city)) {
    showError("cityErr", true); valid = false;
  } else { showError("cityErr", false); }

  // State
  const state = document.getElementById("state").value;
  if (state === "") {
    showError("stateErr", true); valid = false;
  } else { showError("stateErr", false); }

  // Gender
  const genderEl = document.querySelector('input[name="gender"]:checked');
  if (!genderEl) {
    showError("genderErr", true); valid = false;
  } else { showError("genderErr", false); }

  // Mobile: 10 digits, starts with 7, 8, or 9
  const mobile = document.getElementById("mobile").value.trim();
  if (!/^[7-9][0-9]{9}$/.test(mobile)) {
    showError("mobileErr", true); valid = false;
  } else { showError("mobileErr", false); }

  // Email: real-life validation
  // Local part: alphanumeric + allowed special chars (. _ % + -)
  // Must not start/end with a special char
  // Domain: alphanumeric + hyphens, proper TLD (2-6 letters)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+\-]*@[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email) || email.includes("..")) {
    showError("emailErr", true); valid = false;
  } else { showError("emailErr", false); }

  if (valid) {
    // Show success page
    document.getElementById("rName").textContent    = name;
    document.getElementById("rAddress").textContent = address;
    document.getElementById("rCity").textContent    = city;
    document.getElementById("rState").textContent   = state;
    document.getElementById("rGender").textContent  = genderEl.value;
    document.getElementById("rMobile").textContent  = mobile;
    document.getElementById("rEmail").textContent   = email;

    document.getElementById("formPage").style.display    = "none";
    document.getElementById("successPage").style.display = "block";
  }
}

function goBack() {
  // Clear all filled details
  document.getElementById("name").value    = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value    = "";
  document.getElementById("state").value   = "";
  document.getElementById("mobile").value  = "";
  document.getElementById("email").value   = "";
  const genderEl = document.querySelector('input[name="gender"]:checked');
  if (genderEl) genderEl.checked = false;

  document.getElementById("formPage").style.display    = "block";
  document.getElementById("successPage").style.display = "none";
}
