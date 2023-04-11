import { useEffect } from "react";
import ActionButton from "../../Components/General Components/ActionButton";
import TransactionStatusPrompt from "../../Components/General Components/TransactionStatusPrompt";
import PageInformation from "../../Components/General Components/PageInformation";
import TransactionPin from "../../Components/General Components/TransactionPin";
import { Helmet } from 'react-helmet';

const AuthorizeTransaction = () => {
    useEffect(() => {
        const completeTransaction = document.querySelector("a") as HTMLElement;
        completeTransaction.addEventListener("click", () => {
            const transactionStatus = document.querySelector(".transaction-status") as HTMLElement;
            transactionStatus.classList.remove("hidden");
            transactionStatus.classList.add("block");
        })
    })

    return ( 
        <>
        <Helmet>
            <title>Authorize Transaction</title>
        </Helmet> 
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Enter Pin" details="Enter your transaction PIN to authorize this transaction." />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Complete" link="" />
            <div className="transaction-status hidden">
                <TransactionStatusPrompt 
                    transactionStatus={true}
                    transactionResult="Transaction Successful" 
                    transactionResultDetails="We'll notify you when the money gets to the receiver's bank account or mobile wallet." 
                    redirectLink="/"
                />
            </div>
        </div>
        </>
    );
}
 
export default AuthorizeTransaction;