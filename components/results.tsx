import { cn } from "@/lib/utils"

interface ResultsProps {
  userAnswers: string[]
  correctAnswers: string[]
}

export default function Results({ userAnswers = [], correctAnswers = [] }: ResultsProps) {
  const score = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <p className="text-xl mb-4">
        Your score: {score} / {correctAnswers.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userAnswers.map((answer, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded",
              answer === correctAnswers[index] ? "bg-green-100" : "bg-red-100",
            )}
          >
            <p className="font-medium">Question {index + 1}</p>
            <p>Your answer: {answer || "Not answered"}</p>
            <p>Correct answer: {correctAnswers[index]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
