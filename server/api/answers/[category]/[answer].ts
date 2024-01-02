import { getQuestions, isCategory } from "~/utils/category";

export default defineEventHandler((event) => {
  const category = getRouterParam(event, "category");
  const index = getRouterParam(event, "answer");
  if (!category || !isCategory(category)) {
    throw createError({
      statusCode: 400,
      statusMessage: "category not found",
    });
  } else if (!index) {
    throw createError({
      statusCode: 400,
      statusMessage: "index not found",
    });
  }

  const questions = getQuestions(category);
  const question = questions[parseInt(index,10)]

  if (!question) {
    throw createError({
      statusCode: 400,
      statusMessage: "answer not found",
    });
  }

  return question.answer
});
