import PageInformation from "../../Components/PageInformation";
import Events from '../../Components/Events';

const Notifications = () => {
    const notificationArrayForEachDay = [
        [         
            {
                imageSource: "Icons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri...",
                eventValue: "08:33 PM",  
            },
            {
                imageSource: "Icons/bell-ringing.svg",
                eventInformation: "Transaction successful",
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri...",
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
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri...",
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
                eventDetails: "Your transfer of NGN 54,321 to Prosper Melariri...",
                eventValue: "08:33 PM",  
            },
        ]
    ];

    return (  
        <div>
            <PageInformation main="Notifications" />
            <Events eventType="Activity" eventHeader="Mar 31, 2023" eventItemsArray={notificationArrayForEachDay[0]} />
            <div className="mt-[20px] ">
                <Events eventType="Activity" eventHeader="Mar 29, 2023" eventItemsArray={notificationArrayForEachDay[1]} />
            </div>
        </div>
    );
}
 
export default Notifications;