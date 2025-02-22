import React from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface QuestionInputProps {
  questionNumber: number
  value: string
  onChange: (answer: string) => void
}
const options = ["A", "B", "C", "D"]

export default function QuestionInput({ questionNumber, value, onChange }: QuestionInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Question {questionNumber}</label>
      <div className="flex space-x-2">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "px-3 py-1 rounded",
              value === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300",
            )}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}
