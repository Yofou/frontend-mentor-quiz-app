import data from './data'

export type CategoryGroup = 'html' | 'css' | 'javascript' | 'accessibility'

export const isCategory = (value: string): value is CategoryGroup => {
  const categories = ['html', 'css', 'javascript', 'accessibility']
  return categories.includes(value)
}

export const getQuestions = (key: CategoryGroup) => {
  return data[key] 
}

export const useQuestions = (key: CategoryGroup, lazy = false) => {
  const response = useFetch(`/api/questions/${key}`, {
    lazy,
  })
  return response
}
