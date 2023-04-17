import { Link } from "react-router-dom";
import PageInformation from "../../../Global Components/PageInformation";
import { Helmet } from "react-helmet";

const ViewStake = () => {
    return (  
        <>
        <Helmet>
            <title>View Stake</title>
        </Helmet>
        <div className="h-full w-full max-h-[1000px] max-w-[400px] z-[999999999] absolute inset-0 bg-[#121313] px-[10px] py-[15px] pb-[20px] ">
            <div className="h-full w-full flex flex-col justify-between "> 
                <div>
                    <PageInformation main="View Stake" />

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

                    <label className="text-[12px] text-12 text-[#D9D9D9] ">Amount Staked</label>
                    <div className="relative">
                        <div className="w-full h-[48px] pl-[60px] leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] ">214,000.00</div>
                        <div className="absolute top-0 left-[20px] text-[14px] text-14 leading-[48px] font-semibold uppercase  ">NGN</div>
                    </div>

                    <label className="text-[12px] text-12 text-[#D9D9D9] ">Amount Staked</label>
                    <div className="relative">
                        <div className="w-full h-[48px] pl-[60px] leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] ">227,520.00</div>
                        <div className="absolute top-0 left-[20px] text-[14px] text-14 leading-[48px] font-semibold uppercase  ">NGN</div>
                        <div className="absolute top-0 left-[150px] text-[14px] text-14 text-[#CCFF01] leading-[48px] font-semibold uppercase  ">(+7,520)</div>
                    </div>

                    <div className="text-[#D9D9D9] mt-[30px] ">
                        <div className="text-[12px] text-12 font-semibold ">Next Withdrawal Cycle</div>
                        <div className="text-[14px] text-14 ">30 April, 2023</div>
                    </div>
                </div>

                <div>
                    <div className="text-[12px] text-12 leading-[17px] text-[#CCFF01] mb-[35px] " >
                        Kindly note that money staked to treasury can only be withdrawn in a 30 day cycle, that is, once in a month. 
                        If you withdraw before the cycle elapse, you'll lose all possible yield (profits) on your stake.
                    </div>
                    <div className="h-[52px] w-full grid grid-cols-2 gap-x-2 text-center leading-[52px] font-bold ">
                        <Link to="/new-stake" className="w-full h-full rounded-[10px] bg-[#CCFF01] text-[#121313] text-[17px] cursor-pointer ">Increase Stake</Link>
                        <Link to="/withdraw-stake" className="w-full h-full rounded-[10px] border border-[#CCFF01] text-[#CCFF01] cursor-pointer ">Withdraw Stake</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default ViewStake;