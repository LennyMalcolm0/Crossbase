import Inputs from "../../../Global Components/Inputs";
import PageInformation from "../../../Global Components/PageInformation";
import MarketPair from "../Components/MarketPair";
import { activeStakes } from "../../../Data/TreasuryFlowData";
import { Helmet } from "react-helmet";

const ActiveStakes = () => {
    return (  
        <>
        <Helmet>
            <title>Active Stakes</title>
        </Helmet>
        <div>
            <PageInformation main="Active Stakes" />
            <Inputs 
                inputType="text" placeholder="Search currency or currency pair" 
                imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".market-pair" 
            />
            <div className="mt-[30px] ">
                <MarketPair marketDetails={activeStakes} link="/view-stake" />
            </div>
        </div>
        </>
    );
}
 
export default ActiveStakes;