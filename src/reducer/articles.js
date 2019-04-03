import { normalizedArticles } from '../fixtures'
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articles = defaultArticles, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articles }
      delete articlesCopy[payload.id]
      return articlesCopy

    case ADD_COMMENT:
      const article = articles[payload.articleId]
      return {
        ...articles,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    default:
      return articles
  }
}
