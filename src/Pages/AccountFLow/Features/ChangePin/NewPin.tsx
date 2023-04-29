import { Helmet } from "react-helmet";
import PageInformation from "../../../../GlobalComponents/PageInformation";
import TransactionPin from "../../../../GlobalComponents/TransactionPin";
import ActionButton from "../../../../GlobalComponents/ActionButton";

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