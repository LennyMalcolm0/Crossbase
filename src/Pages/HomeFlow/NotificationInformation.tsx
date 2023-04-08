import PageInformation from '../../Components/PageInformation';

interface Props {
    notificationInformation: string;
    notificationDetails: string;
    notificationTime: string;  
    notificationDate: string;  
}
const NotificationInformation = ({notificationInformation, notificationDetails, notificationTime, notificationDate}: Props) => {

    return (  
        <div>
            <PageInformation main="Notification Info" />
            <div className="font-bold mb-[5px] ">{notificationInformation}</div>
            <div className="text-[12px]">
                <div className="text-[#D9D9D9] ">{notificationDetails}</div>
                <div className="text-[#CCFF01] uppercase ">{`${notificationTime} - ${notificationDate}`}</div>
            </div>
        </div>
    );
}
 
export default NotificationInformation;