import './Components.css'
interface Props {
    label: string;
    inputType: string;
    placeholder?: string;
}
const LoginInput = ({label, placeholder, inputType}: Props) => {
    return ( 
        <div className="mb-[8px]">
            <label className="text-[12px] text-[#D9D9D9] ">{label}</label>
            <input type={inputType} 
                className="w-full h-[48px] px-[20px] leading-[48px] rounded-[10px] bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] placeholder:text-[14px] placeholder:opacity-50 " 
                placeholder={placeholder}
            />
        </div>
     );
}
 
export default LoginInput;