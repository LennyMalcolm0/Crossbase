import Inputs from "../../../../GlobalComponents/Inputs";
import PageInformation from "../../../../GlobalComponents/PageInformation";
import Events from '../../Components/Events';
import { Helmet } from 'react-helmet';

const Notifications = () => {
    const notificationArrayForEachDay = [
        [         
            {
                imageSource: "Icons/HomeFlowIcons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
        ],
        [
            {                                                             
                imageSource: "Icons/HomeFlowIcons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
        ]
    ];

    return (  
        <>
        <Helmet>
            <title>Notifications</title>
        </Helmet>
        <div className="h-full">
            <div className="h-[60px] ">
                <PageInformation main="Notifications" />
            </div>

            <Inputs 
                inputType="text" inputHeight="54px" placeholder="Search activities" 
                imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".market-pair"
            />

            <div className="notification-activity-scrollable-section overflow-auto ">
                <Events eventType="Notification" eventHeader="Mar 31, 2023" eventItemsArray={notificationArrayForEachDay[0]} />
                <Events eventType="Notification" eventHeader="Mar 29, 2023" eventItemsArray={notificationArrayForEachDay[1]} />
                <Events eventType="Notification" eventHeader="Mar 29, 2023" eventItemsArray={notificationArrayForEachDay[1]} />
            </div>
        </div>
        </>
    );
}
 
export default Notifications;