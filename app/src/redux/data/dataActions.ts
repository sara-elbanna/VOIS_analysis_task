import { fetchDataApi } from '../../api/dataApi'
import { DataItemInterface } from '../../interfaces/dataInterfaces'
import {
  ActionFilterData,
  ActionFilterDataByCountry,
  ActionSelectCamp,
  ActionSelectCountry,
  ActionSelectSchool,
  ActionstoreData,
  ACTION_STORE_DATA,
  FILTER_DATA,
  FILTER_DATA_BY_COUNTRY,
  SELLECT_CAMP,
  SELLECT_COUNTRY,
  SELLECT_SCHOOL
} from './dataTypes'

export const fetchData = (): any => {
  return async (dispatch: any) => {
    return await fetchDataApi()
      /* eslint-disable */ 
      .then(async (res) => await res.json())
      .catch((e) => {
        console.log('error', e)
      })
      .then((res) => {
        dispatch(storeData(res))
      })
      .catch((e) => {
        console.log('error', e)
      })
  }
}

export const storeData = (data: DataItemInterface[]): ActionstoreData => {
  return {
    type: ACTION_STORE_DATA,
    payload: data
  }
}

export const setSelectedCountry = (selectedCountry: string): ActionSelectCountry => {
  return {
    type: SELLECT_COUNTRY,
    payload: selectedCountry
  }
}
export const setSelectedCamp = (selectedCamp: string): ActionSelectCamp => {
  return {
    type: SELLECT_CAMP,
    payload: selectedCamp
  }
}
export const setSelectedSchool = (selectedSchool: string): ActionSelectSchool => {
  return {
    type: SELLECT_SCHOOL,
    payload: selectedSchool
  }
}
export const filterData = (
  data: DataItemInterface[],
  filterBy: string,
  filterValue: string
): ActionFilterData | ActionFilterDataByCountry => {
  if (filterBy === 'country') {
    const filteredDataByCountry = data.filter(
      (item) => item.country === filterValue
    )
    return {
      type: FILTER_DATA_BY_COUNTRY,
      payload: filteredDataByCountry
    }
  } else {
    const filteredData =
      filterBy === 'camp'
        ? data.filter((item) => item.camp === filterValue)
        : data.filter((item) => item.school === filterValue)
    return {
      type: FILTER_DATA,
      payload: filteredData
    }
  }
}
