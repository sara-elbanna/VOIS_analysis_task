import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import { DataStateReducer } from './data/dataReducer'
import { ChartStateReducer } from './chart/chartReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { GlobalAction, GlobalState } from './types'

export function createGlobalStore (): {
  store: Store<GlobalState, GlobalAction>
  persistor: any
} {
  const rootReducer = combineReducers({
    dataState: DataStateReducer,
    chartState: ChartStateReducer
  })

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chartState', 'dataState']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)
  return { store, persistor }
}
