import LockedProfileItem from "../Components/LockedProfileItem";
import ActionButton from "../../../GlobalComponents/ActionButton";
import PageInformation from "../../../GlobalComponents/PageInformation";
import { Helmet } from "react-helmet";
import ChangeableProfileItem from '../Components/ChangeableProfileItem';

const EditProfile = () => {
    const lockedProfileItemsArray = [
        {
            profileItem: "Full Name",
            profileItemValue: "Bethel Melariri"
        },
        {
            profileItem: "Country",
            profileItemValue: "Nigeria"
        },
        {
            profileItem: "Date of Birth",
            profileItemValue: "Jan 1, 1998"
        },
    ]

    const changeableProfileItemsArray = [
        {
            profileItem: "Email Address",
            profileItemValue: "username@emailsample.com"
        },
    ]

    return (  
        <>
        <Helmet>
            <title>Edit Profile</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <PageInformation main="Edit Profile" />

                <div className="w-[80px] h-[80px] rounded-full mx-auto mt-[30px] mb-[20px] border border-[#CCFF01] object-cover overflow-hidden relative ">
                    <img src="OtherImages\profile-pic.svg" alt="" className="h-full absolute inset-0 " />
                </div>
                <div className="w-fit px-[10px] py-[5px] rounded-[8px] mx-auto mb-[30px] border border-[#CCFF01] text-[12px] text-12 text-[#CCFF01] cursor-pointer ">Upload Photo</div>

                {lockedProfileItemsArray.map((lockedProfileItem, index) => (
                    <div key={index}>
                        <LockedProfileItem 
                            profileItem={lockedProfileItem.profileItem} 
                            profileItemValue={lockedProfileItem.profileItemValue} 
                        />
                    </div>
                ))}

                {changeableProfileItemsArray.map((changeableProfileItem, index) => (
                    <div key={index}>
                        <ChangeableProfileItem 
                            profileItem={changeableProfileItem.profileItem} 
                            profileItemValue={changeableProfileItem.profileItemValue} 
                        />
                    </div>
                ))}
            </div>

            <ActionButton buttonText="Update Profile" link="/account" />
        </div>
        </>
    );
}
 
export default EditProfile;