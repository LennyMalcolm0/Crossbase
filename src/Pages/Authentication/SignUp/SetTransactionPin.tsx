import ActionButton from "../../../Components/ActionButton";
import PageAction from "../../../Components/PageInfo";
import TransactionPin from '../../../Components/TransactionPin';

const SetTransactionPin = () => {
    const inputsValueArray: string[] = [];
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        inputsValueArray.push(input.value);
    });

    return ( 
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageAction main="Set Transaction PIN" details="Set your PIN for authorizing a transaction on Crossbase. " />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Continue" link="/confirm-transaction-pin" inputValues={inputsValueArray} />
        </div>
    );
}
 
export default SetTransactionPin;                 