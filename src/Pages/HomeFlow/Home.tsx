import ActionIcon from '../../GlobalComponents/ActionIcon';
import Events from './Components/Events';
import AppNavigationBar from '../../GlobalComponents/AppNavigationBar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Home = () => {
    const activityEventItemsArray = [
        {
            imageSource: "Icons/HomeFlowIcons/activity-transfer.svg",
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
            imageSource: "Icons/HomeFlowIcons/treasury-stake-green.svg",
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
            <div className="appHeight-minus-navbarHeight w-full ">
                <div className="h-[235px] ">
                    <div className="w-full flex items-center justify-between ">
                        <div className="w-[40px] h-[40px] rounded-full border border-[#CCFF01] object-cover overflow-hidden relative ">
                            <img src="OtherImages\profile-pic.svg" alt="" className="h-full absolute inset-0 " />
                        </div>
                        <Link to="/notifications"><ActionIcon imageSource="Icons\HomeFlowIcons/notification.svg" /></Link>
                    </div>

                    <div className="w-full p-[15px] rounded-[20px] bg-[#CCFF01] text-center text-[12px] text-12 mt-[15px] ">
                        <div className="text-[#121313] font-bold ">
                            <div>NGN</div>
                            <div className="text-[28px] letter-4 ">143,456.00</div>
                        </div>
                        <div className="text-[#1F1F1E] ">My Wallet Balance</div>
                        <div className="w-full flex h-[47px] bg-[#121313] rounded-[10px] py-[8px] mt-[10px] text-white text-[11px] text-11 ">
                            <Link to="/select-destination" className="grow flex items-center justify-center border-r border-white cursor-pointer ">
                                <img src="Icons\HomeFlowIcons\send-money.svg" alt="" className="mr-[5px]" />
                                <span>Send Money</span>
                            </Link>
                            <Link to="/top-up" className="grow flex items-center justify-center border-r border-white cursor-pointer ">
                                <img src="Icons\HomeFlowIcons\top-up-white.svg" alt="" className="mr-[5px]" />
                                <span>Top Up</span>
                            </Link>
                            <Link to="/withdraw-money" className="grow flex items-center justify-center border-white cursor-pointer ">
                                <img src="Icons\HomeFlowIcons\withdraw-white.svg" alt="" className="mr-[5px]" />
                                <span>Withdraw</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="homepage-scrollable-section overflow-auto ">
                    <Events eventType="Activity" eventHeader="Recent Activities" viewMore="View all" viewMoreLink="/all-activities" eventItemsArray={activityEventItemsArray} />
                </div>
            </div>

            <AppNavigationBar activePage="Home" />
        </div>
        </> 
    );
}
 
export default Home;