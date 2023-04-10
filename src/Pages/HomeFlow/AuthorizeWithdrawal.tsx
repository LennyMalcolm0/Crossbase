import ActionButton from "../../Components/ActionButton";
import PageInformation from "../../Components/PageInformation";
import TransactionPin from "../../Components/TransactionPin";

const AuthorizeWithdrawal = () => {
    return (  
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Enter Pin" details="Enter your transaction PIN to authorize this withdrawal." />
                <TransactionPin />
            </div>
            <ActionButton buttonText="Complete" link="/" />
        </div>
    );
}
 
export default AuthorizeWithdrawal;