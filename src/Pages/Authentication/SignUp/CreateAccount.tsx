import { useEffect, useState } from "react";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import ActionButton from '../../../GlobalComponents/ActionButton';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { formErrorsFeedbacks, eligibleEmailAddress, authenticationErrors, animatePage } from "../../../utils/FunctionsAndData";

const CreateAccount = () => {
    const createAccountInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
        {
            label: "Password",
            inputType: "password",
            placeholder: "Create password",
            passwordCharacterFilter: true
        },
        {
            label: "Confirm Password",
            inputType: "password",
            placeholder: "Confirm password"
        },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const createdPassword = document.querySelectorAll("input")[1] as HTMLInputElement;
        const confirmPassword = document.querySelectorAll("input")[2] as HTMLInputElement;
        confirmPassword.addEventListener("input", () => {
            if (createdPassword.value === confirmPassword.value) {
                confirmPassword.style.borderColor = "green";
            } else {
                confirmPassword.style.borderColor = "#D9D9D9";
            }
        })
    }, [])

    const signUp = () => {
        animatePage(true);

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement;

        const emailAddress = inputFields[0],
        createdPassword = inputFields[1],
        confirmedPassword = inputFields[2];
        
        const eligiblePasswordCharacters: RegExp[] = [ /[a-z]/, /[A-Z]/, /.{8,}/, /[0-9]/, /[^A-Za-z0-9]/ ];

        // Checking if there are any empty Input fields
        const emptyInputField = Array.from(inputFields).every(inputField => {
            return inputField.value;
        });
        if (!emptyInputField) {
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.emptyInputField;
            inputFields.forEach(inputField => {
                if (!inputField.value) {
                    inputField.style.borderColor = "red";
                }
            });

            animatePage(false);
            return;
        };

        // Checking if the email address entered is valid
        const invalidEmailAddress = eligibleEmailAddress.test(emailAddress.value)
        if (!invalidEmailAddress) {
            emailAddress.style.borderColor = "red";
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.invalidEmail;

            animatePage(false);
            return;
        };

        // Checking if password meets all requirements
        const validPassword = eligiblePasswordCharacters.every(character => {
            return character.test(createdPassword.value);
        });
        if (!validPassword) {
            createdPassword.style.borderColor = "red";
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.invalidPassword;
            animatePage(false);
            return;
        };

        // Checking if both password fields are the same
        if (createdPassword.value !== confirmedPassword.value) {
            confirmedPassword.style.borderColor = "red";
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.passwordsDontMatch;
            animatePage(false);
            return;
        };

        createUserWithEmailAndPassword(auth, emailAddress.value, createdPassword.value)
        .then(() => {
            const user: any | null = auth.currentUser;
            
            sendEmailVerification(user)
            .then(() => {
                animatePage(false);
                navigate("/complete-profile");
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            animatePage(false);

            const errorMessage = err.message;
            if (errorMessage === authenticationErrors.existingUser) {
                emailAddress.style.borderColor = "red";
                errorFeedbackDisplay.textContent = formErrorsFeedbacks.existingUser;
            };
        })
    };

    return ( 
        <>
        <Helmet>
            <title>Create Account</title>
        </Helmet>
        <div className="create-account h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Create Account" details="Begin your journey with Crossbase by signing up." />
                {createAccountInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs 
                            label={inputItem.label} 
                            inputType={inputItem.inputType} 
                            placeholder={inputItem.placeholder} 
                            passwordCharacterFilter={inputItem.passwordCharacterFilter} 
                        />
                    </div>
                ))}
                <div className="error-message text-red-600 "></div>
            </div>

            <div>
                <div className="text-[14px] text-14 mb-[55px] ">
                    Already have an account? <Link to="/login" className="text-[#CCFF01] ">Login</Link>
                </div>
                <div>
                    <ActionButton buttonText="Create Account" link="" functionOnClick={signUp} />
                </div>           
            </div>
        </div>
        </>
    );
}
 
export default CreateAccount;

// jesse@gmail.com
// Jesse2004#