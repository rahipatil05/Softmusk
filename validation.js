document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let country = document.getElementById("country").value;
  let term = document.getElementById("term").checked;

  let usernameError = document.getElementById("usernameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let genderError = document.getElementById("genderError");
  let countryError = document.getElementById("countryError");
  let termError = document.getElementById("termError");
  let formMessage = document.getElementById("formMessage");

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  genderError.textContent = "";
  countryError.textContent = "";
  termError.textContent = "";
  formMessage.textContent = "";

  if (username === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must have uppercase, lowercase, number & special char (min 8)";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm your password";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (!gender) {
    genderError.textContent = "Please select gender";
    isValid = false;
  }

  if (country === "") {
    countryError.textContent = "Please select your country";
    isValid = false;
  }

  if (!term) {
    termError.textContent = "You must accept terms";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    console.log("Form Data:", { username, email, gender, country });
    document.getElementById("signupForm").reset();
  }
});
