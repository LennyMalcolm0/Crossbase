interface Props {
    label?: string;
    inputType: string;
    textAfterPlaceholder?: string | number;
    imageAfterPlaceholderSource?: string;
    placeholder?: string;
}
const Inputs = ({label, inputType, textAfterPlaceholder, imageAfterPlaceholderSource, placeholder}: Props) => {
    return ( 
        <div className="mb-[8px] relative ">
            {label ? <label className="text-[12px] text-[#D9D9D9] ">{label}</label> : <></>}
            <input type={inputType} 
                className={`w-full h-[48px] px-[20px] ${textAfterPlaceholder ? "pl-[60px]" : ""} ${imageAfterPlaceholderSource ? "pl-[45px]" : ""} leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                placeholder:text-[14px] placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-[#CCFF01] `} 
                placeholder={placeholder}
            />
            {textAfterPlaceholder || imageAfterPlaceholderSource ? 
                textAfterPlaceholder && !imageAfterPlaceholderSource ?
                    <div className="absolute top-0 left-[20px] text-[14px] leading-[50px] font-semibold uppercase  ">
                        {textAfterPlaceholder}
                    </div> :
                    <div className="absolute top-0 h-full flex items-center left-[20px] ">
                        <img src={imageAfterPlaceholderSource} alt="" />
                    </div> 
                    :
                <></>
            }
        </div>
    );
}
 
export default Inputs;