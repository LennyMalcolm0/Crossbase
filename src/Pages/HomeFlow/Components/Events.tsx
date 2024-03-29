import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import NotificationDetails from "../Features/Notifications & Activities/NotificationDetails";
import TransactionInformation from "../Features/Notifications & Activities/TransactionInformation";

interface Props {
    eventType: string;
    eventHeader: string;
    viewMore?: string;
    viewMoreLink?: string;
    eventItemsArray: {
        imageSource: string;
        eventInformation: string;
        eventDetails: string;
        eventValue: string;                         
    }[]
}      
const Events = ({ eventType, eventHeader, viewMore, viewMoreLink, eventItemsArray }: Props) => {
    const [imageContainerBorderRadius, setImageContainerBorderRadius] = useState("");
    useEffect(() => {
        eventType.toLowerCase() === "activity" ? setImageContainerBorderRadius("rounded-full") : setImageContainerBorderRadius("rounded-[5px]");

        const events = document.querySelectorAll(".event");
        events.forEach(event => {
            event.addEventListener("click", () => {
                const eventBreakdown = event.nextElementSibling as HTMLElement;
                eventBreakdown?.classList.remove("hidden");
            })
        })

        const goBackButton = document.querySelectorAll(".action-icon");
        goBackButton.forEach(button => {
            button.addEventListener("click", () => {
                const eventBreakdown = button.closest('div.event-breakdown') as HTMLElement;
                eventBreakdown?.classList.add("hidden");
            })
        })
    });

    return (  
        <div>
            <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] mb-[20px] ">
                <div className="flex items-center justify-between text-white mb-[20px] ">
                    <div className="text-[14px] text-14 font-bold ">{eventHeader}</div>
                    {viewMore && viewMoreLink ? <Link to={viewMoreLink} className="text-[12px] text-12 uppercase cursor-pointer ">{viewMore}</Link> : <></>}
                </div>
                {eventItemsArray.map((eventItem, index) => (
                    <div key={index}>
                        <div className="event w-full p-[15px] rounded-[10px] bg-[#1F1F1E] flex items-center mb-[10px] cursor-pointer ">
                            <div className={`w-[36px] h-[36px] bg-[#121313] ${imageContainerBorderRadius} flex items-center justify-center `}>
                                <img src={eventItem.imageSource} alt="" />
                            </div>
                            <div className="grow ml-[15px] ">
                                <div className="flex justify-between text-[14px] text-14 ">
                                    <div className="text-[14px] text-14 text-ellipsis whitespace-nowrap max-w-[150px] overflow-hidden ">{eventItem.eventInformation}</div>
                                    <div className="text-[#CCFF01] text-ellipsis whitespace-nowrap max-w-[100px] overflow-hidden ">{eventItem.eventValue}</div>
                                </div>
                                <div className="max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden text-[10px] text-[#D9D9D9] ">{eventItem.eventDetails}</div>
                            </div>
                        </div>
                        
                        <div className="event-breakdown hidden">
                            {eventType.toLowerCase() === "activity" ? 
                                <TransactionInformation 
                                    transactionInformation={eventItem.eventInformation} 
                                    transactionDate={eventItem.eventDetails} 
                                /> :
                                <NotificationDetails 
                                    notificationInformation={eventItem.eventInformation} 
                                    notificationDetails={eventItem.eventDetails} 
                                    notificationTime={eventItem.eventValue}
                                    notificationDate={eventHeader}
                                />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Events  ;            