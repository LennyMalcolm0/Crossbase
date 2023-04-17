import { Helmet } from "react-helmet";
import PageInformation from "../../../../Global Components/PageInformation";
import TransactionPin from "../../../../Global Components/TransactionPin";
import ActionButton from "../../../../Global Components/ActionButton";

const CurrentPin = () => {
    return (  
        <>
        <Helmet>
            <title>Change Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Current PIN" />
                <div className="mt-[35px] ">
                    <TransactionPin />
                </div>
            </div>
            <ActionButton buttonText="Continue" link="/new-pin" />
        </div>
        </>
    );
}
 
export default CurrentPin;