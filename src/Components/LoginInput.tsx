interface liProps {
    label: string;
    placeholder: string;
}
const LoginInput = ({label, placeholder}: liProps) => {
    return ( 
        <div>
            <label className="text-[12px] text-[#D9D9D9] ">{label}</label>
            <input type="text" 
                className="w-full h-[48px] rounded-[10px] border border-[#D9D9D9] text-[#D9D9D9] placeholder:text-[14px] placeholder:opacity-50 " 
                placeholder={placeholder}
            />
        </div>
     );
}
 
export default LoginInput;