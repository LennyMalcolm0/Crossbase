import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
    activePage: string;
}
const AppNavigationBar = ({activePage}: Props) => {
    useEffect(() => {
        const navigationLinks = document.querySelectorAll(".navigation-link");
        for (let i = 0; i <navigationLinks.length; i++) {
            const navigationLinkText = navigationLinks[i].children[1] as HTMLElement;
            if (activePage.toLowerCase() === navigationLinkText.innerHTML.toLowerCase()) {
                navigationLinks[i].classList.add("text-[#CCFF01]");
                navigationLinks[i].classList.add("bg-[#121313]");
            }
        }

        if (activePage.toLowerCase() === "home") {
            const navLinkImage = navigationLinks[0].children[0] as HTMLImageElement;
            navLinkImage.src = "Icons/home-active.svg";
        } else if (activePage.toLowerCase() === "treasury") {
            const navLinkImage = navigationLinks[1].children[0] as HTMLImageElement;
            navLinkImage.src = "Icons/treasury-active.svg";
        } else {
            const navLinkImage = navigationLinks[2].children[0] as HTMLImageElement;
            navLinkImage.src = "Icons/account-active.svg";
        }
    }, []);

    return (  
        <div className="w-full sticky bottom-[-1px] ">
            <div className="w-full h-[60px] bg-[#1F1F1E] flex items-center justify-between rounded-[35px] p-[5px] mt-[10px] text-[14px] leading-[20px] text-[#D9D9D9] ">
                <Link to="/" className="navigation-link grow h-full rounded-[35px] flex items-center justify-center
                cursor-pointer hover:text-[#CCFF01] hover:bg-[#121313] ">
                    <img src="Icons\home-normal.svg" alt="" className="mr-[10px]" />
                    <span>Home</span>
                </Link>
                <Link to="/my-stakes" className="navigation-link grow h-full rounded-[35px] flex items-center justify-center
                cursor-pointer hover:text-[#CCFF01] hover:bg-[#121313] ">
                    <img src="Icons\treasury-normal.svg" alt="" className="mr-[10px]" />
                    <span>Treasury</span>
                </Link>
                <Link to="/account" className="navigation-link grow h-full rounded-[35px] flex items-center justify-center
                cursor-pointer hover:text-[#CCFF01] hover:bg-[#121313] ">
                    <img src="Icons\account-normal.svg" alt="" className="mr-[10px]" />
                    <span>Account</span>
                </Link>
            </div>
        </div>
    );
}
 
export default AppNavigationBar;