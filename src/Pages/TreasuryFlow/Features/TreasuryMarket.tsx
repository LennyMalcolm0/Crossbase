import Inputs from "../../../GlobalComponents/Inputs";
import { Helmet } from 'react-helmet';
import MarketPair from "../Components/MarketPair";
import AppNavigationBar from "../../../GlobalComponents/AppNavigationBar";
import TreasuryNavigationBar from "../Components/TreasuryNavigationBar";

const TreasuryMarket = () => {
    const marketInformation = [
        {
            currencyPairImageSource: "Countries/NGN-GHS.svg",
            currencyPair: "NGN/GHS",
            marketVolume: "Vol. NGN 150.3m",
        },
        {
            currencyPairImageSource: "Countries/NGN-KES.svg",
            currencyPair: "NGN/KES",
            marketVolume: "Vol. NGN 120.3m",
        },
        {
            currencyPairImageSource: "Countries/GHS-KES.svg",
            currencyPair: "GHS/KES",
            marketVolume: "Vol. NGN 125.6m",
        },
        {
            currencyPairImageSource: "Countries/EGP-RWF.svg",
            currencyPair: "EGP/RWF",
            marketVolume: "Vol. NGN 79.7m",
        },
        {
            currencyPairImageSource: "Countries/CFA-GHS.svg",
            currencyPair: "CFA/GHS",
            marketVolume: "Vol. NGN 110.5m",
        },
        {
            currencyPairImageSource: "Countries/NGN-EGP.svg",
            currencyPair: "NGN/EGP",
            marketVolume: "Vol. NGN 138.4m",
        },
        {
            currencyPairImageSource: "Countries/ZAR-KES.svg",
            currencyPair: "ZAR/KES",
            marketVolume: "Vol. NGN 47.9m",
        },
        {
            currencyPairImageSource: "Countries/ZAR-GHS.svg",
            currencyPair: "ZAR/GHS",
            marketVolume: "Vol. NGN 67.3m",
        }
    ];

    return (  
        <>
        <Helmet>
            <title>Treasury Market</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div className="appHeight-minus-navbarHeight w-full ">
                <div className="h-[140px]  ">
                    <TreasuryNavigationBar treasuryMarket={true} />
                    <Inputs 
                        inputType="text" 
                        inputHeight="54px" 
                        placeholder="Search currency or currency pair" 
                        imageBeforePlaceholderSource="Icons\search-sm.svg" 
                        filterItemsClassName=".market-pair"
                    />
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