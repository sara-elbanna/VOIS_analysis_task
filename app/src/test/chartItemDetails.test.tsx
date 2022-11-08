import { act, cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import ChartItemDetails from '../containers/chart/chartItemDetails'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { createGlobalStore } from '../redux/store'
import { setChartDataSet, setSelectedDataSetIndex } from '../redux/chart/chartActions'
import { Store } from 'redux'
import { GlobalAction, GlobalState } from '../redux/types'

describe('ChartItemDetails', () => {
  const history = createMemoryHistory()
  let getByText: any

  const filteredData = [
    {
      id: '620af3a48ed713dcbc4602ff',
      month: 'Nov',
      camp: 'Omaka',
      country: 'Kenya',
      school: 'Omaka Secondary',
      lessons: 140
    },
    {
      id: '620af3a448cc8e77538bf429',
      month: 'Feb',
      camp: 'Omaka',
      country: 'Kenya',
      school: 'Te Kupenga Preschool',
      lessons: 240
    }
  ]
  const store: Store<GlobalState, GlobalAction> = createGlobalStore().store
  /* eslint-disable */
  beforeEach(() => {
    jest.useFakeTimers(),
    ({ getByText } = render(
        <Provider store={store}>
          <Router history={history}>
            <ChartItemDetails />
          </Router>
        </Provider>
    ))
  })
  afterEach(cleanup)

  test('should render correctly when no data', () => {
    expect(getByText('NO DATA') as HTMLInputElement).toBeVisible()
  })
  test('should render correctly with data', () => {
    act(() => {
      store.dispatch(setChartDataSet(filteredData))
      store.dispatch(setSelectedDataSetIndex(0))
    })
    expect(getByText('Chart Item Details') as HTMLInputElement).toBeVisible()
    expect((getByText('School Name:') as HTMLInputElement)).toBeVisible()
    expect((getByText('Omaka Secondary') as HTMLInputElement)).toBeVisible()
    expect((getByText('Number of lessons:') as HTMLInputElement)).toBeVisible()
    expect((getByText('140') as HTMLInputElement)).toBeVisible()
  })
})
