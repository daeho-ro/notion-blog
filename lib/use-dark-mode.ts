import useDarkModeImpl from '@fisch0920/use-dark-mode'

const isServer = typeof window === 'undefined'

export function useDarkMode() {
  const darkMode = isServer
    ? { value: false, toggle: () => {} }
    : useDarkModeImpl(false, { classNameDark: 'dark-mode' })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
