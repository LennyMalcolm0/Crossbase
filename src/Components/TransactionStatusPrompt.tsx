import { useEffect } from "react";
import ActionIcon from "./ActionIcon";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

interface Props {
    transactionStatus: boolean;
    transactionResult: string;
    transactionResultDetails: string;
    redirectLink: string;
}
const TransactionStatusPrompt = ({transactionStatus, transactionResult, transactionResultDetails, redirectLink}: Props) => {

    return (  
        <div className="h-screen w-full max-h-[1000px] max-w-[400px] absolute top-0 left-0 bg-[#121313] px-[20px] py-[35px] ">
            <div className="h-full flex items-center">
                <div>
                    <div className="flex justify-between mb-[15px] ">
                        <div></div>
                        <Link to={redirectLink} className="cursor-pointer
                        ">
                            <ActionIcon imageSource="Icons\x-close.svg" />
                        </Link>
                    </div>
                    <div className="w-full h-[350px] rounded-[20px] bg-[#1F1F1E] px-[30px] pt-[30px] pb-[40px] text-center ">
                        <div className="flex justify-center mb-[20px] ">
                            <img src="OtherImages\Successful-Transaction-Prompt.svg" alt="Transaction Successful" />
                        </div>
                        <div className="text-[20px] font-semibold ">{transactionResult}</div>
                        <div className="text-[12px] text-[#D9D9D9] ">{transactionResultDetails}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TransactionStatusPrompt;