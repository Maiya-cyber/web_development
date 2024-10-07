document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    let valid = true;

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;

    // Name validation
    if (name === "") {
        showError("nameError", "Name is required.");
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        valid = false;
    }

    // Password validation
    if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters long.");
        valid = false;
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        showError("confirmPasswordError", "Passwords do not match.");
        valid = false;
    }

    // Age validation
    if (age < 18 || age > 100) {
        showError("ageError", "Age must be between 18 and 100.");
        valid = false;
    }

    // Gender validation
    if (!gender) {
        showError("genderError", "Gender is required.");
        valid = false;
    }

    // Country validation
    if (country === "") {
        showError("countryError", "Please select a country.");
        valid = false;
    }

    // Terms validation
    if (!terms) {
        showError("termsError", "You must agree to the Terms and Conditions.");
        valid = false;
    }

    // If all validations pass, submit the form (you can handle the submission here)
    if (valid) {
        alert("Registration successful!");
        // You can proceed with form submission or AJAX call
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    // Get values from the login form
    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (loginEmail === "" || !emailPattern.test(loginEmail)) {
        showError("loginEmailError", "Please enter a valid email address.");
    }

    // Password validation
    if (loginPassword === "") {
        showError("loginPasswordError", "Password is required.");
    }

    // If all validations pass, submit the login form (you can handle the submission here)
    if (loginEmail && loginPassword) {
        alert("Login successful!");
        // You can proceed with form submission or AJAX call
    }
});

// Helper functions
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = "";
    });
}
