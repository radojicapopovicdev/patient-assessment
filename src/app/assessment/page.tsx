import { Questions } from '~/app/_components/questions'
import { auth } from '~/server/auth'

export default async function Assessment() {
  await auth()

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Questions />
    </div>
  )
}
