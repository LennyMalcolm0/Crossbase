import { Link } from "react-router-dom";
import ActionButton from "../../../Components/ActionButton";
import Inputs from "../../../Components/Inputs";
import PageAction from "../../../Components/PageInfo";

const ForgotPassword = () => {
    const ForgotPasswordInputs = [
        {
            label: "Email Address",
            inputType: "text",
            placeholder: "Enter email address"
        },
    ];

    // let inputsValueArray: string[] = [];
    // const inputs = document.querySelectorAll("input");
    // inputs.forEach(input => {
    //     inputsValueArray.push(input.value);

    //     // Reseting array values as each input value changes
    //     input.addEventListener("input", () => {
    //         inputsValueArray = [];
    //         inputs.forEach(input => {
    //             inputsValueArray.push(input.value);
    //         });
    //     })
    // });
    // useEffect(() => {
    //     inputs.forEach(input => {
    //         input.addEventListener("input", () => {
    //             inputsValueArray = [];
    //             inputs.forEach(input => {
    //                 inputsValueArray.push(input.value);
    //             });
    //         })
    //     });
    // }, [])

    return ( 
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageAction main="Forgot Password" details="Enter email address to receive a password reset OTP." />
                {ForgotPasswordInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                {/* <ActionButton buttonText="Request OTP" link="/reset-password" inputValues={inputsValueArray} /> */}
            </div>
        </div>
    );
}

export default ForgotPassword;