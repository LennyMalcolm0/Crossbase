import ActionButton from "../../Components/ActionButton";
import LoginInput from "../../Components/LoginInput";
import PageAction from "../../Components/PageInfo";

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
                <PageAction main="Create Account" details="Begin your journey with Crossbase by signing up." />
                {createAccountInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <LoginInput label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <div className="text-[14px] mb-[55px] ">
                    Already have an account? <span className="text-[#CCFF01] ">Login</span>
                </div>
                <ActionButton buttonText="Create Account" link="/complete-profile" />
            </div>
        </div>
    );
}
 
export default CreateAccount;