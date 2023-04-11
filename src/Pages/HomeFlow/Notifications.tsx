import PageInformation from "../../Components/PageInformation";
import Events from '../../Components/HomeFlow Components/Events';
import { Helmet } from 'react-helmet';

const Notifications = () => {
    const notificationArrayForEachDay = [
        [         
            {
                imageSource: "Icons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
        ],
        [
            {                                                             
                imageSource: "Icons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri was successful.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/circle-arrow-up-right.svg",
                eventInformation: "Product Update",
                eventDetails: "Lorem ipsum dolor sit amet conse ctetur tristique.",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/bell-ringing.svg",
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
        <div>
            <PageInformation main="Notifications" />
            <Events eventType="Notification" eventHeader="Mar 31, 2023" eventItemsArray={notificationArrayForEachDay[0]} />
            <div className="mt-[20px] ">
                <Events eventType="Notification" eventHeader="Mar 29, 2023" eventItemsArray={notificationArrayForEachDay[1]} />
            </div>
        </div>
        </>
    );
}
 
export default Notifications;