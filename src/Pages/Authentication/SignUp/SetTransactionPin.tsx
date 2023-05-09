import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../../GlobalComponents/ActionButton";
import PageInformation from "../../../GlobalComponents/PageInformation";
import TransactionPin from '../../../GlobalComponents/TransactionPin';
import { Helmet } from 'react-helmet';
import { doc, updateDoc } from "firebase/firestore";
import { auth, database,  } from "../../../firebase";
import { animatePage, formErrorsFeedbacks } from "../../../utils/FunctionsAndData";

const SetTransactionPin = () => {
    const navigate = useNavigate();

    const saveTransactionPin = () => {
        animatePage(true);

        const inputFields = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>,
        errorFeedbackDisplay = document.querySelector(".error-message") as HTMLElement;

        let pin = "";
        inputFields.forEach(inputField => {
            pin += inputField.value;
        })

        // Checking if there are any empty Input fields
        const emptyInputField = Array.from(inputFields).every(inputField => {
            return inputField.value;
        });
        if (!emptyInputField) {
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.emptyInputField;
            inputFields.forEach(inputField => {
                if (!inputField.value) {
                    inputField.style.borderColor = "red";
                }
            });

            animatePage(false);
            return;
        };

        const user: any | null = auth.currentUser;
        const currentUserData = doc(database, "userData", user.uid);

        updateDoc(currentUserData, {
            transactionPin: Number(pin)
        })
        .then(() => {
            localStorage.setItem("createdPin", pin);
            animatePage(false);
            navigate("/confirm-transaction-pin");
        })
        .catch(err => {
            animatePage(false);
            console.log(err);
        })
    };

    return ( 
        <>
        <Helmet>
            <title>Set Transaction Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Set Transaction PIN" details="Set your PIN for authorizing a transaction on Crossbase. " />
                <TransactionPin />
                <div className="error-message text-red-600 mt-[10px] "></div>
            </div>
            <div>
                <ActionButton buttonText="Continue" link="" functionOnClick={saveTransactionPin} />
            </div>
        </div>
        </>
    );
}
 
export default SetTransactionPin;                 