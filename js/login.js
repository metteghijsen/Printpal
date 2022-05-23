/**
 * Toggles the visibility of the password input.
 */
const showPasswordButton = document.getElementById("showPasswordButton");
const visibilityIcon = document.getElementById("visibility-icon");
showPasswordButton.addEventListener("click", showPassword);
function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        visibilityIcon.textContent = 'visibility';
    } else {
        x.type = "password";
        visibilityIcon.textContent = 'visibility_off';
    }
}
