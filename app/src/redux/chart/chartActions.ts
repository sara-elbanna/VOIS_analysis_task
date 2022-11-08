import { ChartDataSetItem, DataItemInterface } from '../../interfaces/dataInterfaces'
import { getChartDataSets } from '../../utils/dataUtils'
import { ActionSetChartDataSet, ActionSetSelectedDataSetIndex, ACTION_SET_CHART_DATA_SET, ACTION_SET_SELECTED_DATA_SET_INDEX } from './chartTypes'

export const setChartDataSet = (filteredData: DataItemInterface[]): ActionSetChartDataSet => {
  const dataSet: ChartDataSetItem [] = getChartDataSets(filteredData)
  return {
    type: ACTION_SET_CHART_DATA_SET,
    payload: dataSet
  }
}

export const setSelectedDataSetIndex = (index: number | null): ActionSetSelectedDataSetIndex => {
  return {
    type: ACTION_SET_SELECTED_DATA_SET_INDEX,
    payload: index
  }
}
