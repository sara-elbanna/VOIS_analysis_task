import { act, cleanup, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { createGlobalStore } from '../redux/store'
import { Store } from 'redux'
import { GlobalAction, GlobalState } from '../redux/types'
import HomePage from '../containers/home/homePage'
import { storeData } from '../redux/data/dataActions'

describe('HomePage', () => {
  const history = createMemoryHistory()
  let getByText: any

  const data = [
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
  beforeEach(async () => {
    ({ getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <HomePage />
        </Router>
      </Provider>
    ))
  })
  afterEach(cleanup)

  test('should render correctly when no data', () => {
    expect(getByText('Loading....') as HTMLInputElement).toBeVisible()
  })
  test('should render correctly with data', async () => {
    await act(() => {
      store.dispatch(storeData(data))
    })
    expect(getByText('Analysis Chart') as HTMLInputElement).toBeVisible()
    expect(getByText('Number of lessons') as HTMLInputElement).toBeVisible()
  })
})
