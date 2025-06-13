"use client"

import { useEffect } from "react"

export function AnimationFix() {
  useEffect(() => {
    // Forzar un reflow para asegurar que las animaciones se apliquen correctamente
    document.body.classList.add("animation-ready")

    // Asegurarse de que las clases de animación estén presentes
    const styleEl = document.createElement("style")
    styleEl.textContent = `
      /* Animaciones básicas */
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      
      /* Animaciones de scroll */
      .scroll-animate,
      .scroll-animate-child {
        opacity: 0;
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .is-visible .scroll-animate-child,
      .scroll-animate.is-visible {
        opacity: 1;
      }
      
      /* Animación fadeInUp para scroll */
      .scroll-animate-fadeInUp,
      .scroll-animate-fadeInUp-child {
        transform: translateY(30px);
      }
      
      .is-visible .scroll-animate-fadeInUp-child,
      .scroll-animate-fadeInUp.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Animación fadeIn para scroll */
      .is-visible .scroll-animate-fadeIn-child,
      .scroll-animate-fadeIn.is-visible {
        opacity: 1;
      }
      
      /* Keyframes para las animaciones */
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideBehind {
        0% { transform: translateX(-100%); opacity: 0; }
        20% { opacity: 0.5; }
        80% { opacity: 0.5; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      
      /* Estilos para la barra detrás del logo */
      .logo-shine-container {
        position: relative;
        display: inline-block;
        overflow: hidden;
      }
      
      .logo-shine-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          transparent 20%,
          rgba(255, 255, 255, 0.3) 40%,
          rgba(255, 255, 255, 0.3) 60%,
          transparent 80%
        );
        opacity: 0;
        animation: slideBehind 5s ease-in-out infinite;
        animation-delay: 2s;
        z-index: 0;
      }
      
      .logo-image-hero {
        position: relative;
        z-index: 1;
      }
    `
    document.head.appendChild(styleEl)

    return () => {
      document.body.classList.remove("animation-ready")
      if (styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl)
      }
    }
  }, [])

  return null
}
