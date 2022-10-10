/** @HTMLElement */
let passwordField = document.querySelector("input[name='password']");
let conditions = document.querySelector(".password-conditions");
let minCharCountCondition = document.querySelector(".min-char-count-check");
let oneLetterCondition = document.querySelector(".one-letter-check");
let oneCharCondition = document.querySelector(".one-char-check");

passwordField.addEventListener("input", () => {
	console.log(passwordField.value);
    minCharCountCondition.setAttribute("checked", passwordField.value.length >= 8);
    oneLetterCondition.setAttribute("checked", passwordField.value.length >= 1);
    oneCharCondition.setAttribute("checked", new RegExp(/\w/).test(passwordField.value));
});
