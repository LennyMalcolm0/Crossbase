import { useEffect } from "react";

const TransactionPin = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.length > 1) {
                    input.value = input.value.slice(0, 1);
                }
            });
        });
    })

    return ( 
        <div>
            <div className="w-full grid grid-cols-4 gap-x-7 ">
                <input type="number" maxLength={1}
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" maxLength={1}
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" maxLength={1}
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" maxLength={1}
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
            </div>
        </div>
    );
}
 
export default TransactionPin;                       