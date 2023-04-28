export const inputFocused = () => {
    const InputFields = document.querySelectorAll('input');

    InputFields.forEach(input => {
        const inputElement = input as HTMLInputElement;
        inputElement.style.borderColor = "#D9D9D9";
    })
}

export const errorFeedbacks = {
    emptyInputField: "Fill empty fields.",
    invalidEmail: "Enter a valid email address.",
    invalidPassword: "Password must meet all requirements.",
    passwordsDontMatch: "Passwords don't match.",
    existingUser: "Email already in use.",
    invalidUser: "Enter valid login details Or sign up if you don't have an account.",
    wrongPassword: "Wrong passwprd.",
};

export const authenticationErrors = {
    existingUser: "Firebase: Error (auth/email-already-in-use).",
    invalidUser: "",
    wrongPassword: "Firebase: Error (auth/wrong-password).",
}

export const eligibleEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

