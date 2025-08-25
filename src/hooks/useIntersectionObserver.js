// src/hooks/useIntersectionObserver.js
import { useEffect, useState } from "react"

export default function useIntersectionObserver(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = ref.current
    if (!target) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [ref, options])

  return isVisible
}
