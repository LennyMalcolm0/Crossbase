export const inputFocused = () => {
    const InputFields = document.querySelectorAll('input');

    InputFields.forEach(input => {
        const inputElement = input as HTMLInputElement;
        inputElement.style.borderColor = "#D9D9D9";
    })
};

export const animatePage = (answer: boolean) => {
    const pageBody = document.querySelector(".App") as HTMLElement;
    if (answer) {
        pageBody.classList.add("page-loading");
    } else {
        pageBody.classList.remove("page-loading");
    }
};

export const formErrorsFeedbacks = {
    emptyInputField: "Fill empty fields.",
    invalidEmail: "Enter a valid email address.",
    invalidPassword: "Password must meet all requirements.",
    passwordsDontMatch: "Passwords don't match.",
    existingUser: "Email already in use.",
    invalidUser: "Enter valid login details Or sign up if you don't have an account.",
    wrongPassword: "Wrong password.",
    noCountrySelected: "Please select your country.",
    invalidTransactionPin: "Please set a valid pin.",
    pinsDontMatch: "Pins don't match.",
    others: "Failed. Try again."
};

export const authenticationErrors = {
    existingUser: "Firebase: Error (auth/email-already-in-use).",
    wrongPassword: "Firebase: Error (auth/wrong-password).",
}

export const eligibleEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;