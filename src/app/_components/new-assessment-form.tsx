'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { SheetClose, SheetFooter } from '~/components/ui/sheet'

export function NewAssessmentForm() {
  const [patient, setPatient] = useState('')
  const [type, setType] = useState('')

  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Patient
          </Label>

          <Input
            id="name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            placeholder="Pedro Duarte"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="assessment" className="text-right">
            Assessment
          </Label>

          <Input
            id="assessment"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Cognitive status"
            className="col-span-3"
          />
        </div>
      </div>

      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit" asChild>
            <Link href={{ pathname: '/assessment', query: { patient, type } }}>
              Go to Assessment
            </Link>
          </Button>
        </SheetClose>
      </SheetFooter>
    </>
  )
}
