
const form = document.getElementById("form");
const passwordVal = document.getElementById("password");
const passwordIcon = document.getElementById("password-toggle-icon");


const showError = (field, errorText) => {
    field.classList.add("error");
}

const handleFormData = (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordVal.value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordVal, "Enter your password");
    }

    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    form.submit();
}

passwordIcon.addEventListener('click', () => {
    passwordIcon.className = passwordVal.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordVal.type = passwordVal.type === "password" ? "text" : "password";
});

form.addEventListener("submit", handleFormData);