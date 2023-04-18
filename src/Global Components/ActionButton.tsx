import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

interface Props {
    buttonText: string;
    link: string;
    inputValues?: string[];
}
const ActionButton = ({ buttonText, link, inputValues }: Props) => {
    const [validLink, setValidLink] = useState<boolean>(false)
    useEffect(() => {
        if (inputValues) {
            inputValues.every(inputValue => {
                if (inputValue !== "") {
                    setValidLink(true);
                } else {
                    setValidLink(false);
                }
            });
        } 
    }, [])

    return ( 
        <div>
            <Link to={validLink ? link : ""} >
                <div className="w-full h-[48px] leading-[48px] rounded-[10px] bg-[#CCFF01] text-[#121313] font-bold text-center cursor-pointer capitalize ">{buttonText}</div>
            </Link>
        </div>
    );
}
 
export default ActionButton;