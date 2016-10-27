const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearch'

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
  }
}

const reduceSearchTerm = (state,action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}
