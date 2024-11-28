'use client'

import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Progress } from '~/components/ui/progress'
import { trpc } from '~/trpc/react'

type Option = {
  text: string
  level: number
}

type Question = {
  question: string
  options: Option[]
}

const questions: Question[] = [
  {
    question: 'How would you rate your overall physical health?',
    options: [
      { text: 'Excellent', level: 4 },
      { text: 'Good', level: 3 },
      { text: 'Fair', level: 2 },
      { text: 'Poor', level: 1 },
    ],
  },
  {
    question: 'How often do you experience feelings of anxiety?',
    options: [
      { text: 'Never', level: 4 },
      { text: 'Rarely', level: 3 },
      { text: 'Sometimes', level: 2 },
      { text: 'Often', level: 1 },
    ],
  },
  {
    question: 'How would you describe the quality of your sleep?',
    options: [
      { text: 'Excellent', level: 4 },
      { text: 'Good', level: 3 },
      { text: 'Fair', level: 2 },
      { text: 'Poor', level: 1 },
    ],
  },
  {
    question: 'How satisfied are you with your current emotional well-being?',
    options: [
      { text: 'Very satisfied', level: 4 },
      { text: 'Satisfied', level: 3 },
      { text: 'Neutral', level: 2 },
      { text: 'Dissatisfied', level: 1 },
    ],
  },
]

export function Questions() {
  const [question, setQuestion] = useState<number | null>(0)
  const [score, setScore] = useState(0)

  const { mutateAsync, isPending } = trpc.assessment.create.useMutation()

  const searchParams = useSearchParams()
  const router = useRouter()

  const patient = searchParams.get('patient')
  const type = searchParams.get('type')

  function handleChose(level: number) {
    setQuestion((q) => {
      const exists = questions[q! + 1]
      return exists ? q! + 1 : null
    })

    setScore((s) => s + level)
  }

  async function handleCreate() {
    await mutateAsync({
      type: type!,
      patientName: patient!,
      date: new Date(),
      finalScore: score * questions.length,
      questions: [],
    })

    router.push('/')
  }

  if (question === null || question === undefined) {
    return (
      <div className="flex flex-col items-center gap-6">
        <span className="font-bold text-4xl">{score * questions.length}%</span>

        <Button className="w-20" onClick={handleCreate}>
          {isPending ? <Loader2 className="animate-spin" /> : 'Submit'}
        </Button>
      </div>
    )
  }

  const { question: text, options } = questions[question]!

  return (
    <div className="mx-4 flex w-full max-w-3xl flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="font-bold">
          {question + 1} / {questions.length}
        </span>
        <Progress
          value={(question / questions.length) * 100}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">{text}</h2>

        <div className="flex gap-1.5">
          {options.map((o) => (
            <Button key={o.text} onClick={() => handleChose(o.level)}>
              {o.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
