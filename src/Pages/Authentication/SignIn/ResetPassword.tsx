import { Link } from "react-router-dom";
import ActionButton from "../../../Components/ActionButton";
import Inputs from "../../../Components/Inputs";
import PageInformation from "../../../Components/PageInformation";
import { Helmet } from 'react-helmet';

const ResetPassword = () => {
    const ResetPasswordInputs = [
        {
            label: "Reset OTP",
            inputType: "number",
            placeholder: "Enter OTP"
        },
        {
            label: "New Password",
            inputType: "text",
            placeholder: "Enter New Password"
        },
        {
            label: "Confirm password",
            inputType: "text",
            placeholder: "Confirm password"
        },
    ];

    return ( 
        <>
        <Helmet>
            <title>Reset Password</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Reset Password" details="Enter email address to receive a password reset OTP." />
                {ResetPasswordInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <ActionButton buttonText="Reset Password" link="/login" />
            </div>
        </div>
        </>
    );
}
 
export default ResetPassword;