import { Link } from "react-router-dom";

interface Props {
    link?: string;
    marketDetails: {
        currencyPair: string;
        currencyPairImageSource: string;
        marketVolume: string;
        amountStaked?: string;
    }[]
}
const MarketPair = ({link, marketDetails}: Props) => {
    return (  
        <div>
            {marketDetails.map((market, index) => (
                <div key={index}>
                    {market.amountStaked ?
                    <Link to={link ? link : ""} 
                        className={`market-pair w-full px-[10px] py-[15px] pb-[20px] bg-[#1F1F1E] rounded-[10px] mb-[10px] 
                        flex items-center justify-between ${market.amountStaked ? "cursor-pointer" : "cursor-default"} `}
                    >
                        <div className="flex items-center">
                            <img src={market.currencyPairImageSource} alt="" />
                            <div className="ml-[15px] ">
                                <div className="text-[14px] text-14 ">{market.currencyPair}</div>
                                <div className="text-[10px] text-[#D9D9D9] ">{market.marketVolume}</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[10px] text-[#D9D9D9] text-end ">Amount Staked</div>
                            <div className="text-[14px] text-14 text-[#CCFF01] max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis ">{market.amountStaked}</div>
                        </div>
                    </Link> :

                    <div
                        className={`market-pair w-full px-[10px] py-[15px] pb-[20px] bg-[#1F1F1E] rounded-[10px] mb-[10px] 
                        flex items-center justify-between ${market.amountStaked ? "cursor-pointer" : "cursor-default"} `}
                    >
                        <div className="flex items-center">
                            <img src={market.currencyPairImageSource} alt="" />
                            <div className="ml-[15px] ">
                                <div className="text-[14px] text-14 ">{market.currencyPair}</div>
                                <div className="text-[10px] text-[#D9D9D9] ">{market.marketVolume}</div>
                            </div>
                        </div>
                        <Link to="/new-stake" className="h-fit px-[10px] py-[5px] rounded-[8px] flex items-center border border-[#CCFF01] text-[12px] text-12 text-[#CCFF01] cursor-pointer ">
                            <img src="Icons\top-up-green.svg" alt="" className="h-[14px] mr-[5px] " />
                            <div>Stake</div>
                        </Link>
                    </div>}
                </div>
            ))}
        </div>
    );
}
 
export default MarketPair;