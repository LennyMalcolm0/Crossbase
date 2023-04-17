import ActionButton from "../../../Global Components/ActionButton";
import PageInformation from "../../../Global Components/PageInformation";
import { Helmet } from "react-helmet";

const CompleteKYC = () => {
    return (  
        <>
        <Helmet>
            <title>Complete KYC</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <PageInformation main="Complete KYC" />
            <img src="Icons\AccountFlowIcons\kyc gif.svg" alt="" className="mb-[100px] " />
            <ActionButton buttonText="Start Verification" link="" />
        </div>
        </>
    );
}
 
export default CompleteKYC;