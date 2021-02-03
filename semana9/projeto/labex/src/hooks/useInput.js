import {useState} from 'react'

export default function useInput() {
    const [input, setInput] = useState("")

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    return [input, onChangeInput]
}