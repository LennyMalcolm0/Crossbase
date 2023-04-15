import { Link } from "react-router-dom";
import ActionButton from "../../../Components/General Components/ActionButton";
import Inputs from "../../../Components/General Components/Inputs";
import PageInformation from "../../../Components/General Components/PageInformation";
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
            inputType: "password",
            placeholder: "Enter New Password"
        },
        {
            label: "Confirm password",
            inputType: "password",
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
                {ResetPasswordInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
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