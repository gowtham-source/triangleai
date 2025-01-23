"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Header() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 3000) // 3 seconds delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ y: "50vh", x: "-50%", left: "50%" }}
      animate={isAnimated ? { y: 0, x: 0, left: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 left-0 z-10"
    >
      <Card className="w-full border-none bg-white">
        <CardContent className="p-4 text-center border-none text-black">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Triangle AI</h1>
          <p className="text-sm md:text-xl">Hi, I'm Prajeet from 6th Std G section Sri Krish International. This is my project Triangle AI which is a Ai powered tool created by me.</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

