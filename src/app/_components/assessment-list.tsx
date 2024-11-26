import { api } from "~/trpc/server";

export async function AssessmentList() {
  const assessments = await api.assessment.getAll();

  return JSON.stringify(assessments, null, 2);
}
