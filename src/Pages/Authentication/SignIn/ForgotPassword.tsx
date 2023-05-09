import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../../GlobalComponents/ActionButton";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { animatePage, eligibleEmailAddress, formErrorsFeedbacks } from "../../../utils/FunctionsAndData";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const forgotPassword = () => {
        animatePage(true);

        const emailInput = document.querySelector("input") as HTMLInputElement,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement;

        // Checking if the email address entered is valid
        const invalidEmailAddress = eligibleEmailAddress.test(emailInput.value);
        if (!invalidEmailAddress) {
            emailInput.style.borderColor = "red";
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.invalidEmail;

            animatePage(false);
            return;
        };

        sendPasswordResetEmail(auth, emailInput.value)
        .then(() => {
            animatePage(false);
            navigate("/login");
        })
        .catch(() => {
            animatePage(false);
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.others;
        });
    };

    return ( 
        <>
        <Helmet>
            <title>Forgot Password</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Forgot Password" details="Enter email address to receive a password reset link." />
                <Inputs label="Email Address" inputType="text" placeholder="Enter email address" />
                <div className="error-message text-red-600 "></div>
            </div>

            <div>
                <ActionButton buttonText="Request OTP" functionOnClick={forgotPassword} />
            </div>
        </div>
        </>
    );
}

export default ForgotPassword;