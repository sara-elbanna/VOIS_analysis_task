import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { MONTHS } from '../../utils/dataUtils'
import { ChartDataSetItem } from '../../interfaces/dataInterfaces'
import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { setSelectedDataSetIndex } from '../../redux/chart/chartActions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface AnalysisChartDispatchProps {
  setChartSelectedIndex: (index: number | null) => void
}
interface AnalysisChartProps extends AnalysisChartDispatchProps {
  dataSets: ChartDataSetItem[]
}

function mapDispatchToProps (dispatch: Dispatch): AnalysisChartDispatchProps {
  return {
    setChartSelectedIndex: (index: number | null) => dispatch(setSelectedDataSetIndex(index))
  }
}
function AnalysisChart (props: AnalysisChartProps): ReactElement {
  const history = useHistory()
  const onChartPointClick = (index: number): void => {
    props.setChartSelectedIndex(index)
    history.push('/chartDetails')
  }
  const options = {
    responsive: true,
    onClick: function (evt: any, element: any) {
      if (element.length > 0) {
        const datasetIndex = element[0].datasetIndex
        onChartPointClick(datasetIndex)
      }
    }
  }
  const labels = Object.values(MONTHS)
  const data = {
    labels,
    datasets: props.dataSets
  }
  return (
    <div className="analysisChart">
      <Line options={options} data={data} />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(AnalysisChart)
