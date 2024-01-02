import { getQuestions, isCategory } from "~/utils/category";

export default defineEventHandler((event) => {
  const category = getRouterParam(event, "category");
  if (!category || !isCategory(category)) {
    throw createError({
      statusCode: 400,
      statusMessage: "category not found",
    });
  }

  const questions = getQuestions(category);
  const stripedAnswers = questions.map((question) => {
    return {
      question: question.question,
      options: question.options,
    };
  });

  return stripedAnswers;
});
