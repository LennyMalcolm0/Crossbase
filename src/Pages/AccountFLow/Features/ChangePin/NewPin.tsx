import { Helmet } from "react-helmet";
import PageInformation from "../../../../Global Components/PageInformation";
import TransactionPin from "../../../../Global Components/TransactionPin";
import ActionButton from "../../../../Global Components/ActionButton";

const NewPin = () => {
    return (  
        <>
        <Helmet>
            <title>Change Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="New PIN" />
                <div className="mt-[35px] ">
                    <TransactionPin />
                </div>
            </div>
            <ActionButton buttonText="Continue" link="/confirm-pin" />
        </div>
        </>
    );
}
 
export default NewPin;