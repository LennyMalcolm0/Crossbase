import { Helmet } from "react-helmet";
import PageInformation from "../../../Components/General Components/PageInformation";
import TransactionPin from "../../../Components/General Components/TransactionPin";
import ActionButton from "../../../Components/General Components/ActionButton";

const NewPin = () => {
    return (  
        <>
        <Helmet>
            <title>Change Pin</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="New PIN" />
                <div className="mt-[50px] ">
                    <TransactionPin />
                </div>
            </div>
            <ActionButton buttonText="Continue" link="/confirm-pin" />
        </div>
        </>
    );
}
 
export default NewPin;