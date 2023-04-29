import { Link } from "react-router-dom";
import ActionButton from "../../../GlobalComponents/ActionButton";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';

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
                <Link to="/forgot-password" className="text-[14px] text-14 text-[#CCFF01] ">Forgot password?</Link>
            </div>

            <div>
                <div className="text-[14px] text-14 mb-[55px] ">
                    Don't have an account? <Link to="/create-account" className="text-[#CCFF01] ">Create Account</Link>
                </div>
                <ActionButton buttonText="Login" link="/" />
            </div>
        </div>
        </>
    );
}
 
export default LogIn;