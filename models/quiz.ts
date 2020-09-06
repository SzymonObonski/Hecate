type Level = "junior" | "regular" | "senior";
type Technology = "javascript" | "react" | "css" | "html" | "angular";

export interface QuestionnaireForm {
    tech: Technology;
    level: Level;
}

export interface QuizPayload {
    params: QuestionnaireForm[];
}
