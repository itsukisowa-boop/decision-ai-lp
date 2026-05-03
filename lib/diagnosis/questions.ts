export const DIAGNOSIS_CHOICE_LABELS = [
  "非常に明確",
  "ある程度明確",
  "どちらでもない",
  "曖昧",
  "ほとんどない",
] as const;

export const DIAGNOSIS_QUESTIONS = [
  "要件定義は明確になっていますか？",
  "ROIを定量的に説明できますか？",
  "プロジェクトの目的は全員一致していますか？",
  "稟議で突っ込まれそうな論点は洗い出せていますか？",
  "ステークホルダーの認識のズレは把握できていますか？",
  "投資対効果の前提条件は文書化されていますか？",
  "実施しない場合のリスクは説明できますか？",
  "ベンダー選定の比較軸は固まっていますか？",
  "スコープとマイルストーンは関係者と合意されていますか？",
  "意思決定の記録・トレーサビリティは確保できていますか？",
] as const;

export const DIAGNOSIS_QUESTION_COUNT = DIAGNOSIS_QUESTIONS.length;
