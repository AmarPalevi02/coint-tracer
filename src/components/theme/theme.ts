export const enableDarkMode = () => {
   if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
   }
}

export const disableDarkMode = () => {
   if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
   }
}

export const checkThemePreference = () => {
   if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
   }
}