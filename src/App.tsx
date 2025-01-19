import { useEffect } from "react"
import { checkThemePreference } from "./components/theme/theme"
import ToggleTheme from "./components/theme/ToggleTheme"

const App = () => {
  useEffect(() => {
    checkThemePreference()
  }, [])
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <ToggleTheme />
      <div className="p-4">
        <h1 className="text-xl">Welcome to the App!</h1>
      </div>
    </div>
  )
}

export default App