import { PAGINATION_CLICK } from "../actions"

const initState = {
  currentPage: 0,
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case PAGINATION_CLICK:
      return {
        currentPage: payload,
      }
    default:
      return state
  }
}
