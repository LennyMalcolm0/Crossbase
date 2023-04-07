import { Link } from "react-router-dom";
import ActionButton from "../../../Components/ActionButton";
import Inputs from "../../../Components/Inputs";
import PageAction from "../../../Components/PageInfo";

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
                <PageAction main="Reset Password" details="Enter email address to receive a password reset OTP." />
                {ResetPasswordInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                {/* <ActionButton buttonText="Reset Password" link="/login" /> */}
            </div>
        </div>
    );
}
 
export default ResetPassword;