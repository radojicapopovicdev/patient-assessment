import Link from 'next/link'
import { LatestAssessments } from '~/app/_components/latest-assessments'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-4 flex w-full max-w-3xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Latest Assessments</h1>
          <Button variant="outline" asChild>
            <Link href="/assessment">New Assessment</Link>
          </Button>
        </div>

        <LatestAssessments />
      </div>
    </div>
  )
}
