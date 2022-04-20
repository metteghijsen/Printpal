/**
 * Toggles the visibility of the password confirmation input.
 */
const showPasswordButton2 = document.getElementById("showPasswordButton2");
const visibilityIcon2 = document.getElementById("visibility-icon2");
showPasswordButton2.addEventListener("click",showPassword2);
function showPassword2() {
    let x = document.getElementById("password-confirmation");
    if (x.type === "password") {
        x.type = "text";
        visibilityIcon2.textContent = 'visibility';
    } else {
        x.type = "password";
        visibilityIcon2.textContent = 'visibility_off';
    }
}
