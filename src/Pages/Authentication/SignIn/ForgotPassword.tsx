import { Link } from "react-router-dom";
import ActionButton from "../../../Global Components/ActionButton";
import Inputs from "../../../Global Components/Inputs";
import PageInformation from "../../../Global Components/PageInformation";
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
    const ForgotPasswordInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
    ];

    return ( 
        <>
        <Helmet>
            <title>Forgot Password</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Forgot Password" details="Enter email address to receive a password reset OTP." />
                {ForgotPasswordInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <ActionButton buttonText="Request OTP" link="/reset-password" />
            </div>
        </div>
        </>
    );
}

export default ForgotPassword;