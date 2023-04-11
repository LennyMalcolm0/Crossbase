interface Props {
    label?: string;
    inputType: string;
    textBeforePlaceholder?: string | number;
    imageBeforePlaceholderSource?: string;
    placeholder?: string;
}
const Inputs = ({label, inputType, textBeforePlaceholder, imageBeforePlaceholderSource, placeholder}: Props) => {
    return ( 
        <div className="mb-[8px] ">
            {label ? <label className="text-[12px] text-[#D9D9D9] ">{label}</label> : <></>}
            <div className="relative">
                <input type={inputType} 
                    className={`w-full h-[48px] px-[20px] ${textBeforePlaceholder ? "pl-[60px]" : ""} ${imageBeforePlaceholderSource ? "pl-[45px]" : ""} leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    placeholder:text-[14px] placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-[#CCFF01] `} 
                    placeholder={placeholder}
                />
                {textBeforePlaceholder || imageBeforePlaceholderSource ? 
                    textBeforePlaceholder && !imageBeforePlaceholderSource ?
                        <div className="absolute top-0 left-[20px] text-[14px] leading-[48px] font-semibold uppercase  ">
                            {textBeforePlaceholder}
                        </div> :
                        <div className="absolute top-0 h-full flex items-center left-[20px] ">
                            <img src={imageBeforePlaceholderSource} alt="" />
                        </div> 
                        :
                    <></>
                }
            </div>
        </div>
    );
}
 
export default Inputs;