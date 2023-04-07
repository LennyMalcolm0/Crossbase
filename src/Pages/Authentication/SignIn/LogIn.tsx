import { Link } from "react-router-dom";
import ActionButton from "../../../Components/ActionButton";
import Inputs from "../../../Components/Inputs";
import PageAction from "../../../Components/PageInfo";

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
                <PageAction main="Login" details="Login to send money or stake to treasury." />
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
                {/* <ActionButton buttonText="Login" link="/" /> */}
            </div>
        </div>
    );
}
 
export default LogIn;