import { Link } from "react-router-dom";
import ActionButton from "../../../GlobalComponents/ActionButton";
import PageInformation from "../../../GlobalComponents/PageInformation";
import TransactionPin from '../../../GlobalComponents/TransactionPin';
import { Helmet } from 'react-helmet';
import { doc, updateDoc } from "firebase/firestore";
import { database, user } from "../../../firebase";
import { animatePage } from "../../../Data/GlobalFunctionsAndData";

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
                <div className="error-message text-red-600 "></div>
            </div>
            <div>
                <ActionButton buttonText="Continue" link="/confirm-transaction-pin" />
                <Link to="/set-transaction-pin" className="next-page"></Link>
            </div>
        </div>
        </>
    );
}
 
export default SetTransactionPin;                 