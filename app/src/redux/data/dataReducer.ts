// import { cloneDeep } from 'lodash'
import {
  ACTION_STORE_DATA,
  DataAction,
  DataState,
  FILTER_DATA,
  FILTER_DATA_BY_COUNTRY,
  SELLECT_CAMP,
  SELLECT_COUNTRY,
  SELLECT_SCHOOL
} from './dataTypes'

const INITIAL_STATE: DataState = {
  data: [],
  selectedCountry: '',
  selectedCamp: '',
  selectedSchool: '',
  filteredData: [],
  filteredDataByCountry: []
}

export function DataStateReducer (
  state: DataState = INITIAL_STATE,
  action: DataAction
): DataState {
  switch (action.type) {
    case ACTION_STORE_DATA:
      return {
        ...state,
        data: action.payload
      }
    case SELLECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
        selectedCamp: '',
        selectedSchool: '',
        filteredData: [],
        filteredDataByCountry: []
      }
    case SELLECT_CAMP:
      return {
        ...state,
        selectedCamp: action.payload,
        selectedSchool: 'Show all'
      }
    case SELLECT_SCHOOL:
      return {
        ...state,
        selectedSchool: action.payload
      }
    case FILTER_DATA_BY_COUNTRY:
      return {
        ...state,
        filteredDataByCountry: action.payload
      }
    case FILTER_DATA:
      return {
        ...state,
        filteredData: action.payload
      }

    default:
      return state
  }
}
