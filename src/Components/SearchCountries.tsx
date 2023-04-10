interface Props {
    countriesProfile: {
        country: string;
        countryFlagImageSource: string;
    }[]
}
const SearchCountries = ({countriesProfile}: Props) => {
    return (  
        <div>
            {countriesProfile.map((countryProfile, index) => (
                <div key={index} className="w-full py-[10px] flex items-center justify-between cursor-pointer ">
                    <div className="flex items-center ">
                        <img src={countryProfile.countryFlagImageSource} alt="" />
                        <div className="text-[14px] text-[#D9D9D9] capitalize ml-[15px] ">{countryProfile.country}</div>
                    </div>
                    <img src="Icons\chevron-right.svg" alt="" />
                </div>
            ))}
        </div>
    );
}
 
export default SearchCountries;