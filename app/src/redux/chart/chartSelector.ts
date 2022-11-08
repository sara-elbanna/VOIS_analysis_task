import { Selector } from 'react-redux'
import { ChartDataSetItem } from '../../interfaces/dataInterfaces'
import { chartState } from './chartTypes'

export const getChartDataSetList: Selector<chartState, ChartDataSetItem[]> = (
  dataState
) => dataState.chartDataSet

export const getSelectedDataSetIndex: Selector<chartState, number | null> = (
  dataState
) => dataState.selectedDataSetIndex
