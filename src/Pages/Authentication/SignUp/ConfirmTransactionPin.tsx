import ActionButton from "../../../Components/ActionButton";
import PageAction from "../../../Components/PageInfo";
import TransactionPin from "../../../Components/TransactionPin";

const ConfirmTransactionPin = () => {
    const inputsValueArray: string[] = [];
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        inputsValueArray.push(input.value);
    });

    return ( 
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageAction main="Confirm Transaction PIN" details="Re-enter your PIN for authorizing a transaction on Crossbase." />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Complete" link="/login" inputValues={inputsValueArray} />
        </div>
    );
}

export default ConfirmTransactionPin;