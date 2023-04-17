import { useEffect } from 'react';
import { Link } from 'react-router-dom'

interface Props {
    buttonText: string;
    link: string;
    inputValues?: string[];
}
const ActionButton = ({ buttonText, link, inputValues }: Props) => {
    // Use UseState
    // let validLink: string = "";
    // useEffect(() => {
    //     inputValues.forEach(inputValue => {
    //         if (inputValue !== "") {
    //             validLink = link;
    //         } else {
    //             validLink = "";
    //         }
    //     })
    // }, [inputValues])

    return ( 
        <div>
            <Link to={link} >
                <div className="w-full h-[48px] leading-[48px] rounded-[10px] bg-[#CCFF01] text-[#121313] font-bold text-center cursor-pointer capitalize ">{buttonText}</div>
            </Link>
        </div>
    );
}
 
export default ActionButton;