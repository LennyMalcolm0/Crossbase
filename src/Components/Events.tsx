import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import NotificationInformation from "../Pages/HomeFlow/NotificationInformation";

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
                eventBreakdown.classList.remove("hidden");
                eventBreakdown.classList.add("block");
            })
        })

        const goBackButton = document.querySelectorAll(".action-icon");
        goBackButton.forEach(button => {
            button.addEventListener("click", () => {
                const eventBreakdown = button.closest('div.event-breakdown') as HTMLElement;
                eventBreakdown.classList.remove("block");
                eventBreakdown.classList.add("hidden");
            })
        })
    })

    return (  
        <div>
            <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] mt-[15px] ">
                <div className="flex items-center justify-between text-white mb-[20px] ">
                    <div className="text-[14px] font-bold ">{eventHeader}</div>
                    {viewMore && viewMoreLink ? <Link to={viewMoreLink} className="text-[12px] uppercase cursor-pointer ">{viewMore}</Link> : <></>}
                </div>
                {eventItemsArray.map((eventItem, index) => (
                    <div key={index}>
                        <div className="event w-full h-[60px] rounded-[10px] bg-[#1F1F1E] px-[15px] flex items-center mb-[10px] cursor-pointer ">
                            <div className={`w-[36px] h-[36px] bg-[#121313] ${imageContainerBorderRadius} flex items-center justify-center `}>
                                <img src={eventItem.imageSource} alt="" />
                            </div>
                            <div className="grow ml-[15px] ">
                                <div className="flex justify-between text-[14px] ">
                                    <div className="text-ellipsis whitespace-nowrap max-w-[120px] overflow-hidden ">{eventItem.eventInformation}</div>
                                    <div className="text-[#CCFF01] text-ellipsis whitespace-nowrap max-w-[70px] overflow-hidden ">{eventItem.eventValue}</div>
                                </div>
                                <div className="max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden text-[10px] text-[#D9D9D9] ">{eventItem.eventDetails}</div>
                            </div>
                        </div>
                        {eventType.toLowerCase() === "activity" ? <div></div> :
                            <div className="event-breakdown hidden">
                                <NotificationInformation 
                                    notificationInformation={eventItem.eventInformation} 
                                    notificationDetails={eventItem.eventDetails} 
                                    notificationTime={eventItem.eventValue}
                                    notificationDate={eventHeader}
                                />
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Events  ;            