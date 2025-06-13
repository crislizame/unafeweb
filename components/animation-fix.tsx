"use client"

import { useEffect } from "react"

export function AnimationFix() {
  useEffect(() => {
    // Forzar un reflow para asegurar que las animaciones se apliquen correctamente
    document.body.classList.add("animation-ready")

    // Asegurarse de que las clases de animación estén presentes
    const styleEl = document.createElement("style")
    styleEl.textContent = `
      .scroll-animate { opacity: 0; }
      .scroll-animate.is-visible { opacity: 1; }
      .scroll-animate-fadeInUp { transform: translateY(30px); }
      .scroll-animate-fadeInUp.is-visible { opacity: 1; transform: translateY(0); }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      
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
      
      .logo-shine-container { position: relative; display: inline-block; overflow: hidden; }
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
      .logo-image-hero { position: relative; z-index: 1; }
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
