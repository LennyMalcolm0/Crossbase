import ActionButton from "../../Components/ActionButton";
import LoginInput from "../../Components/LoginInput";
import PageAction from "../../Components/PageInfo";

const CompleteProfile = () => {
    const completeProfileInputs = [
        {
            label: "First Name",
            inputType: "text",
            placeholder: "Enter first name"
        },
        {
            label: "Last Name",
            inputType: "text",
            placeholder: "Enter last name"
        },
        {
            label: "Phone Number",
            inputType: "number",
            placeholder: "Enter Phone number"
        },
        {
            label: "Country",
            inputType: "text",
            placeholder: "Select country"
        },
        {
            label: "Date of Birth",
            inputType: "date",
        },
    ];

    return ( 
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageAction main="Complete Profile" details="Complete the sign up process by completing your profile." />
                {completeProfileInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <LoginInput label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />                 
                    </div>
                ))}
            </div>

            <ActionButton buttonText="Continue" link="/set-transaction-pin" />
        </div>
    );
}
 
export default CompleteProfile;