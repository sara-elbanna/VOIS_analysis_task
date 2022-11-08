import { ChartAction, chartState } from './chart/chartTypes'
import { DataAction, DataState } from './data/dataTypes'

export type GlobalAction = DataAction | ChartAction

export type GlobalState = Readonly<{
  dataState: DataState
  chartState: chartState
}>
