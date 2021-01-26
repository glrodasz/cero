import { useState, useEffect } from 'react'
import { Check, Heading } from '@glrodasz/components'

import { handleClick } from './handlers'
import { loadAndListenColorScheme } from './helpers'

const ToggleColorScheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    loadAndListenColorScheme({ setIsDarkMode })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 150,
      }}
      onClick={handleClick({ isDarkMode, setIsDarkMode })}
    >
      <Check isChecked={isDarkMode} /> <Heading>Dark Mode</Heading>
    </div>
  )
}

export default ToggleColorScheme
