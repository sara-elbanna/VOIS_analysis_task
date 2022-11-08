import { ChartDataSetItem } from '../../interfaces/dataInterfaces'

export const ACTION_SET_CHART_DATA_SET = 'ACTION_SET_CHART_DATA_SET'
export const ACTION_SET_SELECTED_DATA_SET_INDEX = 'ACTION_SET_SELECTED_DATA_SET_INDEX'

export interface ActionSetChartDataSet {
  type: typeof ACTION_SET_CHART_DATA_SET
  payload: ChartDataSetItem[] | []
}

export interface ActionSetSelectedDataSetIndex {
  type: typeof ACTION_SET_SELECTED_DATA_SET_INDEX
  payload: number | null
}

export type ChartAction =
  | ActionSetChartDataSet
  | ActionSetSelectedDataSetIndex

export interface chartState {
  chartDataSet: ChartDataSetItem[]
  selectedDataSetIndex: number | null
}
