import { useEffect } from "react"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000) // 3 seconds delay
    return () => clearTimeout(timer)
  }, [onComplete])

  return null
}

