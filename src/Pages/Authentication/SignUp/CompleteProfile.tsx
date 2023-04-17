import ActionButton from "../../../Global Components/ActionButton";
import Inputs from "../../../Global Components/Inputs";
import PageInformation from "../../../Global Components/PageInformation";
import { Helmet } from 'react-helmet';

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
            label: "Country",
            inputType: "text",
            placeholder: "Select country"
        },
        {
            label: "Phone Number",
            inputType: "number",
            placeholder: "Enter Phone number"
        },
        {
            label: "Date of Birth",
            inputType: "date",
        },
    ];

    return ( 
        <>
        <Helmet>
            <title>Complete Profile</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Complete Profile" details="Complete the sign up process by completing your profile." />
                {completeProfileInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />                 
                    </div>
                ))}
            </div>

            <ActionButton buttonText="Continue" link="/set-transaction-pin" />
        </div>
        </>
    );
}
 
export default CompleteProfile;