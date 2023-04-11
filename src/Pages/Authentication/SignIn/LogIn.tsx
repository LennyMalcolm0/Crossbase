import { Link } from "react-router-dom";
import ActionButton from "../../../Components/General Components/ActionButton";
import Inputs from "../../../Components/General Components/Inputs";
import PageInformation from "../../../Components/General Components/PageInformation";
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
            inputType: "text",
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
                {loginInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
                <Link to="/forgot-password" className="text-[14px] text-[#CCFF01] ">Forgot password?</Link>
            </div>

            <div>
                <div className="text-[14px] mb-[55px] ">
                    Don't have an account? <Link to="/create-account" className="text-[#CCFF01] ">Create Account</Link>
                </div>
                <ActionButton buttonText="Login" link="/" />
            </div>
        </div>
        </>
    );
}
 
export default LogIn;