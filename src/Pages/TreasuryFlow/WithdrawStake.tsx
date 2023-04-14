import { Helmet } from "react-helmet";
import PageInformation from "../../Components/General Components/PageInformation";
import Inputs from "../../Components/General Components/Inputs";
import ActionButton from "../../Components/General Components/ActionButton";
import TransactionStatusPrompt from "../../Components/General Components/TransactionStatusPrompt";

const WithdrawStake = () => {
    return (  
        <>
        <Helmet>
            <title>New Stake</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between relative ">
            <div>
                <PageInformation main="Withdraw Stake" details="Enter the amount you'd like to withdraw to your wallet." />
    
                <Inputs inputType="number" label="Amount to Withdraw" placeholder="0.00" textBeforePlaceholder="NGN" />

                <div className="mt-[30px] ">
                    <div className="text-[12px] text-12 text-[#D9D9D9] font-semibold ">Available Stake</div>
                    <div className="text-[14px] text-14 text-[#CCFF01] ">NGN 214,000.00</div>
                </div>
            </div>

            <ActionButton buttonText="Withdraw to Wallet" link="" />

            <TransactionStatusPrompt 
                transactionStatus={true}
                transactionResult="Stake Withdrawal Successful" 
                transactionResultDetails="We've sent the money to your wallet, if you don't see it kindly check again in a few minutes." 
                promptOpenerClassName="a"
                redirectLink="/my-stakes"
            />
        </div>
        </>
    );
}
 
export default WithdrawStake;