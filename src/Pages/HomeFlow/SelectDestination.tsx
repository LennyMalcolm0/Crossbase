import Inputs from "../../Components/General Components/Inputs";
import PageInformation from "../../Components/General Components/PageInformation";
import SearchCountries from "../../Components/HomeFlow Components/SearchCountries";
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

    useEffect(() => {
        const searchBar = document.querySelector("input") as HTMLInputElement,
        countries = document.querySelectorAll(".country");
        searchBar.addEventListener("input", () => {
            const searchBarContent = searchBar.value;
            countries.forEach(country => {
                const countryDisplay = country as HTMLElement;
                if (searchBarContent !== "" && country.textContent && country.textContent.toLowerCase().indexOf(searchBarContent.toLowerCase())) {
                    countryDisplay.style.display = "none"
                } else {
                    countryDisplay.style.display = "flex"
                }
            })
        })
    })

    return (  
        <>
        <Helmet>
            <title>Select Destination</title>
        </Helmet>
        <div className="h-full">
            <div className="h-[30%] ">
                <PageInformation main="Select Destination" details="Select the country you're sending money to." /> 
                <Inputs inputType="text" placeholder="Search Country" imageBeforePlaceholderSource="Icons\search-sm.svg"  />
            </div>
            <div className="search-countries h-[70%] overflow-auto ">
                <SearchCountries link="/transfer-amount" countriesProfile={countriesProfileArray} />
            </div>
        </div>
        </>
    );
}
 
export default SelectDestination;