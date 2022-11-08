import {
  ChartDataSetItem,
  ChartLineData,
  DataGroupedBySchool,
  DataItemInterface
} from '../interfaces/dataInterfaces'

export const MONTHS: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const getChartDataSets = (
  filteredData: DataItemInterface[]
): ChartDataSetItem[] => {
  const dataGroupedBySchool: DataGroupedBySchool = {}
  const chartDataSets: ChartDataSetItem[] = []
  filteredData.forEach((element: DataItemInterface) => {
    if (dataGroupedBySchool[element.school] !== undefined) {
      dataGroupedBySchool[element.school].push(element)
    } else {
      dataGroupedBySchool[element.school] = [element]
    }
  })
  Object.keys(dataGroupedBySchool).forEach((item, index) => {
    const dataSet: ChartDataSetItem = {
      label: item,
      data: getSchoolData(dataGroupedBySchool[item]).chartLineData,
      borderColor: getChartLineBorderColor(index + 1),
      backgroundColor: getChartLineBackgroundColor(index + 1),
      lessonsCount: getSchoolData(dataGroupedBySchool[item]).lessonsCount
    }
    chartDataSets.push(dataSet)
  })
  return chartDataSets
}

export const getSchoolData = (dataForOneSchool: DataItemInterface[]): any => {
  const chartLineData: ChartLineData = {}
  let lessonsCount: number = 0
  Object.values(MONTHS).forEach((month) => (chartLineData[month] = 0))
  dataForOneSchool.forEach((element: DataItemInterface) => {
    chartLineData[element.month] += element.lessons
    lessonsCount += element.lessons
  })
  return { chartLineData, lessonsCount }
}

export const getCountriesList = (allData: DataItemInterface[]): string[] => {
  const countries: Set<string> = new Set()
  allData.forEach((element: DataItemInterface) => {
    countries.add(element.country)
  })
  return Array.from(countries)
}

export const getCampList = (
  filteredDataByCountry: DataItemInterface[]
): string[] => {
  const camps: Set<string> = new Set()
  filteredDataByCountry.forEach((element: DataItemInterface) => {
    camps.add(element.camp)
  })
  return Array.from(camps)
}

export const getSchoolsList = (filteredDataByCountry: DataItemInterface[], selectedCamp: string): string[] => {
  const filteredData = filteredDataByCountry.filter(item => item.camp === selectedCamp)
  const schools: Set<string> = new Set()
  schools.add('Show all')
  filteredData.forEach((element: DataItemInterface) => {
    schools.add(element.school)
  })
  return Array.from(schools)
}

export const getChartLineBackgroundColor = (index: number): string => {
  return `rgb(${index * 70}, ${index * 10}, ${index * 2})`
}

export const getChartLineBorderColor = (index: number): string => {
  return `rgb(${index * 70}, ${index * 10}, ${index * 2}, .5)`
}

export const getCampTotalNumberOfLessons = (
  dataSet: ChartDataSetItem[]
): number => {
  let lessonsCount = 0
  dataSet.forEach((item) => (lessonsCount += item.lessonsCount))
  return lessonsCount
}
