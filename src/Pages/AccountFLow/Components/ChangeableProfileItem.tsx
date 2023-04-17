interface Props {
    profileItem: string;
    profileItemValue: string;
    countryCode?: string;
}
const ChangeableProfileItem = ({profileItem, profileItemValue, countryCode}: Props) => {
    return (  
        <div className="text-[#D9D9D9] mb-[10px] opacity-80 ">
            <label className="text-[12px] text-12 ">{profileItem}</label>
            <div className="w-full p-[15px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[14px] text-14 flex items-center justify-between ">
                {!countryCode ?
                    <div>{profileItemValue}</div> :
                    <div className="flex items-center ">
                        <div className="text-white font-semibold mr-[10px] ">{countryCode}</div>
                        <div>{profileItemValue}</div>
                    </div>
                }
                <div className="change-item-value px-[10px] py-[5px] rounded-[8px] border border-[#CCFF01] text-[10px] text-[#CCFF01]
                cursor-pointer opacity-90 hover:opacity-100 ">Change</div>
            </div>
        </div>
    );
}
 
export default ChangeableProfileItem;