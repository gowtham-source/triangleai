"use client"

import { useState, useEffect } from "react"
import StartButton from "./components/StartButton"
import ImageInput from "./components/ImageInput"
import SubmitButton from "./components/SubmitButton"
import OutputDisplay from "./components/OutputDisplay"
import Header from "./components/Header"
import LoadingSpinner from "./components/LoadingSpinner"

interface AnalysisResult {
  angles: { A: number; B: number; C: number }
  distances: { "A-B": number; "B-C": number; "C-A": number }
  classification: string
  area: number
  perimeter: number
  processed_image: string
  explanation: string
}

export default function Home() {
  const [step, setStep] = useState<"loading" | "start" | "input" | "analyzing" | "output">("loading")
  const [image, setImage] = useState<File | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setStep("start"), 3500) // 3.5 seconds delay
    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => setStep("input")
  const handleImageSelect = (file: File) => setImage(file)

  const handleSubmit = async () => {
    if (!image) return

    setStep("analyzing")
    const formData = new FormData()
    formData.append("file", image)

    try {
      const response = await fetch("https://magictriangle.ip-145-223-20-160.swiftwave.xyz:443/analyze-triangle", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Network response was not ok")

      const result: AnalysisResult = await response.json()
      setAnalysisResult(result)
      setStep("output")
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred while analyzing the image.")
      setStep("input")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-white text-black">
      <Header />
      {step !== "loading" && (
        <div className="mt-24 md:mt-32">
          {step === "start" && <StartButton onStart={handleStart} />}
          {step === "input" && (
            <>
              <ImageInput onImageSelect={handleImageSelect} />
              <SubmitButton onSubmit={handleSubmit} disabled={!image} />
            </>
          )}
          {step === "analyzing" && <LoadingSpinner />}
          {step === "output" && analysisResult && <OutputDisplay result={analysisResult} />}
        </div>
      )}
    </main>
  )
}

