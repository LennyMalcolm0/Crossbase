import { useEffect } from "react";
import ActionButton from "../../Components/General Components/ActionButton";
import TransactionStatusPrompt from "../../Components/General Components/TransactionStatusPrompt";
import PageInformation from "../../Components/General Components/PageInformation";
import TransactionPin from "../../Components/General Components/TransactionPin";
import { Helmet } from 'react-helmet';

const AuthorizeTransaction = () => {

    return ( 
        <>
        <Helmet>
            <title>Authorize Transaction</title>
        </Helmet> 
        <div className="h-full w-full relative">
            <div>
                <PageInformation main="Enter Pin" details="Enter your transaction PIN to authorize this transaction." />
                <TransactionPin />
            </div>
            <div className="absolute bottom-0 w-full ">
                <ActionButton buttonText="Complete" link="" />
            </div>
            <div >
                <TransactionStatusPrompt 
                    transactionStatus={true}
                    transactionResult="Transaction Successful" 
                    transactionResultDetails="We'll notify you when the money gets to the receiver's bank account or mobile wallet." 
                    promptOpener="a"
                    redirectLink="/"
                />
            </div>
        </div>
        </>
    );
}
 
export default AuthorizeTransaction;