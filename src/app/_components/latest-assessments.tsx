import { formatDistanceToNow } from 'date-fns'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { auth } from '~/server/auth'
import { trpc } from '~/trpc/server'

export async function LatestAssessments() {
  const session = await auth()
  const assessments = await trpc.assessment.listThreeLatest()

  return (
    <ul className="flex flex-col gap-4">
      {assessments.map((assessment) => (
        <li key={assessment.id}>
          <Card>
            <CardHeader>
              <CardTitle>
                {assessment.patientName} |{' '}
                {formatDistanceToNow(assessment.date, { addSuffix: true })}
              </CardTitle>

              <CardDescription>
                This participant took the test {assessment.type} and got a final
                score of {assessment.finalScore.toNumber()}%
              </CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  )
}
