import Inputs from "../../Components/Inputs";
import PageInformation from "../../Components/PageInformation";
import SearchCountries from "../../Components/SearchCountries";

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
        <div className="h-full">
            <div className="h-[30%] ">
                <PageInformation main="Select Destination" details="Select the country you're sending money to." /> 
                <Inputs inputType="text" placeholder="Search Country" imageAfterPlaceholderSource="Icons\search-sm.svg"  />
            </div>
            <div className="search-countries h-[70%] overflow-auto ">
                <SearchCountries countriesProfile={countriesProfileArray} />
            </div>
        </div>
    );
}
 
export default SelectDestination;