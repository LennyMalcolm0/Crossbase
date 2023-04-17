import ActionButton from "../../../Global Components/ActionButton";
import PageInformation from "../../../Global Components/PageInformation";
import TransactionPin from "../../../Global Components/TransactionPin";
import { Helmet } from 'react-helmet';

const ConfirmTransactionPin = () => {

    return ( 
        <>
        <Helmet>
            <title>Confirm Transaction Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Confirm Transaction PIN" details="Re-enter your PIN for authorizing a transaction on Crossbase." />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Complete" link="/login" />
        </div>
        </>
    );
}

export default ConfirmTransactionPin;