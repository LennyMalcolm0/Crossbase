import { Link } from 'react-router-dom';
interface Props {
    link: string;
    countriesProfile: {
        country: string;
        countryFlagImageSource: string;
    }[]
}
const SearchCountries = ({link, countriesProfile}: Props) => {

    return (  
        <div>
            {countriesProfile.map((countryProfile, index) => (
                <Link to={link} key={index} className="country w-full py-[10px] flex items-center justify-between cursor-pointer hover:bg-[#1F1F1E] ">
                    <div className="flex items-center ">
                        <img src={countryProfile.countryFlagImageSource} alt="" />
                        <div className="country-name text-[14px] text-14 text-[#D9D9D9] capitalize ml-[15px] ">{countryProfile.country}</div>
                    </div>
                    <img src="Icons\chevron-right.svg" alt="" />
                </Link>
            ))}
        </div>
    );
}
 
export default SearchCountries;