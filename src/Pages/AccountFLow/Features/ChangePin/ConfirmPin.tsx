import { Helmet } from "react-helmet";
import PageInformation from "../../../../Global Components/PageInformation";
import TransactionPin from "../../../../Global Components/TransactionPin";
import ActionButton from "../../../../Global Components/ActionButton";

const ConfirmPin = () => {
    return (  
        <>
        <Helmet>
            <title>Change Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Confirm PIN" />
                <div className="mt-[35px] ">
                    <TransactionPin />
                </div>
            </div>
            <ActionButton buttonText="Change Pin" link="/account" />
        </div>
        </>
    );
}
 
export default ConfirmPin;