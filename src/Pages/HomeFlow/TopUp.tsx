import CopyToClipboard from '../../Components/CopyToClipboard';
import PageInformation from "../../Components/PageInformation";

const TopUp = () => {
    const copyToClipboardItemsArray = [
        {
            copiedTextDescription: "Account Name",
            copiedText: "Bethel Melariri",
        },
        {
            copiedTextDescription: "Bank Name",
            copiedText: "9 Payment Service Bank",
        },
        {
            copiedTextDescription: "Account Number",
            copiedText: "0123456789",
        },
    ]

    return (  
        <div>
            <PageInformation main="Add Money To Wallet" details="Kindly make a bank transfer to the account details below." />
            {copyToClipboardItemsArray.map((item, index) => (
                <div key={index}>
                    <CopyToClipboard copiedTextDescription={item.copiedTextDescription} copiedText={item.copiedText} />
                </div>
            ))}
        </div>
    );
}
 
export default TopUp;