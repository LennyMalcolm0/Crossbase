import ActionButton from "../../Components/General Components/ActionButton";
import Inputs from "../../Components/General Components/Inputs";
import PageInformation from "../../Components/General Components/PageInformation";
import { Helmet } from 'react-helmet';

const TransferAmount = () => {
    return (  
        <>
        <Helmet>
            <title>Amount to be Transferred</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Amount To be Transferred" details="Enter the amount of money you'd like to send to the receiver"/>
                <Inputs label="Amount to be Transferred" inputType="number" placeholder="0.00" textBeforePlaceholder="NGN" />
                <div className="mt-[30px] mb-[20px] ">
                    <div className="flex items-center ">
                        <span className="h-3 w-3 rounded-full bg-[#CCFF01] mr-[10px] "></span>
                        <div className="text-[12px] text-[#D9D9D9] ">1 NGN = GHS 0.045</div>
                    </div>
                    <div className="flex items-center mt-[10px] ">
                        <span className="h-3 w-3 rounded-full bg-[#CCFF01] mr-[10px] "></span>
                        <div className="text-[12px] text-[#D9D9D9] ">Fee = NGN 0.00</div>
                    </div>
                </div>
                <Inputs label="Receiver Gets" inputType="number" placeholder="0.00" textBeforePlaceholder="GHS" />
            </div>
            <ActionButton buttonText="Continue" link="/reciever-details" />
        </div>
        </>
    );
}
 
export default TransferAmount;