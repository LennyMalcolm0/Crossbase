import { useEffect } from "react";

interface Props {
    copiedTextDescription: string;
    copiedText: string;
}
const CopyToClipboard = ({copiedTextDescription, copiedText}: Props) => {
    useEffect(() => {
        const copyButton = document.querySelector(".copy-text") as HTMLElement;
        const textToCopy = document.querySelector(".copied-text") as HTMLElement;
        copyButton.addEventListener("click", (e) => {
            const textToCopy = `${copiedText}`;
            navigator.clipboard.writeText(textToCopy)
            // if (textToCopy.textContent) navigator.clipboard.writeText(`${textToCopy.textContent}`)
        })
    })

    return (  
        <div>
            <div className="w-full p-[15px] rounded-[10px] mb-[15px] bg-[#1F1F1E] flex items-center justify-between ">
                <div>
                    <div className="text-[10px] text-[#D9D9D9] ">{copiedTextDescription}</div>
                    <div className="copied-text text-[14px] text-14 ">{copiedText}</div>
                </div>
                <div className="copy-text px-[10px] py-[5px] rounded-[8px] border border-[#CCFF01] text-[10px] text-[#CCFF01]
                cursor-pointer select-none opacity-90 hover:opacity-100 ">Copy</div>
            </div>
        </div>
    );
}
 
export default CopyToClipboard;