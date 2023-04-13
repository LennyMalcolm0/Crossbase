import { Link } from "react-router-dom";
import AccountPageDetail from "../../Components/AccountFlow Components/AccountPageDetail";
import AppNavigationBar from "../../Components/General Components/AppNavigationBar";
import { Helmet } from "react-helmet";

const Account = () => {
    const accountProperties = [
        {
            menuIcon: "Icons/AccountPage/complete-kyc.svg",
            menuTitle: "Complete KYC",
            menuSubText: "Verify your identity to unlock full app functionality",
            link: "/complete-kyc"
        },
        {
            menuIcon: "Icons/AccountPage/change-password.svg",
            menuTitle: "Change Password",
            menuSubText: "Update your login password",
            link: "/change-password"
        },
        {
            menuIcon: "Icons/AccountPage/change-pin.svg",
            menuTitle: "Change PIN",
            menuSubText: "Update your transaction PIN",
            link: "/change-pin"
        },
        {
            menuIcon: "Icons/AccountPage/get-help.svg",
            menuTitle: "Get Help",
            menuSubText: "Submit a complaint to our customer support",
            link: ""
        },
        {
            menuIcon: "Icons/AccountPage/invite-a-friend.svg",
            menuTitle: "Invite a Friend",
            link: ""
        },
        {
            menuIcon: "Icons/AccountPage/log-out.svg",
            menuTitle: "Logout",
            link: ""
        }
    ]

    return (  
        <>
        <Helmet>
            <title>Account</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="w-full px-[10px] py-[15px] rounded-[10px] mb-[30px] flex items-center justify-between ">
                    <div className="flex items-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-[#CCFF01] object-cover overflow-hidden relative ">
                            <img src="OtherImages\profile-pic.svg" alt="" className="h-full absolute inset-0 " />
                        </div>
                        <div className="ml-[15px] ">
                            <div className="font-semibold ">Bethel Melariri</div>
                            <div className="text-[12px] text-[#D9D9D9] ">username@emailsample.com</div>
                        </div>
                    </div>
                    <Link to="/edit-profile" className="px-[10px] py-[5px] rounded-[8px] border border-[#CCFF01] text-[12px] text-[#CCFF01] cursor-pointer ">Edit Profile</Link>
                </div>

                {accountProperties.map((accountProperty, index) => (
                    <div key={index}>
                        <AccountPageDetail  
                            link={accountProperty.link} accountPropertyTitle={accountProperty.menuTitle} 
                            accountPropertySubText={accountProperty.menuSubText} accountPropertyImageSource={accountProperty.menuIcon}
                        />
                    </div>
                ))}
            </div>
            
            <AppNavigationBar activePage="Account" />
        </div>
        </>
    );
}
 
export default Account;