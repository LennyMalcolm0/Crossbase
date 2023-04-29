import ActionButton from "../../../GlobalComponents/ActionButton";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';
import SelectItems from "../../../GlobalComponents/SelectItems";
import { Link } from "react-router-dom";
import { auth, database, user } from "../../../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { animatePage, authenticationErrorsFeedbacks } from "../../../Data/GlobalFunctionsAndData";

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
            label: "Date of Birth",
            inputType: "date",
            placeholder: "dd/mm/yyyy",
            min: "22/04/2005"
        },
    ];
    const countryOptions = ["Nigeria", "Ghana"];

    const uploadUserData = () => {
        animatePage(true);

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement,
        linkToNextPage = document.querySelector(".next-page") as HTMLAnchorElement;

        const firstNameInput = inputFields[0],
        lastNameInput = inputFields[1],
        dateOfBirthInput = inputFields[2],
        countryInput = inputFields[3];

        // Checking if there are any empty Input fields
        const emptyInputField = Array.from(inputFields).every(inputField => {
            return inputField.value;
        });
        if (!emptyInputField) {
            errorFeedbackDisplay.textContent = !countryInput.value ? authenticationErrorsFeedbacks.noCountrySelected : authenticationErrorsFeedbacks.emptyInputField;
            inputFields.forEach(inputField => {
                if (!inputField.value) {
                    inputField.style.borderColor = "red";
                }
            });

            animatePage(false);
        }
        if(!emptyInputField) return;

        const path = doc(database, "userData", user.uid);
        setDoc(path, {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            dateOfBirth: dateOfBirthInput.value,
            country: countryInput.value,
        })
        .then(() => {
            animatePage(false); 
            linkToNextPage.click();
        })
        .catch(err => {
            animatePage(false);
            console.log(err);
        })
    };

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
                        <Inputs 
                            label={inputItem.label} 
                            inputType={inputItem.inputType} 
                            placeholder={inputItem.placeholder}
                            min={inputItem.min} />                 
                    </div>
                ))}
                <SelectItems label="Country" placeholder="Select Country" optionsList={countryOptions} />
                <div className="error-message text-red-600 "></div>
            </div>

            <div>
                <ActionButton buttonText="Continue" link="" functionOnClick={uploadUserData} />
                <Link to="/set-transaction-pin" className="next-page"></Link>
            </div>
        </div>
        </>
    );
}
 
export default CompleteProfile;