import ActionButton from "../../Components/General Components/ActionButton";
import Inputs from "../../Components/General Components/Inputs";
import PageInformation from "../../Components/General Components/PageInformation";
import TransactionStatusPrompt from "../../Components/General Components/TransactionStatusPrompt";
import { Helmet } from 'react-helmet';

const NewStake = () => {
    return (  
        <>
        <Helmet>
            <title>New Stake</title>
        </Helmet>
        <div className="h-full w-full relative ">
            <div>
                <PageInformation main="New Stake" />

                <img src="Countries\NGN-KES.svg" alt="" className="mx-auto h-[45px] " />
                <div className="text-center my-[30px] ">
                    <div className="text-[14px] text-14 font-medium uppercase ">NGN/KES</div>
                    <div className="text-[12px] text-12 text-[#D9D9D9] ">
                        <div className="mb-[10px] ">(Nigerian Naira / Kenyan Shillings)</div>
                        <div> 
                            <span className="font-semibold">Treasury Volume</span> = NGN 150.3m
                        </div>
                    </div>
                </div>

                <Inputs inputType="text" label="Amount to Stake" placeholder="0.00" textBeforePlaceholder="NGN" />

                <div className="text-[#D9D9D9] mt-[30px] mb-[20px] ">
                    <div className="text-[12px] text-12 font-semibold ">My Stake</div>
                    {/* Should reflect Input value */}
                    <div className="text-[14px] text-14 ">NGN 0.00</div>
                </div>
                <div className="text-[#D9D9D9] ">
                    <div className="text-[12px] text-12 font-semibold ">Next Withdrawal Cycle</div>
                    <div className="text-[14px] text-14 ">30 April, 2023</div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full ">
                <div className="text-[12px] text-12 leading-[17px] text-[#CCFF01] mb-[35px] " >
                    Kindly note that money staked to treasury can only be withdrawn in a 30 day cycle, that is, once in a month. 
                    If you withdraw before the cycle elapse, you'll lose all possible yield (profits) on your stake.
                </div>
                <ActionButton buttonText="Stake" link="" />
            </div>
            <div >
                <TransactionStatusPrompt 
                    transactionStatus={true}
                    transactionResult="Your Stake is Successful" 
                    transactionResultDetails="Sit back and watch your stake earn yield from the transaction fees collected in the treasury." 
                    promptOpenerClassName="a"
                    redirectLink="/my-stakes"
                />
            </div>
        </div>
        </>
    );
}
 
export default NewStake;