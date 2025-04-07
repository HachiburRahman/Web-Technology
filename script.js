document.addEventListener("DOMContentLoaded", function () 
{
  const form = document.getElementById("registrationForm");
  const messageBox = document.getElementById("messageBox");

  function showMessage(message, type = "error") {
    messageBox.textContent = message;
    messageBox.style.display = "block";
    messageBox.style.color = type === "success" ? "green" : "red";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value;
    const cPass = document.getElementById("cPassword").value;
    const location = document.getElementById("location").value.trim();
    const pCode = document.getElementById("pCode").value.trim();
    const terms = document.getElementById("terms").checked;

    const nameRegex = /^[A-Za-z\s]+$/;
    const aiubEmailRegex = /^[a-zA-Z0-9._%+-]+@student\.aiub\.edu$/;

    if (!name || !email || !pass || !cPass || !location || !pCode) {
      showMessage("Please fill in all required fields.");
      return;
    }

    if (!nameRegex.test(name)) {
      showMessage("Full Name must only contain letters.");
      return;
    }

    if (!aiubEmailRegex.test(email)) {
      showMessage("Email must be a valid @student.aiub.edu address.");
      return;
    }

    if (pass.length < 6) {
      showMessage("Password must be at least 6 characters long.");
      return;
    }

    if (pass !== cPass) {
      showMessage("Passwords do not match.");
      return;
    }

    if (isNaN(pCode)) {
      showMessage("Postal Code must be a number.");
      return;
    }

    if (!terms) {
      showMessage("You must agree to the terms and conditions.");
      return;
    }

    showMessage("Registration successful!", "success");
  });
});
