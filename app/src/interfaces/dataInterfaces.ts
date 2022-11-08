export interface DataItemInterface {
  id: string
  month: string
  camp: string
  country: string
  school: string
  lessons: number
}

export interface ChartLineData {
  [key: string]: number
}

export interface ChartDataSetItem {
  label: string
  data: ChartLineData
  borderColor: string
  backgroundColor: string
  lessonsCount: number
}

export interface DataGroupedBySchool {
  [key: string]: DataItemInterface[]
}
