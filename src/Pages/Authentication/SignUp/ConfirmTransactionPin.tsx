import ActionButton from "../../../GlobalComponents/ActionButton";
import PageInformation from "../../../GlobalComponents/PageInformation";
import TransactionPin from "../../../GlobalComponents/TransactionPin";
import { Helmet } from 'react-helmet';
import { animatePage, formErrorsFeedbacks } from "../../../utils/FunctionsAndData";
import { useNavigate } from "react-router-dom";

const ConfirmTransactionPin = () => {
    const navigate = useNavigate();

    const confirmPin = () => {
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

        const createdPin = localStorage.getItem("createdPin");

        if (createdPin === pin) {
            setTimeout(() => {
                animatePage(false);
                localStorage.removeItem("createdPin");
                navigate("/");
            }, 100);
        } else {
            animatePage(false)
            errorFeedbackDisplay.textContent = formErrorsFeedbacks.pinsDontMatch;
        }
    };

    return ( 
        <>
        <Helmet>
            <title>Confirm Transaction Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Confirm Transaction PIN" details="Re-enter your PIN for authorizing a transaction on Crossbase." />
                <TransactionPin />
                <div className="error-message text-red-600 mt-[10px] "></div>
            </div>
            <ActionButton buttonText="Complete"  functionOnClick={confirmPin} />
        </div>
        </>
    );
}

export default ConfirmTransactionPin;