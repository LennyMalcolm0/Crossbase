import Inputs from "../../../../GlobalComponents/Inputs";
import PageInformation from "../../../../GlobalComponents/PageInformation";
import Events from '../../Components/Events';

const AllActivities = () => {
    const activitiesArrayForEachDay = [
        [         
            {
                imageSource: "Icons/HomeFlowIcons/activity-transfer.svg",
                eventInformation: "To: Alex Kwesi",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "- N56,789",  
            },
            {
                imageSource: "Icons/top-up-green.svg",
                eventInformation: "Wallet Top Up",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "+ N120,400",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/treasury-stake-green.svg",
                eventInformation: "NGN/GHS Treasury Stake",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "- N82,000",  
            },
            {
                imageSource: "Icons/top-up-green.svg",
                eventInformation: "Wallet Top Up",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "+ N68,550",  
            },
            {
                imageSource: "Icons/HomeFlowIcons/activity-transfer.svg",
                eventInformation: "To: Boakye Clement",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "- N143,000",  
            },
        ],
        [
            {
                imageSource: "Icons/HomeFlowIcons/activity-transfer.svg",
                eventInformation: "To: Alex Kwesi",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "- N56,789",  
            },
            {
                imageSource: "Icons/top-up-green.svg",
                eventInformation: "Wallet Top Up",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "+ N85,000",  
            },
        ]
    ];

    return (  
        <div className="h-full">
           <div className="h-[60px] ">
                <PageInformation main="All Activities" />
            </div>

            <Inputs 
                inputType="text" inputHeight="54px" placeholder="Search activities" 
                imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".market-pair"
            />

            <div className="notification-activity-scrollable-section overflow-auto ">
                <Events eventType="Activity" eventHeader="Mar 31, 2023" eventItemsArray={activitiesArrayForEachDay[0]} />
                <Events eventType="Activity" eventHeader="Mar 29, 2023" eventItemsArray={activitiesArrayForEachDay[1]} />
                <Events eventType="Activity" eventHeader="Mar 29, 2023" eventItemsArray={activitiesArrayForEachDay[1]} />
            </div>
        </div>
    );
}
 
export default AllActivities;