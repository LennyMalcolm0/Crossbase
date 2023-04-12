import { Link } from "react-router-dom";

interface Props {
    myStakes?: boolean;
    treasuryMarket?: boolean;
}
const TreasuryNavigationBar = ({myStakes, treasuryMarket}: Props) => {
    return (  
        <div className="w-fit p-[5px] gap-[5px] rounded-[25px] mx-auto mb-[20px] bg-[#1F1F1E] flex text-[14px] text-[#D9D9D9] ">
            <Link to="/my-stakes" 
                className={`w-[140px] py-[13px] rounded-[25px] text-center hover:bg-[#121313] 
                hover:text-[#CCFF01] ${myStakes ? "bg-[#121313] text-[#CCFF01]" : ""} `}>My Stakes
            </Link>
            <Link to="/treasury-market" 
                className={`w-[140px] py-[13px] rounded-[25px] text-center  hover:bg-[#121313] 
                hover:text-[#CCFF01] ${treasuryMarket ? "bg-[#121313] text-[#CCFF01]" : ""} `}>Treasury Market
            </Link>
        </div>
    );
}
 
export default TreasuryNavigationBar;