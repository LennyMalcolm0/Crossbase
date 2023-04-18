import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

interface Props {
    buttonText: string;
    link: string;
    inputValues?: string[];
}
const ActionButton = ({ buttonText, link, inputValues }: Props) => {
    const [validLink, setValidLink] = useState<boolean>(false);
    useEffect(() => {
        const inputFields = document.querySelectorAll("input");
        function checkInputs() {
            const allFieldsValid = Array.from(inputFields).every(InputField => {
                return InputField.value !== "";
            });
            setValidLink(allFieldsValid);
        }
        inputFields.forEach(inputField => {
            inputField.addEventListener("keyup", checkInputs)
            inputField.addEventListener("change", checkInputs)
        })
        
        // Clean up event listeners on unmount
        return () => {
            inputFields.forEach((inputField) => {
            inputField.removeEventListener("keyup", checkInputs);
            inputField.removeEventListener("change", checkInputs); // remove change event
            });
        };
    }, [])

    return ( 
        <div>
            <Link to={validLink ? link : ""} >
                <div className={`w-full h-[48px] leading-[48px] rounded-[10px] bg-[#CCFF01] text-[#121313] font-bold text-center 
                cursor-pointer capitalize ${validLink ? "opacity-100" : "opacity-50"} `}>{buttonText}</div>
            </Link>
        </div>
    );
}
 
export default ActionButton;