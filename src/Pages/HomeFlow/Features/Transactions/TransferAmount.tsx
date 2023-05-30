import ActionButton from "../../../../GlobalComponents/ActionButton";
import Inputs from "../../../../GlobalComponents/Inputs";
import PageInformation from "../../../../GlobalComponents/PageInformation";
import { Helmet } from 'react-helmet';
import CurrencyConverter from "../../Components/CurrencyConverter";

const TransferAmount = () => {
    return (  
        <>
        <Helmet>
            <title>Amount to be Transferred</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Amount To be Transferred" details="Enter the amount of money you'd like to send to the receiver"/>

                <CurrencyConverter userCurrency="NGN" recieverCurrency="GHS" rate={0.045} />
            </div>
            <ActionButton buttonText="Continue" link="/reciever-details" />
        </div>
        </>
    );
}
 
export default TransferAmount;