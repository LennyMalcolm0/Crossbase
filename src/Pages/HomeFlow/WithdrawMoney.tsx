import ActionButton from "../../Components/General Components/ActionButton";
import Inputs from "../../Components/General Components/Inputs";
import PageInformation from "../../Components/General Components/PageInformation";
import { Helmet } from 'react-helmet';

const WithdrawMoney = () => {
    const withdrawMoneyInputs = [
        {
            label: "Amount to Withdrawal",
            inputType: "number",
            placeholder: "0.00"
        },
        {
            label: "Bank Name or Network",
            inputType: "text",
            placeholder: "Enter bank name or mobile money network"
        },
        {
            label: "Account Number",
            inputType: "text",
            placeholder: "Enter account number"
        },
        {
            label: "Account Name",
            inputType: "text",
            placeholder: "Enter account name"
        },
    ]

    return (  
        <>
        <Helmet>
            <title>Withdraw Money</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between ">
            <div>
                <PageInformation main="Withdraw Money" details="Enter the amount you'd like to withdraw to your bank account." />
                {withdrawMoneyInputs.map((inputDetail, index) => (
                    <div key={index}>
                        <Inputs label={inputDetail.label} inputType={inputDetail.inputType} placeholder={inputDetail.placeholder} />
                    </div>
                ))}
            </div>

            <div>
                <div className="text-[12px] leading-[17px] text-[#CCFF01] mb-[35px] " >
                    Kindly verify the above information before proceeding to the next page. Note that this transaction will not be reversed once approved.
                </div>
                <ActionButton buttonText="Continue" link="/authorize-withdrawal" />
            </div>
        </div>
        </>
    );
}
 
export default WithdrawMoney;