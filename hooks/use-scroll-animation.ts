"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  animationClass?: string // e.g., 'scroll-animate-fadeInUp'
}

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  const defaultOptions: Required<ScrollAnimationOptions> = {
    threshold: 0.1,
    triggerOnce: true,
    animationClass: "scroll-animate-fadeInUp", // Default animation class
    ...options,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (elementRef.current) {
            elementRef.current.classList.add("is-visible")
            // Optionally remove specific animation class if not needed after first trigger
            // Or handle 'triggerOnce' by disconnecting observer
          }
          if (defaultOptions.triggerOnce) {
            observer.disconnect()
          }
        } else {
          if (!defaultOptions.triggerOnce) {
            setIsVisible(false)
            if (elementRef.current) {
              elementRef.current.classList.remove("is-visible")
            }
          }
        }
      },
      { threshold: defaultOptions.threshold },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      // Add base animation class
      currentElement.classList.add("scroll-animate") // Base class for initial state (opacity 0)
      currentElement.classList.add(defaultOptions.animationClass) // Specific animation type
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [defaultOptions.threshold, defaultOptions.triggerOnce, defaultOptions.animationClass])

  return { ref: elementRef, isVisible }
}
