import { useState } from "react"
const useCount = (initialValue, maxValue) => {

    const [result, setResultado] = useState(initialValue)

    const makeCount = (operation) => {
        if (operation === '+' && result < maxValue) {
            setResultado(result + 1)
        } else if (operation === '-' && result > 1) {
            setResultado(result - 1)
        }
    }
    return [result, makeCount]
}

export default useCount