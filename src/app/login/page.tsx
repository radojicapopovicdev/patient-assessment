'use client'

import { login } from '~/app/login/actions'
import { Button } from '~/components/ui/button'

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={() => login()}>Login with Discord</Button>
    </div>
  )
}
