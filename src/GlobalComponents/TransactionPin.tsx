import { useEffect, useRef, useState } from "react";
import { inputFocused } from "../utils/GlobalFunctionsAndData";

const TransactionPin = () => {
    const numberOfInputs = [1, 2, 3, 4];

    useEffect(() => {
        const inputs = document.querySelectorAll("input");
        const firstInput = inputs[0] as HTMLInputElement;
        firstInput.focus();
        
        inputs.forEach(input => {
            const nextInput = input.nextElementSibling as HTMLInputElement;
            const previousInput = input.previousElementSibling as HTMLInputElement;
            const buttonToNextPage = document.querySelector("a") as HTMLElement;

            input.addEventListener('input', (event) => {
                if (input.value.length > 1) {
                    input.value = input.value.slice(0, 1);
                }
                if (input.value !== "") {
                    nextInput?.focus();
                }
            });

            input.addEventListener('keyup', (event) => {
                if (input.value !== "") return;
                if (event.key === "Backspace") {
                    previousInput?.focus();
                }
                
                // Navigate to next page once all values are entered.
                // inputs.forEach(input => {
                //     const allValuesEntered = Array.from(inputs).every(input => {
                //         return input.value !== "";
                //     });
                //     if (allValuesEntered) buttonToNextPage.click();
                // })
            });
        });
    }, [])

    return ( 
        <div>
            <div className="w-full grid grid-cols-4 gap-x-7 ">
                {numberOfInputs.map((input, index) => (
                    <input key={index} type="number" pattern="[0-9]*" max="9"
                        className="py-[10px] rounded-[15px] text-center bg-[#1F1F1E] border border-[#D9D9D9] text-[#D9D9D9] 
                        text-[32px] font-medium placeholder:text-[50px] placeholder:relative placeholder:bottom-[8px] focus:outline-none " 
                        placeholder="."
                        onFocus={inputFocused}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default TransactionPin;                       