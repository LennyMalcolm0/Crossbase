import { useEffect, useState } from "react";
import Inputs from "../../../Global Components/Inputs";
import PageInformation from "../../../Global Components/PageInformation";
import ActionButton from '../../../Global Components/ActionButton';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { errorMessages, eligibleEmailAddress } from "../../../Data/GlobalData";

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

    const [ linkToNextPage, setLinkToNextPage ] = useState("");

    const signUpUser = () => {
        const pageBody = document.querySelector(".create-account") as HTMLElement;
        // pageBody.classList.add("page-loading");

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorMessageDisplay = document.querySelector(".error-message") as HTMLElement,
        actionButton = document.querySelector(".action-button") as HTMLElement;

        const emailAddress = inputFields[0],
        createdPassword = inputFields[1],
        confirmedPassword = inputFields[2];
        
        const eligiblePasswordCharacters: RegExp[] = [ /[a-z]/, /[A-Z]/, /.{8,}/, /[0-9]/, /[^A-Za-z0-9]/ ];

        // Checking if there are any empty Input fields
        const emptyInputField = Array.from(inputFields).every(inputField => {
            return inputField.value !== ""
        });
        if (!emptyInputField) {
            errorMessageDisplay.textContent = errorMessages.emptyInputField;
        }
        if(!emptyInputField) return;

        // Checking if the email address entered is valid
        const invalidEmailAddress = eligibleEmailAddress.test(emailAddress.value)
        if (!invalidEmailAddress) {
            errorMessageDisplay.textContent = errorMessages.invalidEmail;
        }
        if(!invalidEmailAddress) return;

        // Checking if password meets all requirements
        const validPassword = eligiblePasswordCharacters.every(character => {
            return character.test(createdPassword.value);
        });
        if (!validPassword) {
            createdPassword.style.borderColor = "red";
            errorMessageDisplay.textContent = errorMessages.invalidPassword;
        }
        if (!validPassword) return;

        // Checking if both password fields are the same
        if (createdPassword.value !== confirmedPassword.value) {
            confirmedPassword.style.borderColor = "red";
            errorMessageDisplay.textContent = errorMessages.passwordsDontMatch;
        }
        if (createdPassword.value !== confirmedPassword.value) return;


        createUserWithEmailAndPassword(auth, emailAddress.value, createdPassword.value)
        .then(() => {
            setLinkToNextPage("/complete-profile");
            pageBody.classList.remove("page-loading");
            
            actionButton.click();
        })
        .catch(err => {
            console.log(err)
        })
    }

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
                <div onClick={signUpUser}>
                    <ActionButton buttonText="Create Account" link={linkToNextPage} />   
                </div>           
            </div>
        </div>
        </>
    );
}
 
export default CreateAccount;

// leonardmalcolm00@gmail.com
// Lenny2004#