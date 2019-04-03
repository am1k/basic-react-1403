import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...comments,
        [randomId]: {
          ...payload.comment,
          id: randomId
        }
      }

    default:
      return comments
  }
}
