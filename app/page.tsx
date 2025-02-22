"use client"

// import { useState } from "react"
import QuestionInput from "@/components/question-input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { listeningAnswers, readingAnswers, READING_START_INDEX } from "../lib/mock-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const defaultUserAnswers = atomWithStorage(
  "user_answers",
  listeningAnswers.map(() => ""),
)

export default function Home() {
  const [userAnswers, setUserAnswers] = useAtom(defaultUserAnswers)
  // const [userAnswers, setUserAnswers] = useState(listeningAnswers.map(() => ""))

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...userAnswers]
    newAnswers[index] = answer
    setUserAnswers(newAnswers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">TOEIC Answer Checker</h1>

      <Tabs defaultValue="listening" className="w-full">
        <TabsList>
          <TabsTrigger value="listening">Listening Section</TabsTrigger>
          <TabsTrigger value="reading">Reading Section</TabsTrigger>
        </TabsList>
        <TabsContent value="listening">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mt-4 mb-5">
              <h1 className="text-xl font-semibold">Listening section</h1>
              <Button
                type="submit"
                className="font-bold py-2 px-4 rounded"
              >
                Check Answers
              </Button>
            </div>
            <div
              className={cn(
                "grid grid-flow-row",
                "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
                "gap-4 mb-6",
              )}
            >
              {listeningAnswers.map((_, index) => (
                <QuestionInput
                  key={index}
                  questionNumber={index + 1}
                  value={userAnswers[index]}
                  onChange={(answer) => handleAnswerChange(index, answer)}
                />
              ))}
            </div>
          </form>
        </TabsContent>
        <TabsContent value="reading">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mt-4 mb-5">
              <h1 className="text-xl font-semibold">Reading section</h1>
              <Button
                type="submit"
                className="font-bold py-2 px-4 rounded"
              >
                Check Answers
              </Button>
            </div>
            <div
              className={cn(
                "grid grid-flow-row",
                "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
                "gap-4 mb-6",
              )}
            >
              {readingAnswers.map((_, index) => (
                <QuestionInput
                  key={index}
                  questionNumber={READING_START_INDEX + index + 1}
                  value={userAnswers[READING_START_INDEX + index]}
                  onChange={(answer) => handleAnswerChange(READING_START_INDEX + index, answer)}
                />
              ))}
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </main>
  )
}
