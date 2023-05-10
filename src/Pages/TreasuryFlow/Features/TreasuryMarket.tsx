import Inputs from "../../../GlobalComponents/Inputs";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import MarketPair from "../Components/MarketPair";
import { currenciesArray, marketInformation } from "../data";
import AppNavigationBar from "../../../GlobalComponents/AppNavigationBar";
import TreasuryNavigationBar from "../Components/TreasuryNavigationBar";

const TreasuryMarket = () => {
    useEffect(() => {
        const currenciesMarket = document.querySelectorAll(".currency-market"),
        firstcurrencyMarket = document.querySelectorAll(".currency-market")[0];
        firstcurrencyMarket.classList.add("bg-[#CCFF01]");
        firstcurrencyMarket.classList.add("text-[#121313]");

        currenciesMarket.forEach(currencyMarket => {
            currencyMarket.addEventListener("click", () => {
                currenciesMarket.forEach(currencyMarket => {
                    currencyMarket.classList.remove("bg-[#CCFF01]");
                    currencyMarket.classList.remove("text-[#121313]");
                })

                currencyMarket.classList.add("bg-[#CCFF01]");
                currencyMarket.classList.add("text-[#121313]");
            })
        });

        // Expand Inputs to accommodate its TSX code
        const searchMarket = document.querySelector("input") as HTMLInputElement,
        marketPairs = document.querySelectorAll(".market-pair");
        searchMarket.addEventListener("input", () => {
            const searchMarketContent = searchMarket.value;
            marketPairs.forEach(marketPair => {
                const currencyMarketDisplay = marketPair as HTMLElement;
                if (searchMarketContent !== "" && marketPair.textContent && marketPair.textContent.toLowerCase().indexOf(searchMarketContent.toLowerCase())) {
                    currencyMarketDisplay.style.display = "none"
                } else {
                    currencyMarketDisplay.style.display = "flex"
                }
            })
        })
    })

    return (  
        <>
        <Helmet>
            <title>Treasury Market</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div className="appHeight-minus-navbarHeight w-full ">
                <div className="h-[190px]  ">
                    <TreasuryNavigationBar treasuryMarket={true} />
                    <Inputs 
                        inputType="text" inputHeight="54px" placeholder="Search currency or currency pair" 
                        imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".market-pair"
                    />
                    
                    <div className="w-full flex items-center gap-[5px] overflow-auto my-[20px] text-[12px] text-12 font-medium text-[#D9D9D9] ">
                        {currenciesArray.map((currency, index) => (
                            <div key={index}>
                                <div className="currency-market px-[10px] py-[5px] rounded-[10px] hover:bg-[#CCFF01] hover:text-[#121313] cursor-pointer "> {currency} </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="treasury-market-scrollable-section overflow-auto ">
                    <MarketPair marketDetails={marketInformation} />
                </div>
            </div>

            <AppNavigationBar activePage="treasury" />
        </div>
        </>
    );
}
 
export default TreasuryMarket;