import { Helmet } from "react-helmet";
import PageInformation from "../../../Components/General Components/PageInformation";
import TransactionPin from "../../../Components/General Components/TransactionPin";
import ActionButton from "../../../Components/General Components/ActionButton";

const ConfirmPin = () => {
    return (  
        <>
        <Helmet>
            <title>Change Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Confirm PIN" />
                <div className="mt-[50px] ">
                    <TransactionPin />
                </div>
            </div>
            <ActionButton buttonText="Change Pin" link="/account" />
        </div>
        </>
    );
}
 
export default ConfirmPin;