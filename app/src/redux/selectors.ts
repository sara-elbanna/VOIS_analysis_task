import { Selector } from 'react-redux'
import { ChartDataSetItem, DataItemInterface } from '../interfaces/dataInterfaces'
import { getChartDataSetList, getSelectedDataSetIndex } from './chart/chartSelector'
import {
  getAllDataList,
  getFilteredData,
  getFilteredDataByCountry,
  getSelectedCamp,
  getSelectedCountry,
  getSelectedSchool
} from './data/dataSelector'
import { GlobalState } from './types'

export const getAllDataSelector: Selector<GlobalState, DataItemInterface[]> = (
  state
) => getAllDataList(state.dataState)
export const getSelectedCountrySelector: Selector<GlobalState, string> = (
  state
) => getSelectedCountry(state.dataState)
export const getSelectedCampSelector: Selector<GlobalState, string> = (state) =>
  getSelectedCamp(state.dataState)
export const getSelectedSchoolSelector: Selector<GlobalState, string> = (
  state
) => getSelectedSchool(state.dataState)
export const getFilteredDataSelector: Selector<
GlobalState,
DataItemInterface[]
> = (state) => getFilteredData(state.dataState)
export const getFilteredDataByCountrySelector: Selector<
GlobalState,
DataItemInterface[]
> = (state) => getFilteredDataByCountry(state.dataState)

export const getChartDataSetSelector: Selector<
GlobalState,
ChartDataSetItem[]
> = (state) => getChartDataSetList(state.chartState)

export const getSelectedDataSetIndeSelector: Selector<
GlobalState,
number | null
> = (state) => getSelectedDataSetIndex(state.chartState)
