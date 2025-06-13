"use client"

import { useEffect } from "react"

export function ScrollAnimationFix() {
  useEffect(() => {
    // Función para inicializar los observadores de scroll
    function initScrollObservers() {
      // Seleccionar todos los elementos que deberían animarse al hacer scroll
      const animatedElements = document.querySelectorAll(".scroll-animate")

      if (animatedElements.length === 0) {
        // Si no se encuentran elementos, intentar de nuevo después de un breve retraso
        setTimeout(initScrollObservers, 500)
        return
      }

      // Crear un nuevo Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Cuando el elemento es visible, añadir la clase is-visible
              entry.target.classList.add("is-visible")

              // Opcional: desconectar el observer después de la primera aparición
              // para elementos que solo deben animarse una vez
              observer.unobserve(entry.target)
            }
          })
        },
        {
          // Configuración del observer
          threshold: 0.1, // El elemento se considera visible cuando el 10% está en el viewport
          rootMargin: "0px 0px -10% 0px", // Activar un poco antes de que el elemento entre completamente
        },
      )

      // Observar cada elemento
      animatedElements.forEach((element) => {
        observer.observe(element)
      })

      return observer
    }

    // Inicializar los observadores después de un breve retraso para asegurar que el DOM esté listo
    const timeoutId = setTimeout(() => {
      const observer = initScrollObservers()

      return () => {
        if (observer) {
          observer.disconnect()
        }
      }
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return null
}
