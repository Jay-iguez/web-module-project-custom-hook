import { useState } from 'react'

export default function useDarkMode(InitialBoolean) {
    const [mode, setMode] = useState(InitialBoolean)

    const changeHandler = () => {
        setMode(!mode)
    }

    return [mode, changeHandler]
}