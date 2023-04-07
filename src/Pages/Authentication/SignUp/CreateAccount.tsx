import { useEffect, useState } from "react";
import Inputs from "../../../Components/Inputs";
import PageAction from "../../../Components/PageInfo";
import ActionButton from '../../../Components/ActionButton';

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

    const [finalInputsValueArray, setFinalInputsArray] = useState<string[]>([]);
    let initialInputsValueArray: string[] = [];
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        initialInputsValueArray.push(input.value);
        setFinalInputsArray(initialInputsValueArray);
    });
    useEffect(() => {
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                initialInputsValueArray = [];
                inputs.forEach(input => {
                    initialInputsValueArray.push(input.value);
                    setFinalInputsArray(initialInputsValueArray);
                });
            })
        });
    }, [])

    return ( 
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageAction main="Create Account" details="Begin your journey with Crossbase by signing up." />
                {createAccountInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <div className="text-[14px] mb-[55px] ">
                    Already have an account? <span className="text-[#CCFF01] ">Login</span>
                </div>
                <ActionButton buttonText="Create Account" link="/complete-profile" inputValues={finalInputsValueArray} />
            </div>
        </div>
    );
}
 
export default CreateAccount;