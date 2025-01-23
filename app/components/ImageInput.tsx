import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ImageInput({ onImageSelect }: { onImageSelect: (file: File) => void }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onImageSelect(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Card className="w-full max-w-[350px] bg-white">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="imageUpload" />
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <label htmlFor="imageUpload">Upload Image</label>
            </Button>
            <Button onClick={handleCameraCapture} variant="outline" className="w-full sm:w-auto">
              Capture Cam
            </Button>
          </div>
          {previewUrl && (
            <div className="mt-4">
              <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="max-w-full mx-auto" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </CardContent>
    </Card>
  )
}

