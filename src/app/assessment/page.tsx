import { redirect } from 'next/navigation'
import { Questions } from '~/app/_components/questions'
import { auth } from '~/server/auth'

export default async function Assessment() {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Questions />
    </div>
  )
}
