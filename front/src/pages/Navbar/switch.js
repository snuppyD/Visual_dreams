import React, { useEffect, useState } from 'react'
import './Switch.css'

export const Switch = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }

  useEffect(() => {
    if (new Date().getMinutes() < 18) {
      setIsToggled(!isToggled)
      toggleTheme(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  )
}
