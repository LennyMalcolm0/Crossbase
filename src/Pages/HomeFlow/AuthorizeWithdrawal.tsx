import { useEffect } from "react";
import ActionButton from "../../Components/ActionButton";
import TransactionStatusPrompt from "../../Components/TransactionStatusPrompt";
import PageInformation from "../../Components/PageInformation";
import TransactionPin from "../../Components/TransactionPin";
import { createBrowserHistory } from "history";

const AuthorizeWithdrawal = () => {
    const history = createBrowserHistory();
    useEffect(() => {
        const completeTransaction = document.querySelector("a") as HTMLElement;
        completeTransaction.addEventListener("click", () => {
            const transactionStatus = document.querySelector(".transaction-status") as HTMLElement;
            transactionStatus.classList.remove("hidden");
            transactionStatus.classList.add("block");
        })
    })

    return (  
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Enter Pin" details="Enter your transaction PIN to authorize this withdrawal." />
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
    );
}
 
export default AuthorizeWithdrawal;