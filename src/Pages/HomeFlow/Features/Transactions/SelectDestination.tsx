import Inputs from "../../../../Global Components/Inputs";
import PageInformation from "../../../../Global Components/PageInformation";
import SearchCountries from "../../Components/SearchCountries";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SelectDestination = () => {
    const countriesProfileArray = [
        {
            country: "Nigeria",
            countryFlagImageSource: "Countries/nigeria.svg"
        },
        {
            country: "Ghana",
            countryFlagImageSource: "Countries/ghana.svg"
        },
        {
            country: "Egypt",
            countryFlagImageSource: "Countries/egypt.svg"
        },
        {
            country: "Kenya",
            countryFlagImageSource: "Countries/kenya.svg"
        },
        {
            country: "Rwanda",
            countryFlagImageSource: "Countries/rwanda.svg"
        },
        {
            country: "Senegal",
            countryFlagImageSource: "Countries/senegal.svg"
        },
        {
            country: "South Africa",
            countryFlagImageSource: "Countries/south-africa.svg"
        },
    ]

    return (  
        <>
        <Helmet>
            <title>Select Destination</title>
        </Helmet>
        <div className="h-full">
            <div className="h-[200px] ">
                <PageInformation main="Select Destination" details="Select the country you're sending money to." /> 
                <Inputs 
                    inputType="text" placeholder="Search Country" 
                    imageBeforePlaceholderSource="Icons\search-sm.svg" filterItemsClassName=".country" 
                />
            </div>
            <div className="search-countries grow overflow-auto ">
                <SearchCountries link="/transfer-amount" countriesProfile={countriesProfileArray} />
            </div>
        </div>
        </>
    );
}
 
export default SelectDestination;