export const persistColorScheme = ({ isDarkMode, setIsDarkMode }) => {
  const colorScheme = isDarkMode ? 'dark' : 'light'
  document.querySelector('body').dataset.colorScheme = colorScheme
  localStorage.setItem('prefers-color-scheme', colorScheme)
  setIsDarkMode(isDarkMode)
}

export const loadAndListenColorScheme = ({ setIsDarkMode }) => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkModeMediaQuery?.addListener((event) => {
    const isDarkMode = event.matches
    persistColorScheme({ isDarkMode, setIsDarkMode })
  })

  const localStorageColorScheme = localStorage.getItem('prefers-color-scheme')

  if (localStorageColorScheme) {
    const isDarkMode = localStorageColorScheme === 'dark'
    persistColorScheme({ isDarkMode, setIsDarkMode })
  } else {
    const isDarkMode = darkModeMediaQuery?.matches
    persistColorScheme({ isDarkMode, setIsDarkMode })
  }
}
