import { Selector } from 'react-redux'
import { DataItemInterface } from '../../interfaces/dataInterfaces'
import { DataState } from './dataTypes'

export const getAllDataList: Selector<DataState, DataItemInterface[]> = (
  dataState
) => dataState.data
export const getSelectedCountry: Selector<DataState, string> = (dataState) =>
  dataState.selectedCountry
export const getSelectedCamp: Selector<DataState, string> = (dataState) =>
  dataState.selectedCamp
export const getSelectedSchool: Selector<DataState, string> = (dataState) =>
  dataState.selectedSchool
export const getFilteredData: Selector<DataState, DataItemInterface[]> = (
  dataState
) => dataState.filteredData
export const getFilteredDataByCountry: Selector<
DataState,
DataItemInterface[]
> = (dataState) => dataState.filteredDataByCountry
