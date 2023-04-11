import Inputs from "../../Components/General Components/Inputs";
import { Helmet } from 'react-helmet';

const TreasuryMarket = () => {
    const currencies = ['NGN', 'GHS', "KES", "EGP", "PWF", "CFA", "ZAR"]

    return (  
        <>
        <Helmet>
            <title>Treasury Market</title>
        </Helmet>
        <div>
            <Inputs inputType="text" inputHeight="54px" placeholder="Search currency or currency pair" imageBeforePlaceholderSource="Icons\search-sm.svg" />
            <div className="w-full flex gap-[5px] overflow-auto mt-[20px] text-[12px] font-medium text-[#D9D9D9] ">
                {currencies.map((currency, index) => (
                    <div key={index} className="px-[10px] py-[5px] rounded-[10px] hover:bg-[#CCFF01] hover:text-[#121313] "> {currency} </div>
                ))}
            </div>
        </div>
        </>
    );
}
 
export default TreasuryMarket;