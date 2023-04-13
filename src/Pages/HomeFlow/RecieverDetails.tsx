import { Helmet } from 'react-helmet';
import PageInformation from '../../Components/General Components/PageInformation';
import Inputs from '../../Components/General Components/Inputs';
import ActionButton from '../../Components/General Components/ActionButton';
 
const RecieverDetails = () => {
    const recieverDetailsInputs = [
        {
            label: "Bank Name or Network",
            inputType: "text",
            placeholder: "Enter bank name or mobile money network"
        },
        {
            label: "Account Number",
            inputType: "number",
            placeholder: "Enter account number"
        },
    ]

    return (  
        <>
        <Helmet>
            <title>Receiver Account Details</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Receiver Account Details" details="Enter the bank or mobile money account details of the receiver." />
                {recieverDetailsInputs.map((inputItem, index) => (
                    <div key={index}>
                        <Inputs label={inputItem.label} inputType={inputItem.inputType} placeholder={inputItem.placeholder} />
                    </div>
                ))}
                <label className="text-[12px] text-12 text-[#CCFF01] ">Account Name</label>
                <div className="w-full h-[48px] px-[20px] leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#CCFF01] text-[#CCFF01] ">4289548068</div>
            </div>
            <div>
                <div className="text-[12px] text-12 leading-[17px] text-[#CCFF01] mb-[35px] " >
                    Kindly verify the above information before proceeding to the next page. Note that this transaction will not be reversed once approved.
                </div>
                <ActionButton buttonText="Continue" link="/authorize-transfer" />
            </div>
        </div>
        </>
    );
}
 
export default RecieverDetails;