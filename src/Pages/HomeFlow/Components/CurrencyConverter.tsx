import { useEffect, useState } from "react";
import Inputs from "../../../GlobalComponents/Inputs";

interface Props {
    userCurrency: string;
    recieverCurrency: string;
    rate: number;
}
const CurrencyConverter = ({userCurrency, recieverCurrency, rate}: Props) => {
    const [paid, setPaid] = useState<string>("");
    const [recieved, setReceived] = useState<string>("");
    const [fee, setFee] = useState<number | string>(0);
    const [total, setTotal] = useState<number | string>(0);
    
    function formatNumberWithCommas(value: number | string) {
        const [integerPart, decimalPart] = String(value).split(".");
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const formattedDecimal = decimalPart?.padEnd(2, "0") || "00";
        return `${formattedInteger}.${formattedDecimal}`;
    };

    const updateAmountPaidByUser = (amountReceived: string) => {
        setPaid((Number(amountReceived) / rate).toFixed(2));
    };

    const updateAmountReceivedByReceiver  = (amountPaid: string) => {
        setReceived((Number(amountPaid) * rate).toFixed(2));
    };

    const transferFee  = (amountSent: string | number) => {
        // 4% of Amount paid by user
        const calculatedFee = formatNumberWithCommas(
            Number(((4 / 100) * Number(amountSent)).toFixed(2))
        );
        setFee(calculatedFee);
    };

    const transferTotal  = (amountSent: string | number) => {
        const calculatedTotal = formatNumberWithCommas(
            (Number(paid) + Number(fee)).toFixed(2)
        );
        setTotal(calculatedTotal);
    };

    useEffect(() => {
        const inputFields = document.querySelectorAll('input[type="number"]') as NodeListOf<HTMLInputElement>;
        inputFields[0].value = paid;
        inputFields[1].value = recieved;

        const amountPaidChange = (e: Event) => {
            const amountPaidByUser = e.target as HTMLInputElement;
            const amountPaid = amountPaidByUser.value;
            setPaid(amountPaid);
      
            transferFee(amountPaid);
            updateAmountReceivedByReceiver(amountPaid);
        };
        const amountReceivedChange = (e: Event) => {
            const amountReceivedByUser = e.target as HTMLInputElement;
            const amountReceived = amountReceivedByUser.value;
            setReceived(amountReceived);
      
            updateAmountPaidByUser(amountReceived);
            transferFee(Number(amountReceived) / rate);
        };

        inputFields[0].addEventListener("input", amountPaidChange);
        inputFields[1].addEventListener("input", amountReceivedChange);

        return () => {
            inputFields[0].removeEventListener("input", amountPaidChange);
            inputFields[1].removeEventListener("input", amountReceivedChange);
        }
    }, [paid, recieved, fee]);

    return ( 
        <div>
            <Inputs 
                label="Amount to be Transferred" 
                inputType="number" 
                placeholder="0.00" 
                textBeforePlaceholder={userCurrency} 
            />
            {/* User's balance should be displayed here */}
            <div className="mt-[30px] mb-[20px] ">
                <div className="flex items-center ">
                    <span className="h-3 w-3 rounded-full bg-[#CCFF01] mr-[10px] "></span>
                    <div className="text-[12px] text-12 text-[#D9D9D9] ">{`1 ${userCurrency} = ${rate} ${recieverCurrency}`}</div>
                </div>
                <div className="flex items-center mt-[10px] ">
                    <span className="h-3 w-3 rounded-full bg-[#CCFF01] mr-[10px] "></span>
                    <div className="text-[12px] text-12 text-[#D9D9D9] ">{`Fee = ${userCurrency} ${Number(fee) !== 0 ? fee : "0.00"}`}</div>
                </div>
                <div className="flex items-center mt-[10px] font-semibold ">
                    <span className="h-3 w-3 rounded-full bg-[#CCFF01] mr-[10px] "></span>
                    <div className="text-[12px] text-12 text-[#D9D9D9] ">{`Total = ${userCurrency} ${(Number(paid) + Number(fee)).toFixed(2)}`}</div>
                </div>
            </div>
            <Inputs 
                label="Receiver Gets" 
                inputType="number" 
                placeholder="0.00" 
                textBeforePlaceholder={recieverCurrency} 
            />
        </div>
     );
}
 
export default CurrencyConverter;