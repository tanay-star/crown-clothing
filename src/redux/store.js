import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
//adding persistence
import { persistStore } from 'redux-persist'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }
