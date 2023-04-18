import { useEffect } from "react";

const TransactionPin = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll("input");
        const firstInput = inputs[0] as HTMLInputElement;
        firstInput.focus();
        
        inputs.forEach(input => {
            const nextInput = input.nextElementSibling as HTMLInputElement;
            const previousInput = input.previousElementSibling as HTMLInputElement;
            input.addEventListener('keyup', (event) => {
                if (input.value.length > 1) {
                    input.value = input.value.slice(0, 1);
                }
                if (input.value !== "") {
                    nextInput.focus();
                }
            });
            input.addEventListener('keyup', (event) => {
                if (event.key === "Backspace" && input.value === "") {
                    previousInput.focus();
                }
            });
        });
    })

    return ( 
        <div>
            <div className="w-full grid grid-cols-4 gap-x-7 ">
                <input type="number" pattern="[0-9]*" max="9"
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" pattern="[0-9]*" max="9"
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" pattern="[0-9]*" max="9"
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
                <input type="number" pattern="[0-9]*" max={9}
                    className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                    text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                    placeholder="."
                />
            </div>
        </div>
    );
}
 
export default TransactionPin;                       