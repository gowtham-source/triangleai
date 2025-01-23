import { Button } from "@/components/ui/button"

export default function SubmitButton({ onSubmit, disabled }: { onSubmit: () => void; disabled: boolean }) {
  return (
    <Button onClick={onSubmit} disabled={disabled} className="mt-4 w-full md:w-auto">
      Analyze Triangle
    </Button>
  )
}

