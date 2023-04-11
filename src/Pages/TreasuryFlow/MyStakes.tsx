import { Link } from 'react-router-dom';
import { activeStakes } from './TreasuryData';

const MyStakes = () => {
    const activeStakesHomeView = [];
    for (let i = 0; i < 6; i++) {
        activeStakesHomeView.push(activeStakes[i]);
    }

    return (
        <div className="">
            <div className="w-full px-[15px] py-[25px] rounded-[20px] border-[3px] border-[#1F1F1E] mt-[15px] flex items-center justify-between ">
                <div className="text-white">
                    <div className="text-[10px] font-bold uppercase ">NGN</div>
                    <div className="text-[24px] font-bold ">670,000.00</div>
                    <div className="text-[12px] text-[#D9D9D9] ">Total Stake Value</div>
                </div>
                <div className="p-[15px] bg-[#CCFF01] rounded-[10px] flex items-center text-[12px] text-[#121313] ">
                    <img src="Icons\TreasuryPage\cross-black.svg" alt="" />
                    <div className="text-[12px] text-[#121313] ml-[10px] ">New Stake</div>
                </div>
            </div>

            <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] mt-[15px] ">
                <div className="flex items-center justify-between text-white mb-[20px] ">
                    <div className="text-[14px] font-bold ">Active Stakes</div>
                    <Link to="" className="text-[12px] uppercase cursor-pointer ">VIEW All</Link>
                </div>
                <div className="grid grid-cols-2 gap-[10px] mb-[10px] ">
                    {activeStakesHomeView.map((stakeItem, index) => (
                        <div key={index} className="px-[10px] py-[15px] bg-[#1F1F1E] rounded-[10px] ">
                            <div className="flex justify-between mb-[10px] ">
                                <img src={stakeItem.currencyPairImageSource} alt="" />
                                <img src="Icons\TreasuryPage\check.svg" alt="" />
                            </div>
                            <div className="text-[14px] font-medium mb-[20px] ">{stakeItem.currencyPair}</div>
                            <div className="text-[10px] text-[#D9D9D9] ">Amount Staked</div>
                            <div className="text-[14px] text-[#CCFF01] ">{stakeItem.amountStaked}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default MyStakes;