'use server'

import { signIn } from '~/server/auth'

export async function login() {
  await signIn('discord', { redirectTo: '/' })
}
