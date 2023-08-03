import { useState } from "react"

export default function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(newValue: boolean) {
        setValue(newValue)
    }

    return [value, toggleValue]
};