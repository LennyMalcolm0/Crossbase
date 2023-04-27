import React, { useState } from "react";

interface Props {
    label: string;
    placeholder: string;
    optionsList: string[];
    optionListSearchable?: boolean;
}
const SelectItems = ({label, placeholder, optionsList, optionListSearchable}: Props) => {
    const [ dropdownOpened, setDropdownOpened ] = useState<boolean>(false);
    const [ invalidValue, setInvalidValue ] = useState<boolean>(true);

    const openDropdown = () => {
        setDropdownOpened(dropdownOpened === true ? false : true);
    }

    const setValue = (e: React.MouseEvent<HTMLElement>) => {
        setInvalidValue(false);
        const optionValue = e.target as HTMLElement;
        const currentValue = document.querySelector(".current-value") as HTMLElement;

        currentValue.textContent = optionValue.textContent;
        setDropdownOpened(false);
    }

    return (  
        <div className="text-[#D9D9D9] ">
            <label className="text-[12px] text-12 ">{label}</label>
            <div className="relative">
                <div onClick={openDropdown} className="w-full h-[48px] px-[15px] mb-[12px] flex items-center justify-between leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] ">
                    {invalidValue ? <span className="text-[14px] text-14 opacity-50">{placeholder}</span> : <></>}
                    <span className="current-value "></span>
                    <i className={`fa-solid fa-chevron-${dropdownOpened ? "up" : "down"}`}></i>
                </div>
                {dropdownOpened ?
                    <div className="absolute top-[48px] w-full max-h-[192px] bg-[#1F1F1E] rounded-[10px] mt-[10px] overflow-auto overflow-x-hidden ">
                        
                        {optionsList.map((option, index) => (
                            <div key={index} onClick={setValue} className="w-full p-[15px] bg-gray-800 cursor-pointer ">{option}</div>
                        ))}
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
}
 
export default SelectItems;