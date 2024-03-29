import ActionButton from "../../../GlobalComponents/ActionButton";
import Inputs from "../../../GlobalComponents/Inputs";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';
import SelectItems from "../../../GlobalComponents/SelectItems";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { animatePage, formErrorsFeedbacks } from "../../../utils/FunctionsAndData";
import { updateProfile } from "firebase/auth";

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

    const navigate = useNavigate();

    const uploadUserData = () => {
        animatePage(true);

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement;

        // Sample: "leonard" and "   leonard   " === "Leonard"
        const firstName = `${inputFields[0].value.trim().charAt(0).toUpperCase()}${inputFields[0].value.trim().slice(1).toLowerCase()}`,
        lastName = `${inputFields[1].value.trim().charAt(0).toUpperCase()}${inputFields[1].value.trim().slice(1).toLowerCase()}`,

        dateOfBirth = inputFields[2].value,
        country = inputFields[3].value;

        // Checking if there are any empty Input fields
        const emptyInputField = Array.from(inputFields).every(inputField => {
            return inputField.value;
        });
        if (!emptyInputField) {
            if (!country) {
                if (firstName && lastName && dateOfBirth) {
                    errorFeedbackDisplay.textContent = formErrorsFeedbacks.noCountrySelected;
                } else {
                    errorFeedbackDisplay.textContent = formErrorsFeedbacks.emptyInputField;
                }
            } else {
                errorFeedbackDisplay.textContent = formErrorsFeedbacks.emptyInputField;
            }

            inputFields.forEach(inputField => {
                if (inputField.value) return;
                inputField.style.borderColor = "red";
            });

            animatePage(false);
            return;
        };
        
        const user: any | null = auth.currentUser;
        const path = doc(database, "userData", user.uid);

        setDoc(path, {
            firstName,
            lastName,
            dateOfBirth,
            country,
            createdAt: serverTimestamp()
        })
        .then(() => {
            updateProfile(user, {
                displayName: firstName
            }).then(() => {
                animatePage(false);
                navigate("/set-transaction-pin");
            }).catch((error) => {
                animatePage(false);
            });
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
                <ActionButton buttonText="Continue" functionOnClick={uploadUserData} />
            </div>
        </div>
        </>
    );
}
 
export default CompleteProfile;