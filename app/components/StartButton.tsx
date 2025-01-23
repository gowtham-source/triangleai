import { Button } from "@/components/ui/button"

export default function StartButton({ onStart }: { onStart: () => void }) {
  return (
    <Button onClick={onStart} size="lg" className="w-full md:w-auto">
      Start
    </Button>
  )
}

