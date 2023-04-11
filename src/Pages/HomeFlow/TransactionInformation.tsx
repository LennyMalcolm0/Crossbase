import PageInformation from '../../Components/General Components/PageInformation';

interface Props {
    transactionInformation: string;
    transactionDate: string;  
}
const TransactionInformation = ({transactionInformation, transactionDate}: Props) => {
    const transactionDetails = [
        {
            detail: "Amount Sent",
            value: "NGN 56,789.00",
        },
        {
            detail: "Receiver Got",
            value: "GHS 2,550.00",
        },
        {
            detail: "Status",
            value: "Successful",
        },
        {
            detail: "Time/Date",
            value: `${transactionDate}`,
        },
        {
            detail: "ID",
            value: "064586050636305476345",
        },
    ]

    return (
        <div className="h-screen w-full max-h-[1000px] max-w-[400px] z-[999999999] absolute top-0 left-0 bg-[#121313] px-[20px] py-[35px] ">
            <div className="h-full w-full flex flex-col justify-between "> 
                <div className="">
                    <PageInformation main="Transaction Info" dontGoBackInHistory={true} />
                    <div className="flex justify-center my-[20px] ">
                        <img src="Countries\NGN-GHS.svg" alt="" className="h-[45px]" />
                    </div>

                    <div className="text-center text-white text-[14px] mb-[30px] ">
                        <div>NGN to GHS</div>
                        <div className="text-[12px] text-[#D9D9D9] mb-[10px] ">(Nigerian Naira - Ghanaian Cedis)</div>
                        <div>
                            <span className="text-[12px] text-[#D9D9D9] ">Sent to:</span> Alex Kwesi
                        </div>
                        <div className="text-[#D9D9D9] flex items-center justify-center ">
                            <span>Sample Bank</span> 
                            <span className="h-1 w-1 rounded-full bg-[#CCFF01] mx-[5px] "></span>
                            <span>0986774563</span>
                        </div>
                    </div>

                    {transactionDetails.map((transactionDetail, index) => (
                        <div key={index}>
                            <div className="w-full h-[48px] px-[20px] rounded-[10px] bg-[#1F1F1E] flex items-center justify-between 
                            border border-[#D9D9D9] text-[14px] text-[#D9D9D9] mb-[8px] ">
                                <div className="font-semibold text-white ">{transactionDetail.detail}</div>
                                <div>{transactionDetail.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-[52px] w-full grid grid-cols-2 gap-x-2 text-center leading-[52px] font-bold ">
                    <div className="w-full h-full rounded-[10px] bg-[#CCFF01] text-[#121313] text-[17px] ">Share</div>
                    <div className="w-full h-full rounded-[10px] border border-[#CCFF01] text-[#CCFF01] ">Report</div>
                </div>
            </div>
        </div>
    );
}
 
export default TransactionInformation;