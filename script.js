/** @HTMLElement */
let passwordField = document.querySelector("input[name='password']");
let passwordConfirmField = document.querySelector("input[name='confirm-password']");
let conditions = document.querySelector(".password-conditions");
let minCharCountCondition = document.querySelector(".min-char-count-check");
let oneLetterCondition = document.querySelector(".one-letter-check");
let oneCharCondition = document.querySelector(".one-char-check");
let passwordMismatch = document.querySelector("p.password-mismatch");

passwordField.addEventListener("input", () => {
	minCharCountCondition.setAttribute("checked", passwordField.value.length >= 8);
	oneLetterCondition.setAttribute("checked", passwordField.value.length >= 1);
	oneCharCondition.setAttribute("checked", new RegExp(/\w/).test(passwordField.value));
});

passwordConfirmField.addEventListener("input", () => {
	passwordMismatch.style.visibility = passwordField.value === passwordConfirmField.value ? "hidden" : "visible";
});
