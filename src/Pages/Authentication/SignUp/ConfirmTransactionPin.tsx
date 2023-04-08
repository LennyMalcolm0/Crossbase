import ActionButton from "../../../Components/ActionButton";
import PageInfo from "../../../Components/PageInfo";
import TransactionPin from "../../../Components/TransactionPin";

const ConfirmTransactionPin = () => {

    return ( 
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInfo main="Confirm Transaction PIN" details="Re-enter your PIN for authorizing a transaction on Crossbase." />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Complete" link="/login" />
        </div>
    );
}

export default ConfirmTransactionPin;