import { useState, useEffect } from 'react'
import { Check, Heading } from '@glrodasz/components'

const setDarkMode = ({ setIsChecked }) => {
  document.querySelector('body').dataset.colorScheme = 'dark'
  localStorage.setItem('prefers-color-scheme', 'dark')
  setIsChecked(true)
}

const setLightMode = ({ setIsChecked }) => {
  document.querySelector('body').dataset.colorScheme = 'light'
  localStorage.setItem('prefers-color-scheme', 'light')
  setIsChecked(false)
}

const initialColorScheme = ({ setIsChecked }) => {
  const localStorageColorScheme = localStorage.getItem('prefers-color-scheme')

  // TODO: Support prefers color schema fallback
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (localStorageColorScheme != null) {
    localStorageColorScheme === 'dark'
      ? setDarkMode({ setIsChecked })
      : setLightMode({ setIsChecked })
  } else {
    // TODO: Move to a function
    // Load from Media Query
    const isDarkMode = darkModeMediaQuery?.matches

    isDarkMode ? setDarkMode({ setIsChecked }) : setLightMode({ setIsChecked })
  }

  // TODO: Move to a function
  // Listen Media Query Changes
  darkModeMediaQuery.addListener((event) => {
    event.matches
      ? setDarkMode({ setIsChecked })
      : setLightMode({ setIsChecked })
  })
}

const handleClick = ({ isChecked, setIsChecked }) => () => {
  isChecked ? setLightMode({ setIsChecked }) : setDarkMode({ setIsChecked })
}

const ToggleColorScheme = () => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    initialColorScheme({ setIsChecked })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 150,
      }}
      onClick={handleClick({ isChecked, setIsChecked })}
    >
      <Check isChecked={isChecked} /> <Heading>Dark Mode</Heading>
    </div>
  )
}

export default ToggleColorScheme
