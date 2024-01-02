import data from './data'

type CategoryGroup = 'html' | 'css' | 'javascript' | 'accessibility'

export const isCategory = (value: string): value is CategoryGroup => {
  const categories = ['html', 'css', 'javascript', 'accessibility']
  return categories.includes(value)
}

/* export const getCategoryIcon = (value: CategoryGroup) => {
  const categoriesIcons = {
    html: import('~/components/icons/HTML.vue'),
    css: import('~/components/icons/CSS.vue'),
    javascript: import('~/components/icons/JS.vue'),
    accessibility: import('~/components/icons/Accessibility.vue')
  } as const

  return categoriesIcons[value]
} */

export const getQuestions = (key: CategoryGroup) => {
  return data[key] 
}

export const useQuestions = (key: CategoryGroup, lazy = false) => {
  const response = useFetch(`/api/questions/${key}`, {
    lazy,
  })
  return response
}
