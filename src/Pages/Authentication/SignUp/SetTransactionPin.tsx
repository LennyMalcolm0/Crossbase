import ActionButton from "../../../Components/ActionButton";
import PageInfo from "../../../Components/PageInfo";
import TransactionPin from '../../../Components/TransactionPin';

const SetTransactionPin = () => {

    return ( 
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInfo main="Set Transaction PIN" details="Set your PIN for authorizing a transaction on Crossbase. " />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Continue" link="/confirm-transaction-pin" />
        </div>
    );
}
 
export default SetTransactionPin;                 