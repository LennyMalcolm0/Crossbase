import { Link } from 'react-router-dom';
import { activeStakes } from './TreasuryData';
import { Helmet } from 'react-helmet';
import AppNavigationBar from '../../Components/General Components/AppNavigationBar';
import TreasuryNavigationBar from '../../Components/TreasuryFlow Components/TreasuryNavigationBar';

const MyStakes = () => {
    const activeStakesHomeView = [];
    for (let i = 0; i < 6; i++) {
        activeStakesHomeView.push(activeStakes[i]);
    }

    return (
        <>
        <Helmet>
            <title>My Stakes</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div className="appHeight-minus-navbarHeight w-full ">
                <div className="h-[220px] ">
                    <TreasuryNavigationBar myStakes={true} />

                    <div className="w-full px-[15px] py-[25px] rounded-[20px] border-[3px] border-[#1F1F1E] flex items-center justify-between ">
                        <div className="text-white">
                            <div className="text-[10px] font-bold uppercase ">NGN</div>
                            <div className="text-[24px] font-bold letter-4 ">670,000.00</div>
                             <div className="text-[12px] text-12 text-[#D9D9D9] ">Total Stake Value</div>
                        </div>
                        <div className="p-[12px] bg-[#CCFF01] rounded-[10px] flex items-center text-[12px] text-12 text-[#121313] ">
                            <img src="Icons\TreasuryPage\cross-black.svg" alt="" />
                            <Link to="/treasury-market" className="text-[14px] text-14 font-medium text-[#121313] ml-[10px] ">New Stake</Link>
                        </div>
                    </div>
                </div>

                <div className="my-stakes-scrollable-section overflow-auto ">
                    <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] ">
                        <div className="flex items-center justify-between text-white mb-[20px] ">
                            <div className="text-[14px] text-14 font-bold ">Active Stakes</div>
                            <Link to="/active-stakes" className="text-[12px] text-12 uppercase cursor-pointer ">VIEW All</Link>
                        </div>
                        <div className="grid grid-cols-2 gap-[10px] mb-[10px] ">
                            {activeStakesHomeView.map((stakeItem, index) => (
                                <div key={index} className="p-[15px] bg-[#1F1F1E] rounded-[10px] cursor-pointer ">
                                    <div className="flex items-start justify-between mb-[10px] ">
                                        <img src={stakeItem.currencyPairImageSource} alt="" />
                                        <img src="Icons\TreasuryPage\check.svg" alt="" />
                                    </div>
                                    <div className="text-[14px] text-14 font-medium mb-[5px] ">{stakeItem.currencyPair}</div>
                                    <div className="text-[10px] text-[#D9D9D9] ">Amount Staked</div>
                                    <div className="text-[14px] text-14 text-[#CCFF01] whitespace-nowrap ">{stakeItem.amountStaked}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AppNavigationBar activePage="treasury" />
        </div>
        </>
    );
}
 
export default MyStakes;