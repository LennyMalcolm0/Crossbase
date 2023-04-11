import ActionIcon from '../../Components/General Components/ActionIcon';
import Events from '../../Components/HomeFlow Components/Events';
import AppNavigationBar from '../../Components/General Components/AppNavigationBar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    const activityEventItemsArray = [
        {
            imageSource: "Icons/activity-transfer-green.svg",
            eventInformation: "To: Alex Kwesi",
            eventDetails: "08:33 PM - 2/3/2023",
            eventValue: "- N56,789", 
        },
        {
            imageSource: "Icons/top-up-green.svg",
            eventInformation: "Wallet Top Up",
            eventDetails: "12:35 PM - 2/3/2023",
            eventValue: "+ N120,400", 
        },
        {
            imageSource: "Icons/treasury-stake-green.svg",
            eventInformation: "NGN/GHS Treasury Stake",
            eventDetails: "09:14 AM - 28/2/2023",
            eventValue: "- N82,000", 
        },
        {
            imageSource: "Icons/top-up-green.svg",
            eventInformation: "Wallet Top Up",
            eventDetails: "08:20 PM - 27/2/2023",
            eventValue: "+ N68,550", 
        },
    ]

    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                {/* !!!Make Top Section Sticky!!! */}
                <div className="w-full flex items-center justify-between ">
                    <div className="w-[40px] h-[40px] rounded-full border border-[#CCFF01] object-cover overflow-hidden ">
                        <img src="OtherImages\profile-pic.svg" alt="" className="" />
                    </div>
                    <Link to="/notifications"><ActionIcon imageSource="Icons\notification.svg" /></Link>
                </div>

                <div className="w-full p-[15px] rounded-[20px] bg-[#CCFF01] text-center text-[12px] mt-[15px] ">
                    <div className="text-[#121313] font-bold ">
                        <div>NGN</div>
                        <div className="text-[28px] leading-[35px] mt-[5px] ">143,456.00</div>
                    </div>
                    <div className="text-[#1F1F1E] mt-[5px]">My Wallet Balance</div>
                    <div className="w-full flex h-[47px] bg-[#121313] rounded-[10px] py-[8px] mt-[10px] text-white text-[11px] ">
                        <Link to="/select-destination" className="grow flex items-center justify-center border-r border-white cursor-pointer ">
                            <img src="Icons\send-money.svg" alt="" className="mr-[5px]" />
                            <span>Send Money</span>
                        </Link>
                        <Link to="/top-up" className="grow flex items-center justify-center border-r border-white cursor-pointer ">
                            <img src="Icons\top-up-white.svg" alt="" className="mr-[5px]" />
                            <span>Top Up</span>
                        </Link>
                        <Link to="/withdraw-money" className="grow flex items-center justify-center border-white cursor-pointer ">
                            <img src="Icons\withdraw-white.svg" alt="" className="mr-[5px]" />
                            <span>Withdraw</span>
                        </Link>
                    </div>
                </div>

                <Events eventType="Activity" eventHeader="Recent Activities" viewMore="View all" viewMoreLink="/all-activities" eventItemsArray={activityEventItemsArray} />
            </div>

            <div className="w-full sticky bottom-[-1px] ">
                <AppNavigationBar activePage="Home" />
            </div>
        </div>
        </> 
    );
}
 
export default Home;