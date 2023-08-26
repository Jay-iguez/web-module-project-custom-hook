import useLocalStorage from "./useLocalStorage"

export default function useDarkMode(key, initialBoolean) {
    const [mode, setMode] = useLocalStorage(key, initialBoolean)

    const changeHandler = () => {
        setMode(!mode)
    }

    return [mode, changeHandler]
}