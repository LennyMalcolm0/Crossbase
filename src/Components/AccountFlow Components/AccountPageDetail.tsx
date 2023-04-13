import { Link } from "react-router-dom";

interface Props {
    link?: string;
    accountPropertyTitle: string;
    accountPropertySubText?: string;
    accountPropertyImageSource: string;
    extraClassName?: string;
}
const AccountPageDetail = ({link, accountPropertyTitle, accountPropertyImageSource, accountPropertySubText, extraClassName}: Props) => {
    return (  
        <div>
            <Link to={link ? link : ""} className={`${extraClassName} w-full p-[15px] bg-[#1F1F1E] rounded-[10px] mb-[10px] flex items-center justify-between cursor-pointer `}>
                <div className="flex items-center ">
                    <div className="w-[36px] h-[36px] bg-[#121313] rounded-[5px] flex items-center justify-center ">
                        <img src={accountPropertyImageSource} alt="" />
                    </div>
                    <div className="ml-[15px] ">
                        <div className="text-[14px] text-14 ">{accountPropertyTitle}</div>
                        {accountPropertySubText ? <div className="text-[10px] text-[#D9D9D9] ">{accountPropertySubText}</div> : <></>}
                    </div>
                </div>
                <img src="Icons\chevron-right.svg" alt="" />
            </Link>
        </div>
    );
}
 
export default AccountPageDetail;