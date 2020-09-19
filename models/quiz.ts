export type Level = "junior" | "regular" | "senior";
export type Technology = "javascript" | "react" | "css" | "html" | "angular";

export interface QuestionnaireForm {
    tech: Technology;
    level: Level;
}

export interface QuizPayload {
    params: QuestionnaireForm[];
}
