import Inputs from "../../Components/General Components/Inputs";
import PageInformation from "../../Components/General Components/PageInformation";
import MarketPair from "../../Components/TreasuryFlow Components/MarketPair";
import { activeStakes } from "./TreasuryData";

const ActiveStakes = () => {
    return (  
        <div>
            <PageInformation main="Active Stakes" />
            <Inputs 
                inputType="text" placeholder="Search currency or currency pair" 
                imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".market-pair" 
            />
            <div className="mt-[30px] ">
                <MarketPair marketDetails={activeStakes} />
            </div>
        </div>
    );
}
 
export default ActiveStakes;