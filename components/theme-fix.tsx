"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeFix() {
  const { setTheme, theme, systemTheme } = useTheme()

  useEffect(() => {
    // Verificar si el tema está correctamente aplicado
    const isDarkMode = document.documentElement.classList.contains("dark")
    const shouldBeDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

    // Si hay una discrepancia, forzar el tema correcto
    if (isDarkMode !== shouldBeDark) {
      setTheme(shouldBeDark ? "dark" : "light")
    }

    // Añadir una clase para indicar que el tema está listo
    document.documentElement.classList.add("theme-ready")

    // Verificar periódicamente que el tema siga siendo correcto
    const interval = setInterval(() => {
      const currentIsDark = document.documentElement.classList.contains("dark")
      const currentShouldBeDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

      if (currentIsDark !== currentShouldBeDark) {
        setTheme(currentShouldBeDark ? "dark" : "light")
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [theme, systemTheme, setTheme])

  return null
}
