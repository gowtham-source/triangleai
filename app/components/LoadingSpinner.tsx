import { Loader2 } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
      <p className="mt-2 text-sm text-gray-500">Analyzing triangle...</p>
    </div>
  )
}

