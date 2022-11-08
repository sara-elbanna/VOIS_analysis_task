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

// export class DataUtils {
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
// }

// selected country, school, camp
// filtered data

// initially
// 1- getCountriesList(data)
// 2- camp & schools Select elements are disabled
// if(!selected country) disable camp & schools, if(selected country && !selectedCamp) schools value ='show all'
// 3- filteredData = null
// when select country
//  1- set selectedCountry
//  2- filter all data with selected country and store it in filteredDataByCountry
//  3- set campsList = getCampList(filteredDataByCountry)
//  4- reset  selectedCamp && selectedSchool
//  5- set fiteredData = null
// when select camp
//  1- set SelectedCamp
//  2- filteredData = filter filteredDataByCountry with selected camp
//  3- set schoolsList = getSchoolsList(filteredData)
//  4- reset selectedSchool
// when select school
//  1- set Selectedschool
//  2- filteredData = filter filteredDataByCountry  with selected school & selected camp

// if(filteredData.length>0) display filteredData on chart getChartDataSets(filteredData)
