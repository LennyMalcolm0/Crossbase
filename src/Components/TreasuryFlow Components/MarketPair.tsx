import { Link } from "react-router-dom";

interface Props {
    marketDetails: {
        currencyPair: string;
        currencyPairImageSource: string;
        marketVolume: string;
    }[]
}
const MarketPair = ({marketDetails}: Props) => {
    return (  
        <div>
            {marketDetails.map((market, index) => (
                <div key={index} className="market-pair w-full px-[10px] py-[15px] bg-[#1F1F1E] rounded-[10px] mb-[10px] flex items-center justify-between ">
                    <div className="flex items-center">
                        <img src={market.currencyPairImageSource} alt="" />
                        <div className="ml-[15px] ">
                            <div className="text-[14px] ">{market.currencyPair}</div>
                            <div className="text-[10px] text-[#D9D9D9] ">{market.marketVolume}</div>
                            {/* <div className="text-[14px] text-[#D9D9D9] ">{`Vol. ${} ${}`}</div> */}
                        </div>
                    </div>
                    <Link to="/new-stake" className="h-fit px-[10px] py-[5px] rounded-[8px] flex items-center border border-[#CCFF01] text-[12px] text-[#CCFF01] cursor-pointer ">
                        <img src="Icons\top-up-green.svg" alt="" className="h-[14px] mr-[5px] " />
                        <div>Stake</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default MarketPair;