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
            <div>
                <TreasuryNavigationBar myStakes={true} />
                
                <div className="w-full px-[15px] py-[25px] rounded-[20px] border-[3px] border-[#1F1F1E] flex items-center justify-between ">
                    <div className="text-white">
                        <div className="text-[10px] font-bold uppercase ">NGN</div>
                        <div className="text-[24px] font-bold ">670,000.00</div>
                        <div className="text-[12px] text-[#D9D9D9] ">Total Stake Value</div>
                    </div>
                    <div className="p-[12px] bg-[#CCFF01] rounded-[10px] flex items-center text-[12px] text-[#121313] ">
                        <img src="Icons\TreasuryPage\cross-black.svg" alt="" />
                        <Link to="/treasury/treasury-market" className="text-[14px] font-medium text-[#121313] ml-[10px] ">New Stake</Link>
                    </div>
                </div>

                <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] mt-[15px] ">
                    <div className="flex items-center justify-between text-white mb-[20px] ">
                        <div className="text-[14px] font-bold ">Active Stakes</div>
                        <Link to="" className="text-[12px] uppercase cursor-pointer ">VIEW All</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-[10px] mb-[10px] ">
                        {activeStakesHomeView.map((stakeItem, index) => (
                            <div key={index} className="p-[15px] bg-[#1F1F1E] rounded-[10px] cursor-pointer ">
                                <div className="flex items-start justify-between mb-[10px] ">
                                    <img src={stakeItem.currencyPairImageSource} alt="" />
                                    <img src="Icons\TreasuryPage\check.svg" alt="" />
                                </div>
                                <div className="text-[14px] font-medium mb-[5px] ">{stakeItem.currencyPair}</div>
                                <div className="text-[10px] text-[#D9D9D9] ">Amount Staked</div>
                                <div className="text-[14px] text-[#CCFF01] ">{stakeItem.marketVolume}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AppNavigationBar activePage="treasury" />
        </div>
        </>
    );
}
 
export default MyStakes;