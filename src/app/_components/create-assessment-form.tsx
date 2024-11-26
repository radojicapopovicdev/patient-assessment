/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { z } from "zod";
import { api } from "~/trpc/react";

const createAssessmentFormSchema = z.object({
  type: z
    .string({ required_error: "Enter the type of your assessment." })
    .trim()
    .min(1),
  patientName: z
    .string({ required_error: "Enter your patient name." })
    .trim()
    .min(1, "Enter your patient name."),
  date: z.date().max(new Date()),
  finalScore: z
    .number({ required_error: "Enter the assessment final score." })
    .min(0)
    .max(100),
  questions: z.array(
    z.object({
      question: z
        .string({ required_error: "Enter the question." })
        .trim()
        .min(1, "Enter the question."),
      answer: z
        .string({ required_error: "Enter the answer." })
        .trim()
        .min(1, "Enter the answer."),
    }),
  ),
});

type CreateAssessmentFormFields = z.infer<typeof createAssessmentFormSchema>;

export function CreateAssessmentForm() {
  const { mutateAsync: createAssessment, isPending } =
    api.assessment.create.useMutation();

  return null;
}
