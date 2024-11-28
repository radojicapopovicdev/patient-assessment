import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

/**
 * This is the assessment router of your server, which exposes two routes
 * (functions for tRPC):
 *
 * - create: which lets you create a assessment by providing its details.
 * - retrieve: which lets you retrieve all assessments:
 */
export const assessmentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        type: z.string().trim().min(1),
        patientName: z.string().min(1),
        date: z.date(),
        finalScore: z.number().min(0).max(100),
        questions: z.array(
          z.object({
            question: z.string().min(1),
            answer: z.string().min(1),
          }),
        ),
      }),
    )
    .mutation(
      async ({ ctx, input: { type, patientName, date, finalScore } }) => {
        await ctx.db.assessment.create({
          data: {
            type,
            patientName,
            date,
            finalScore,
          },
        })
      },
    ),
  listThreeLatest: protectedProcedure.query(async ({ ctx }) => {
    const assessments = await ctx.db.assessment.findMany({
      select: {
        id: true,
        type: true,
        patientName: true,
        date: true,
        finalScore: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 3,
    })

    return assessments
  }),
})
