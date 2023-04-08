import { useEffect, useState } from "react";
import Inputs from "../../../Components/Inputs";
import PageInformation from "../../../Components/PageInformation";
import ActionButton from '../../../Components/ActionButton';
import { Link } from "react-router-dom";

const CreateAccount = () => {
    const createAccountInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
        {
            label: "Password",
            inputType: "text",
            placeholder: "Create password"
        },
        {
            label: "Confirm Password",
            inputType: "text",
            placeholder: "Confirm password"
        },
    ];

    return ( 
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Create Account" details="Begin your journey with Crossbase by signing up." />
                {createAccountInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <div className="text-[14px] mb-[55px] ">
                    Already have an account? <Link to="/login" className="text-[#CCFF01] ">Login</Link>
                </div>
                <ActionButton buttonText="Create Account" link="/complete-profile" />               
            </div>
        </div>
    );
}
 
export default CreateAccount;