import PageInformation from '../../Components/PageInformation';

interface Props {
    notificationInformation: string;
    notificationDetails: string;
    notificationTime: string;  
    notificationDate: string;  
}
const NotificationInformation = ({notificationInformation, notificationDetails, notificationTime, notificationDate}: Props) => {

    return (  
        <div className="h-screen w-screen max-h-[1000px] max-w-[400px] absolute top-0 left-0 bg-[#121313] px-[20px] py-[35px] ">
            <div className="h-full w-full ">   
                <PageInformation main="Notification Info" dontGoBackInHistory={true} />
                <div className="font-bold mb-[5px] ">{notificationInformation}</div>
                <div className="text-[12px]">
                    <div className="text-[#D9D9D9] ">{notificationDetails}</div>
                    <div className="text-[#CCFF01] uppercase ">{`${notificationTime} - ${notificationDate}`}</div>
                </div>
            </div>
        </div>
    );
}
 
export default NotificationInformation;