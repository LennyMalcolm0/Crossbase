import { useEffect, useState } from "react";
import Inputs from "../../../Components/General Components/Inputs";
import PageInformation from "../../../Components/General Components/PageInformation";
import ActionButton from '../../../Components/General Components/ActionButton';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

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
            placeholder: "Create password"
        },
        {
            label: "Confirm Password",
            inputType: "password",
            placeholder: "Confirm password"
        },
    ];

    return ( 
        <>
        <Helmet>
            <title>Create Account</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Create Account" details="Begin your journey with Crossbase by signing up." />
                {createAccountInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <div className="text-[14px] text-14 mb-[55px] ">
                    Already have an account? <Link to="/login" className="text-[#CCFF01] ">Login</Link>
                </div>
                <ActionButton buttonText="Create Account" link="/complete-profile" />               
            </div>
        </div>
        </>
    );
}
 
export default CreateAccount;