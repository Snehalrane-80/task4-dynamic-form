function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strength = document.getElementById("strength");

  if (password.length < 6) {
    strength.innerText = "Weak (min 6 chars)";
    strength.style.color = "red";
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    strength.innerText = "Medium (use uppercase & numbers)";
    strength.style.color = "orange";
  } else {
    strength.innerText = "Strong Password 💪";
    strength.style.color = "green";
  }
}

function checkConfirmMatch() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("matchMessage");

  if (confirm === "") {
    msg.innerText = "";
  } else if (confirm !== password) {
    msg.innerText = "Passwords do not match!";
    msg.style.color = "red";
  } else {
    msg.innerText = "Passwords match ✔️";
    msg.style.color = "green";
  }
}

function validateForm() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }

  // Simulate navigation
  showPage("success");
  return false; // Prevent actual form submit
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
