import PageInformation from "../../Components/PageInformation";
import Events from '../../Components/HomeFlow Components/Events';

const AllActivities = () => {
    const activitiesArrayForEachDay = [
        [         
            {
                imageSource: "Icons/activity-transfer-green.svg",
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
                imageSource: "Icons/treasury-stake-green.svg",
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
                imageSource: "Icons/activity-transfer-green.svg",
                eventInformation: "To: Boakye Clement",
                eventDetails: "08:33 PM - 2/3/2023",
                eventValue: "- N143,000",  
            },
        ],
        [
            {
                imageSource: "Icons/activity-transfer-green.svg",
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
        <div>
            <PageInformation main="All Activities" />
            <Events eventType="Activity" eventHeader="Mar 31, 2023" eventItemsArray={activitiesArrayForEachDay[0]} />
            <div className="mt-[20px] ">
                <Events eventType="Activity" eventHeader="Mar 29, 2023" eventItemsArray={activitiesArrayForEachDay[1]} />
            </div>
        </div>
    );
}
 
export default AllActivities;