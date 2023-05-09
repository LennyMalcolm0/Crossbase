import { useEffect } from "react";
import ActionButton from "../../../../GlobalComponents/ActionButton";
import TransactionStatusPrompt from "../../../../GlobalComponents/TransactionStatusPrompt";
import PageInformation from "../../../../GlobalComponents/PageInformation";
import TransactionPin from "../../../../GlobalComponents/TransactionPin";
import { Helmet } from 'react-helmet';

const AuthorizeWithdrawal = () => {

    return ( 
        <>
        <Helmet>
            <title>Authorize Withdrawal</title>
        </Helmet> 
        <div className="h-full w-full relative">
            <div>
                <PageInformation main="Enter Pin" details="Enter your transaction PIN to authorize this withdrawal." />
                <TransactionPin />
            </div>
            <div className="absolute bottom-0 w-full ">
                <ActionButton buttonText="Complete" />
            </div>
            <div >
                <TransactionStatusPrompt 
                    transactionStatus={true}
                    transactionResult="Transaction Successful" 
                    transactionResultDetails="You've successfully withdrawn N58,000 to your account." 
                    promptOpenerClassName="a"
                    redirectLink="/"
                />
            </div>
        </div>
        </>
    );
}
 
export default AuthorizeWithdrawal;