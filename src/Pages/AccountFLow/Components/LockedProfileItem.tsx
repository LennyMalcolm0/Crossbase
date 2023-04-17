interface Props {
    profileItem: string;
    profileItemValue: string;
}
const LockedProfileItem = ({profileItem, profileItemValue}: Props) => {
    return (  
        <div className="text-[#D9D9D9] mb-[10px] opacity-80 ">
            <label className="text-[12px] text-12 ">{profileItem}</label>
            <div className="w-full p-[15px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] flex items-center justify-between ">
                <div className="text-[14px] text-14 ">{profileItemValue}</div>
                <img src="Icons\AccountFlowIcons\locked.svg" alt="" />
            </div>
        </div>
    );
}
 
export default LockedProfileItem;