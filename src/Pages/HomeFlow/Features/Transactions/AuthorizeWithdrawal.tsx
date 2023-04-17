import { useEffect } from "react";
import ActionButton from "../../../../Global Components/ActionButton";
import TransactionStatusPrompt from "../../../../Global Components/TransactionStatusPrompt";
import PageInformation from "../../../../Global Components/PageInformation";
import TransactionPin from "../../../../Global Components/TransactionPin";
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
                <ActionButton buttonText="Complete" link="" />
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