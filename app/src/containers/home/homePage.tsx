import { ReactElement, useEffect } from 'react'
import AnalysisChart from './analysisChart'
import AnalysisText from './analysisText'
import Filter from './filter'
import './homePage.css'
import { getCampList, getCountriesList, getSchoolsList } from '../../utils/dataUtils'
import { connect } from 'react-redux'
import { GlobalState } from '../../redux/types'
import { Dispatch } from 'redux'
import {
  fetchData,
  filterData,
  setSelectedCamp,
  setSelectedCountry,
  setSelectedSchool
} from '../../redux/data/dataActions'
import { ChartDataSetItem, DataItemInterface } from '../../interfaces/dataInterfaces'
import {
  getAllDataSelector,
  getSelectedCountrySelector,
  getSelectedCampSelector,
  getSelectedSchoolSelector,
  getFilteredDataByCountrySelector,
  getFilteredDataSelector,
  getChartDataSetSelector
} from '../../redux/selectors'
import { setChartDataSet } from '../../redux/chart/chartActions'

interface HomeStateProps {
  data: DataItemInterface[]
  selectedCountry: string
  selectedCamp: string
  selectedSchool: string
  filteredDataByCountry: DataItemInterface[]
  filteredData: DataItemInterface[]
  chartDataSet: ChartDataSetItem[]
}

interface HomeDispatchProps {
  fetchData: () => void
  setSelectedCountry: (selectedCountry: string) => void
  setSelectedCamp: (selectedCamp: string) => void
  setSelectedSchool: (selectedSchool: string) => void
  filterData: (
    data: DataItemInterface[],
    filterBy: string,
    filterValue: string
  ) => void
  setChartDataSet: (filteredData: DataItemInterface[]) => void
}

interface HomeProps extends HomeStateProps, HomeDispatchProps {}

function mapStateToProps (state: GlobalState): HomeStateProps {
  return {
    data: getAllDataSelector(state),
    selectedCountry: getSelectedCountrySelector(state),
    selectedCamp: getSelectedCampSelector(state),
    selectedSchool: getSelectedSchoolSelector(state),
    filteredDataByCountry: getFilteredDataByCountrySelector(state),
    filteredData: getFilteredDataSelector(state),
    chartDataSet: getChartDataSetSelector(state)

  }
}

function mapDispatchToProps (dispatch: Dispatch): HomeDispatchProps {
  return {
    fetchData: () => dispatch(fetchData()),
    setSelectedCountry: (selectedCountry: string) =>
      dispatch(setSelectedCountry(selectedCountry)),
    setSelectedCamp: (selectedCamp: string) =>
      dispatch(setSelectedCamp(selectedCamp)),
    setSelectedSchool: (selectedSchool: string) =>
      dispatch(setSelectedSchool(selectedSchool)),
    filterData: (
      data: DataItemInterface[],
      filterBy: string,
      filterValue: string
    ) => dispatch(filterData(data, filterBy, filterValue)),
    setChartDataSet: (filteredData: DataItemInterface[]) => dispatch(setChartDataSet(filteredData))

  }
}

function HomePage (props: HomeProps): ReactElement {
  useEffect(() => {
    if (props.data.length === 0) {
      props.fetchData()
    }
  }, [])
  useEffect(() => {
    if (props.data.length > 0) {
      props.setChartDataSet(props.filteredData)
    }
  }, [props.filteredData])

  if (props.data.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        Loading....
      </div>
    )
  }

  const onChangeCountry = (selectedCountry: string): void => {
    props.setSelectedCountry(selectedCountry)
    props.filterData(props.data, 'country', selectedCountry)
  }
  const onChangeCamp = (selectedCamp: string): void => {
    props.setSelectedCamp(selectedCamp)
    props.filterData(props.filteredDataByCountry, 'camp', selectedCamp)
  }
  const onChangeSchool = (selectedSchool: string): void => {
    if (selectedSchool === 'Show all') {
      props.filterData(props.filteredDataByCountry, 'camp', props.selectedCamp)
    } else {
      props.filterData(props.filteredDataByCountry, 'school', selectedSchool)
    }
    props.setSelectedSchool(selectedSchool)
  }

  return (
    <div className="homePage">
      <h1 className="home-title">Analysis Chart</h1>
      <h2 className="home-subtitle">Number of lessons</h2>
      <div className="filters">
        <Filter
          title="SelectCountry"
          value={props.selectedCountry}
          options={getCountriesList(props.data)}
          onSelectChange={onChangeCountry}
        />
        <Filter
          title="SelectCamp"
          value={props.selectedCamp}
          options={getCampList(props.filteredDataByCountry)}
          onSelectChange={onChangeCamp}
        />
        <Filter
          title="SelectSchool"
          value={props.selectedSchool}
          options={getSchoolsList(props.filteredDataByCountry, props.selectedCamp)}
          onSelectChange={onChangeSchool}
        />
      </div>
      {props.filteredData.length > 0 && (
        <div className="analysis">
          <AnalysisChart dataSets={props.chartDataSet} />
          <AnalysisText dataSets={props.chartDataSet} selectedCamp={props.selectedCamp} />
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
