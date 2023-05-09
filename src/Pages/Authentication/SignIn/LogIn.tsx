import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../../GlobalComponents/ActionButton";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { animatePage, formErrorsFeedbacks, eligibleEmailAddress, authenticationErrors } from "../../../utils/FunctionsAndData";

const LogIn = () => {
    const loginInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
        {
            label: "Password",
            inputType: "password",
            placeholder: "Enter password"
        },
    ];

    const navigate = useNavigate();

    const signIn = () => {
        animatePage(true);

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement;
    
        const emailInput = inputFields[0];
        const passwordInput = inputFields[1];
        
        const email = emailInput.value;
        const password = passwordInput.value;

        // Checking if the email address entered is valid
        const invalidEmailAddress = eligibleEmailAddress.test(email)
        if (!invalidEmailAddress) {
            emailInput.style.borderColor = "red";
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.invalidEmail;

            animatePage(false);
            return;
        };
    
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            animatePage(false);
            navigate("/")
            console.log(userCredentials);
        })
        .catch(err => {
            animatePage(false);

            const errorMessage = err.message;
            if (errorMessage === authenticationErrors.wrongPassword) {
                passwordInput.style.borderColor = "red";
                errorFeedbackDisplay.textContent = formErrorsFeedbacks.wrongPassword;
            } else {
                inputFields.forEach(input => {
                    input.style.borderColor = "red";
                });

                errorFeedbackDisplay.textContent = formErrorsFeedbacks.invalidUser;
            }
        })
    };

    return ( 
        <>
        <Helmet>
            <title>Log In</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Login" details="Login to send money or stake to treasury." />
                {loginInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
                    </div>
                ))}
                <div className="error-message text-red-600 mb-[5px] "></div>
                <Link to="/forgot-password" className="text-[14px] text-14 text-[#CCFF01] ">Forgot password?</Link>
            </div>

            <div>
                <div className="text-[14px] text-14 mb-[55px] ">
                    Don't have an account? <Link to="/create-account" className="text-[#CCFF01] ">Create Account</Link>
                </div>
                <ActionButton buttonText="Login" link="" functionOnClick={signIn} />
            </div>
        </div>
        </>
    );
}
 
export default LogIn;