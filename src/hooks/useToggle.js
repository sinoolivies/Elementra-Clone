// src/hooks/useToggle.js
import { useState, useCallback } from "react"

export default function useToggle(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, open, close }
}
