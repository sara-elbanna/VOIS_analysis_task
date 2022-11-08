import { DataItemInterface } from '../../interfaces/dataInterfaces'

export const ACTION_STORE_DATA = 'ACTION_STORE_DATA'
export const SELLECT_COUNTRY = 'SELLECT_COUNTRY'
export const FILTER_DATA_BY_COUNTRY = 'FILTER_DATA_BY_COUNTRY'
export const SELLECT_CAMP = 'SELLECT_CAMP'
export const SELLECT_SCHOOL = 'SELLECT_SCHOOL'
export const FILTER_DATA = 'FILTER_DATA'

export interface ActionstoreData {
  type: typeof ACTION_STORE_DATA
  payload: DataItemInterface[] | []
}

export interface ActionSelectCountry {
  type: typeof SELLECT_COUNTRY
  payload: string
}
export interface ActionSelectCamp {
  type: typeof SELLECT_CAMP
  payload: string
}
export interface ActionSelectSchool {
  type: typeof SELLECT_SCHOOL
  payload: string
}

export interface ActionFilterDataByCountry {
  type: typeof FILTER_DATA_BY_COUNTRY
  payload: DataItemInterface[] | []
}
export interface ActionFilterData {
  type: typeof FILTER_DATA
  payload: DataItemInterface[] | []
}
export type DataAction =
  | ActionstoreData
  | ActionSelectCountry
  | ActionFilterDataByCountry
  | ActionSelectCamp
  | ActionSelectSchool
  | ActionFilterData

export interface DataState {
  data: DataItemInterface[] | []
  selectedCountry: string
  selectedCamp: string
  selectedSchool: string
  filteredData: DataItemInterface[]
  filteredDataByCountry: DataItemInterface[]
}
