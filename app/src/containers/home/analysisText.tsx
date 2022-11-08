import { ReactElement } from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import { ChartDataSetItem } from '../../interfaces/dataInterfaces'
import { getCampTotalNumberOfLessons } from '../../utils/dataUtils'

interface AnalysisTextProps {
  dataSets: ChartDataSetItem[]
  selectedCamp: string
}
function AnalysisText (props: AnalysisTextProps): ReactElement {
  const renderLessonsItem = (
    number: number,
    place: string,
    color: string,
    withIson: boolean,
    index: number
  ): ReactElement => {
    return (
      <div className="wrapper" key={place}>
        {withIson && <CheckCircleOutlined data-testid={`icon${index}`} style={{ fontSize: 16, color }} />}
        <div style={{ marginLeft: 10, color }}>
          <h2 data-testid={`lessons-count${index}`} style={{ margin: 0, color }}>{number} lessons</h2>
          <span data-testid={`place${index}`}>in {place}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="analysis-text">
      <div className="camp-lessons">
        {renderLessonsItem(
          getCampTotalNumberOfLessons(props.dataSets),
          props.selectedCamp,
          '#939191',
          false,
          0
        )}
      </div>
      {props.dataSets.map((item, index: number) => {
        return renderLessonsItem(
          item.lessonsCount,
          item.label,
          item.backgroundColor,
          true,
          index + 1
        )
      })}
    </div>
  )
}
export default AnalysisText
