import { useEffect, useState } from "react"
import { disableDarkMode, enableDarkMode } from "./theme"

const ToggleTheme = () => {
   const [isToggle, setIsToggle] = useState<boolean>(false)

   useEffect(() => {
      const theme = localStorage.getItem('theme')
      setIsToggle(theme === 'dark')
   }, [])

   const toggleValidation = () => {
      isToggle ? disableDarkMode() : enableDarkMode()

      setIsToggle(!isToggle)
   }
   return (
      <button
         onClick={toggleValidation}
         className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all"
      >
         {isToggle ? '🌙' : '🌞'}
      </button>
   )
}

export default ToggleTheme