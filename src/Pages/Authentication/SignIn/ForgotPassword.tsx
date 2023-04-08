import { Link } from "react-router-dom";
import ActionButton from "../../../Components/ActionButton";
import Inputs from "../../../Components/Inputs";
import PageInformation from "../../../Components/PageInformation";

const ForgotPassword = () => {
    const ForgotPasswordInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
    ];

    return ( 
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Forgot Password" details="Enter email address to receive a password reset OTP." />
                {ForgotPasswordInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <ActionButton buttonText="Request OTP" link="/reset-password" />
            </div>
        </div>
    );
}

export default ForgotPassword;