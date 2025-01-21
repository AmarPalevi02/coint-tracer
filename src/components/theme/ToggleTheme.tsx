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
         className="p w-12 flex items-center justify-between rounded-full bg-gray-200 shadow-dark transition-all duration-300"
      >
         <span
            className={`transform transition-all duration-300 ${isToggle ? "translate-x-5" : "translate-x-0"
               }`}
         >
            {isToggle ? "🌙" : "🌞"}
         </span>
      </button>
   )
}

export default ToggleTheme