import ActionButton from "../../../Components/ActionButton";
import PageInformation from "../../../Components/PageInformation";
import TransactionPin from '../../../Components/TransactionPin';
import { Helmet } from 'react-helmet';

const SetTransactionPin = () => {

    return ( 
        <>
        <Helmet>
            <title>Set Transaction Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Set Transaction PIN" details="Set your PIN for authorizing a transaction on Crossbase. " />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Continue" link="/confirm-transaction-pin" />
        </div>
        </>
    );
}
 
export default SetTransactionPin;                 