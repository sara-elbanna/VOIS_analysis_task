import { render } from '@testing-library/react'
import AnalysisText from '../containers/home/analysisText'

const props = {
  dataSets: [
    {
      label: 'label1',
      data: { Jan: 100 },
      borderColor: '#ccc',
      backgroundColor: '#ccc',
      lessonsCount: 100
    },
    {
      label: 'label2',
      data: { Jan: 100 },
      borderColor: '#ccc',
      backgroundColor: '#ccc',
      lessonsCount: 200
    }
  ],
  selectedCamp: 'camp'
}
const renderer = render(<AnalysisText {...props}/>)

test('should render correctly', () => {
  expect((renderer.getByTestId('lessons-count1') as HTMLInputElement)).toHaveTextContent('100 lesson')
  expect((renderer.getByTestId('place1') as HTMLInputElement)).toHaveTextContent('in label1')
  expect((renderer.getByTestId('icon1') as HTMLInputElement)).toBeVisible()

  expect((renderer.getByTestId('lessons-count0') as HTMLInputElement)).toHaveTextContent('300 lesson')
  expect((renderer.getByTestId('place0') as HTMLInputElement)).toHaveTextContent('in camp')
})
