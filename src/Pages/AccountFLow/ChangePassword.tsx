import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import PageInformation from "../../Components/General Components/PageInformation";
import Inputs from "../../Components/General Components/Inputs";
import ActionButton from "../../Components/General Components/ActionButton";

const ChangePassword = () => {
    const changePasswordInputs = [
        {
            label: "Enter Current Password",
            inputType: "password",
            placeholder: "Current Password"
        },
        {
            label: "New Password",
            inputType: "password",
            placeholder: "Enter New Password"
        },
        {
            label: "Confirm password",
            inputType: "password",
            placeholder: "Confirm password"
        },
    ];

    return ( 
        <>
        <Helmet>
            <title>Change Password</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Change Password" />
                <div className="mt-[40px] ">
                    {changePasswordInputs.map((inputItem, index) => (
                        <div key={index}>
                            <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <ActionButton buttonText="Change Password" link="/account" />
            </div>
        </div>
        </>
    );
}
 
export default ChangePassword;