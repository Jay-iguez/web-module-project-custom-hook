import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [storage, setStorage] = useState(() => {
        const checkExist = window.localStorage.getItem(key)
        return checkExist ? JSON.parse(checkExist) : initialValue
    })

    const handleChange = (updatedValue) => {
        setStorage(updatedValue)
        window.localStorage.setItem(key, JSON.stringify(updatedValue))
    }

    return [storage, handleChange]
}