import { DIAGNOSIS_QUESTION_COUNT } from "./questions";

/** 選択肢インデックス 0〜4 に対応（非常に明確→5 … ほとんどない→1） */
export const CHOICE_SCORES = [5, 4, 3, 2, 1] as const;

export type DiagnosisGrade = "A" | "B" | "C" | "D";

export type DiagnosisComputedResult = {
  totalPoints: number;
  maxPoints: number;
  percent: number;
  grade: DiagnosisGrade;
};

export function gradeFromPercent(percent: number): DiagnosisGrade {
  if (percent >= 80) return "A";
  if (percent >= 60) return "B";
  if (percent >= 40) return "C";
  return "D";
}

/** 各要素は選択肢のインデックス（0〜4） */
export function computeDiagnosisResult(answerIndices: number[]): DiagnosisComputedResult {
  if (answerIndices.length !== DIAGNOSIS_QUESTION_COUNT) {
    throw new Error(`Invalid answer count: expected ${DIAGNOSIS_QUESTION_COUNT}`);
  }
  let totalPoints = 0;
  for (const idx of answerIndices) {
    if (idx < 0 || idx >= CHOICE_SCORES.length || !Number.isInteger(idx)) {
      throw new Error(`Invalid choice index: ${idx}`);
    }
    totalPoints += CHOICE_SCORES[idx];
  }
  const maxPoints = DIAGNOSIS_QUESTION_COUNT * 5;
  const percent = Math.round((totalPoints / maxPoints) * 100);
  return {
    totalPoints,
    maxPoints,
    percent,
    grade: gradeFromPercent(percent),
  };
}

export const DIAGNOSIS_STORAGE_KEY = "decision-ai-diagnosis-answers";

export type DiagnosisStoredPayload = {
  answers: number[];
};
