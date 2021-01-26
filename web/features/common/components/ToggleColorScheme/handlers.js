import { persistColorScheme } from './helpers'

export const handleClick = ({ isDarkMode, setIsDarkMode }) => () => {
  persistColorScheme({ isDarkMode: !isDarkMode, setIsDarkMode })
}
