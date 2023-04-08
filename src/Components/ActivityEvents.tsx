import { useEffect, useState } from "react";

interface Props {
    eventHeader: string;
    viewMore?: string;
    eventItemsArray: {
        imageSource: string;
        eventInformation: string;
        eventDate: string;
        eventAmount: string;                         
    }[]
}
const ActivityEvents = ({eventHeader, viewMore, eventItemsArray}: Props) => {

    return (  
        <div>
            <div className="w-full p-[15px] rounded-[20px] border-[3px] border-[#1F1F1E] mt-[15px] ">
                <div className="flex items-center justify-between text-white mb-[20px] ">
                    <div className="text-[14px] font-bold ">{eventHeader}</div>
                    {viewMore ? <div className="text-[12px] uppercase cursor-pointer ">{viewMore}</div> : <></>}
                </div>
                {eventItemsArray.map((eventItem, index) => (
                    <div key={index}>
                        <div className="icon-container w-full h-[60px] rounded-[10px] bg-[#1F1F1E] px-[15px] flex items-center mb-[10px] cursor-pointer ">
                            <div className="w-[36px] h-[36px] bg-[#121313] rounded-full flex items-center justify-center ">
                                <img src={eventItem.imageSource} alt="" />
                            </div>
                            <div className="grow ml-[15px] ">
                                <div className="flex justify-between text-[14px] ">
                                    <div className="text-ellipsis whitespace-nowrap max-w-[120px] overflow-hidden ">{eventItem.eventInformation}</div>
                                    <div className="text-[#CCFF01] text-ellipsis whitespace-nowrap max-w-[70px] overflow-hidden ">{eventItem.eventAmount}</div>
                                </div>
                                <div className="max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden text-[10px] text-[#D9D9D9] ">{eventItem.eventDate}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ActivityEvents;            