import { useEffect } from "react";
import { Link } from "react-router-dom";
import ActionIcon from "../../Components/General Components/ActionIcon";

interface Props {
    promptOpenerClassName: string;
}
const LogOutPrompt = ({promptOpenerClassName}: Props) => {
    useEffect(() => {
        const logOut = document.querySelector(`.${promptOpenerClassName}`) as HTMLElement;
        const logoutPrompt = document.querySelector(".log-out-prompt") as HTMLElement;
        logOut.addEventListener("click", () => {
            logoutPrompt.classList.remove("hidden");
            logoutPrompt.classList.add("block");
        })

        const closePrompt = document.querySelector(".close-prompt") as HTMLElement;
        closePrompt.addEventListener("click", () => {
            logoutPrompt.classList.add("hidden");
            logoutPrompt.classList.remove("block");
        })
    })

    return (  
        <div className="log-out-prompt hidden h-screen w-full max-h-[1000px] max-w-[400px] absolute top-0 left-0 bg-[#121313] px-[20px] py-[35px] z-[9999999999999] ">
            <div className="h-full flex items-center ">
                <div className="w-full rounded-[20px] bg-[#1F1F1E] px-[20px] py-[30px] text-center mb-[100px] ">
                    <div className="text-[24px] text-white text-center mb-[20px] ">Are you sure you want to logout?</div>

                    <div className="h-[52px] w-full grid grid-cols-2 gap-x-2 text-center leading-[52px] font-bold ">
                        <Link to="/login" className="w-full h-full rounded-[10px] bg-[#CCFF01] text-[#121313] text-[17px] cursor-pointer ">Yes</Link>
                        <div className="close-prompt w-full h-full rounded-[10px] border border-[#CCFF01] text-[#CCFF01] cursor-pointer ">No</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LogOutPrompt;