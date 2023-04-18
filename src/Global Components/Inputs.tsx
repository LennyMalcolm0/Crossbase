import { useEffect } from "react";
interface Props {
    label?: string;
    inputType: string;
    inputHeight?: string;
    textBeforePlaceholder?: string | number;
    imageBeforePlaceholderSource?: string;
    placeholder?: string;
    filterItemsClassName?: string;
}
const Inputs = ({label, inputType, inputHeight, textBeforePlaceholder, imageBeforePlaceholderSource, placeholder, filterItemsClassName}: Props) => {
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
        })
    });

    function viewPassword(event: React.MouseEvent<HTMLElement>) {
        const eye = event.target as HTMLElement;
        if (eye && eye.parentElement) {
            const passwordInput = eye.parentElement.querySelector("input[type='password']") as HTMLInputElement;
            
            eye.addEventListener("click", () => {
                if (!passwordInput) return;
                passwordInput.type = passwordInput.type === "password" ? "text" : "password";
                if (passwordInput.type === "password") {
                    passwordInput.style.fontSize = "40px";

                    eye.classList.remove("fa-eye-slash");
                    eye.classList.add("fa-eye");
                } else {
                    passwordInput.style.fontSize = "16px";

                    eye.classList.add("fa-eye-slash");
                    eye.classList.remove("fa-eye");
                }
            })
        }
    }

    return ( 
        <div className="mb-[12px] ">
            {label ? <label className="text-[12px] text-12 text-[#D9D9D9] ">{label}</label> : <></>}
            <div className="relative">
                <input type={inputType.toLowerCase()} 
                    className={`w-full h-[48px] ${inputHeight ? `h-[${inputHeight}]` : ""} 
                    px-[20px] ${textBeforePlaceholder ? "pl-[60px]" : ""} ${imageBeforePlaceholderSource ? "pl-[45px]" : ""} 
                    ${inputType.toLowerCase() === "password" ? "text-[40px]" : ""}
                    leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] placeholder:text-[14px] text-14 
                    placeholder:opacity-50 placeholder:absolute placeholder:mt-[12px] focus:outline-none `} 
                    placeholder={placeholder}
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
                    <i className="fas fa-eye absolute top-0 right-[20px] text-[#D9D9D9] leading-[48px] cursor-pointer " 
                    onMouseOver={(event) => viewPassword(event)}></i>
                     : <></>
                }
            </div>
        </div>
    );
}
 
export default Inputs;