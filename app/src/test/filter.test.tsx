import { render } from '@testing-library/react'
import Filter from '../containers/home/filter'

describe('Filter', () => {
  let getByText: any

  const props = {
    title: 'select country',
    value: 'value',
    options: [],
    onSelectChange: () => {}
  }
  /* eslint-disable */
  beforeEach(() => {
    jest.useFakeTimers(),
    ({ getByText } = render(<Filter {...props} />))
  })

  test('should render correctly when no data', () => {
    expect(getByText('select country') as HTMLInputElement).toBeVisible()
  })
})
