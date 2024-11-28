import { PrismaClient } from '@prisma/client'
import { subHours } from 'date-fns'

const prisma = new PrismaClient()
const now = new Date()

await prisma.assessment.createMany({
  data: [
    {
      patientName: 'Ethan Brooks',
      date: subHours(now, 2),
      type: 'Cognitive Status',
      finalScore: 86,
    },
    {
      patientName: 'Liam Anderson',
      date: subHours(now, 4),
      type: 'Behavioral Insight',
      finalScore: 67,
    },
    {
      patientName: 'Aiden Clark',
      date: subHours(now, 8),
      type: 'Physical Well-being',
      finalScore: 62,
    },
  ],
})
