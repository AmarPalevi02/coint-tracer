import { useEffect } from "react"
import { checkThemePreference } from "./components/theme/theme"
import ToggleTheme from "./components/theme/ToggleTheme"
import Layout from "./pages/Layout"

const App = () => {
  useEffect(() => {
    checkThemePreference()
  }, [])
  return (
    <Layout />
  ) 
}

export default App