import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { animatePage } from "../../../utils/FunctionsAndData";

interface Props {
    promptOpenerClassName: string;
}
const LogOutPrompt = ({promptOpenerClassName}: Props) => {
    const [promptOpened, setPromptOpened] = useState(false);

    useEffect(() => {
        const logOut = document.querySelector(`.${promptOpenerClassName}`) as HTMLElement;
        logOut.addEventListener("click", () => {
            setPromptOpened(true);
        })
    });

    const navigate = useNavigate();

    function logoutUser () {
        animatePage(true);

        signOut(auth)
        .then(() => {
            animatePage(false);

            navigate("/login");
        })
        .catch(err => {
            animatePage(false);
            console.log(err);
        })
    };

    return (  
        <>
            {promptOpened &&
            <div className="h-full w-full max-h-[1000px] max-w-[400px] absolute top-0 left-0 bg-[#121313] px-[20px] py-[35px] z-[9999999999999] ">
                <div className="h-full flex items-center ">
                    <div className="w-full rounded-[20px] bg-[#1F1F1E] px-[20px] py-[30px] text-center mb-[100px] ">
                        <div className="text-[24px] text-white font-semibold text-center mb-[20px] ">Are you sure you want to logout?</div>

                        <div className="h-[52px] w-full grid grid-cols-2 gap-x-2 text-center leading-[52px] font-bold ">
                            <div onClick={logoutUser} className="w-full h-full rounded-[10px] bg-[#CCFF01] text-[#121313] text-[17px] cursor-pointer ">Yes</div>
                            <div onClick={() => setPromptOpened(false)} className="close-prompt w-full h-full rounded-[10px] border border-[#CCFF01] text-[#CCFF01] cursor-pointer ">No</div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
 
export default LogOutPrompt;