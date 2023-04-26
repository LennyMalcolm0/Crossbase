import React, { ChangeEvent, useEffect } from "react";
interface Props {
    label?: string;
    inputType: string;
    inputHeight?: string;
    textBeforePlaceholder?: string | number;
    imageBeforePlaceholderSource?: string;
    placeholder?: string;
    filterItemsClassName?: string;
    passwordCharacterFilter?: boolean;
}
const Inputs = ({label, inputType, inputHeight, textBeforePlaceholder, imageBeforePlaceholderSource, placeholder, filterItemsClassName, passwordCharacterFilter}: Props) => {
    useEffect(() => {
        const InputField = document.querySelector("input") as HTMLInputElement,
        searchItems = document.querySelectorAll(`${filterItemsClassName}`);

        InputField.addEventListener("input", () => {
            const InputFieldContent = InputField.value;

            searchItems.forEach(searchItem => {
                const searchItemDisplay = searchItem as HTMLElement;
                if (InputFieldContent !== "" && searchItem.textContent && searchItem.textContent.toLowerCase().indexOf(InputFieldContent.toLowerCase())) {
                    searchItemDisplay.style.display = "none"
                } else {
                    searchItemDisplay.style.display = "flex"
                }
            })
        });
    });

    const viewPassword = (event: React.MouseEvent<HTMLElement>) => {
        const eye = event.target as HTMLElement;
        if (eye && eye.parentElement) {
            const passwordInput = eye.parentElement.querySelector("input[type='password']") as HTMLInputElement;
            
            eye.addEventListener("click", () => {
                if (!passwordInput) return;

                passwordInput.type = passwordInput.type === "password" ? "text" : "password";

                if (passwordInput.type === "password") {
                    // passwordInput.style.fontSize = "40px";
                    passwordInput.classList.add("font-bold");

                    eye.classList.remove("fa-eye-slash");
                    eye.classList.add("fa-eye");
                } else {
                    // passwordInput.style.fontSize = "16px";
                    passwordInput.classList.remove("font-bold");

                    eye.classList.add("fa-eye-slash");
                    eye.classList.remove("fa-eye");
                }
            })
        }
    };

    const eligibleCharacters: {type: RegExp, index: number}[] = [
        {type: /.{8,}/, index: 0},
        {type: /[a-z]/, index: 1},
        {type: /[A-Z]/, index: 2},
        {type: /[^A-Za-z0-9]/, index: 3},
        {type: /[0-9]/, index: 4},
    ];
    
    const checkPasswordCharacters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const requiredCharacters = document.querySelectorAll("li") as NodeListOf<HTMLElement>;
        const input = e.target as HTMLInputElement;

        eligibleCharacters.forEach(character => {
            const validCharacter = character.type.test(input.value);
            const requirementIcon = requiredCharacters[character.index].firstElementChild as HTMLElement;

            if (validCharacter) {
                requiredCharacters[character.index].classList.add("valid-password-character");

                requirementIcon.classList.remove("fa-circle");
                requirementIcon.classList.add("fa-check");
            } else {
                requiredCharacters[character.index].classList.remove("valid-password-character");
                
                requirementIcon.classList.remove("fa-check");
                requirementIcon.classList.add("fa-circle");
            }
        })
    };
    function nothing() {};

    return ( 
        <div className="mb-[12px] ">
            {label ? <label className="text-[12px] text-12 text-[#D9D9D9] ">{label}</label> : <></>}
            <div className="relative">
                <input type={inputType.toLowerCase()} 
                    className={`w-full h-[48px] px-[15px] leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                        placeholder:text-[14px] placeholder:font-normal text-14 placeholder:opacity-50 placeholder:absolute placeholder:mt-[12px] focus:outline-none 
                        ${inputHeight ? `h-[${inputHeight}]` : ""} ${textBeforePlaceholder ? "pl-[60px]" : ""} 
                        ${imageBeforePlaceholderSource ? "pl-[45px]" : ""} ${inputType.toLowerCase() === "password" ? "text font-bold" : ""}
                    `} 
                    placeholder={placeholder}
                    onChange={passwordCharacterFilter ? (e) => checkPasswordCharacters(e) : nothing}
                />

                {textBeforePlaceholder || imageBeforePlaceholderSource ? 
                    textBeforePlaceholder && !imageBeforePlaceholderSource ?
                        <div className="absolute top-0 left-[20px] text-[14px] text-14 leading-[48px] font-semibold uppercase  ">
                            {textBeforePlaceholder}
                        </div> :
                        <div className="absolute top-0 h-full flex items-center left-[20px] ">
                            <img src={imageBeforePlaceholderSource} alt="" />
                        </div> 
                        :
                    <></>
                }

                {inputType.toLowerCase() === "password" ? 
                    <i className="fas fa-eye view-password absolute top-0 right-[20px] text-[#D9D9D9] leading-[48px] cursor-pointer " 
                        onMouseOver={(event) => viewPassword(event)}>
                    </i>
                    : <></>
                }
            </div>
            
            {passwordCharacterFilter ?
                <ul className="must-have mt-[5px] text-[12px] text-[#D9D9D9] ">
                    <li className="flex items-center ">
                        <i className="fa-solid fa-circle text-[5px] mr-[5px] "></i>
                        <span>Must be 8 chracters long.</span>
                    </li>
                    <li className="flex items-center ">
                        <i className="fa-solid fa-circle text-[5px] mr-[5px] "></i>
                        <span>Must contain 1 small letter (a...z).</span>
                    </li>
                    <li className="flex items-center ">
                        <i className="fa-solid fa-circle text-[5px] mr-[5px] "></i>
                        <span>Must contain 1 capital letter (A...Z).</span>
                    </li>
                    <li className="flex items-center ">
                        <i className="fa-solid fa-circle text-[5px] mr-[5px] "></i>
                        <span>Must contain 1 special character (!...&).</span>
                    </li>
                    <li className="flex items-center ">
                        <i className="fa-solid fa-circle text-[5px] mr-[5px] "></i>
                        <span>Must contain 1 number (0...9) </span>
                    </li>
                </ul> :
                <></>
            }
        </div>
    );
}
 
export default Inputs;