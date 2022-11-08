import {
  ACTION_SET_CHART_DATA_SET,
  ACTION_SET_SELECTED_DATA_SET_INDEX,
  ChartAction,
  chartState
} from './chartTypes'

const INITIAL_STATE: chartState = {
  chartDataSet: [],
  selectedDataSetIndex: null
}

export function ChartStateReducer (
  state: chartState = INITIAL_STATE,
  action: ChartAction
): chartState {
  switch (action.type) {
    case ACTION_SET_SELECTED_DATA_SET_INDEX:
      return {
        ...state,
        selectedDataSetIndex: action.payload
      }

    case ACTION_SET_CHART_DATA_SET:
      return {
        ...state,
        chartDataSet: action.payload
      }
    default:
      return state
  }
}
