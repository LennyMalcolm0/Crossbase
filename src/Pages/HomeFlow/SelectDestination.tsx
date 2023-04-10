import Inputs from "../../Components/Inputs";
import PageInformation from "../../Components/PageInformation";

const SelectDestination = () => {
    return (  
        <div>
            <PageInformation main="Select Destination" details="Select the country you're sending money to." /> 
            <Inputs inputType="text" placeholder="Search Country" imageAfterPlaceholderSource="Icons\search-sm.svg"  />
        </div>
    );
}
 
export default SelectDestination;