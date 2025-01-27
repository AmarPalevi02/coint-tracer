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
         className="w-12 flex items-center justify-between rounded-full bg-gray-200 transition-all duration-300 dark:bg-gray-400"
      >
         <span
            className={`transform transition-all duration-300 ${isToggle ? "translate-x-6" : "translate-x-0"
               }`}
         >
            {isToggle ? "🌙" : "🌞"}
         </span>
      </button>
   )
}

export default ToggleTheme