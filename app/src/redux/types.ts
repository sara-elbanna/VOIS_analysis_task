import { ChartAction, chartState } from './chart/chartTypes'
import { DataAction, DataState } from './data/dataTypes'
/// / | anotherAction
export type GlobalAction = DataAction | ChartAction

export type GlobalState = Readonly<{
  dataState: DataState
  chartState: chartState
}>
