import { ReactElement } from 'react'
import { connect } from 'react-redux'
import { ChartDataSetItem } from '../../interfaces/dataInterfaces'
import { getChartDataSetSelector, getSelectedDataSetIndeSelector } from '../../redux/selectors'
import { GlobalState } from '../../redux/types'

interface ChartItemDetailsStateProps {
  chartDataSet: ChartDataSetItem[]
  selectedIndex: number | null
}

interface ChartItemDetailsProps extends ChartItemDetailsStateProps {}

function mapStateToProps (state: GlobalState): ChartItemDetailsStateProps {
  return {
    chartDataSet: getChartDataSetSelector(state),
    selectedIndex: getSelectedDataSetIndeSelector(state)
  }
}

function ChartItemDetails (props: ChartItemDetailsProps): ReactElement {
  if (props.selectedIndex == null || props.chartDataSet.length === 0) {
    return <div>
        NO DATA
    </div>
  }
  const selectedItem = props.chartDataSet[props.selectedIndex]
  return (
    <div>
        <h1>Chart Item Details</h1>
        <h2>School Name:</h2>
        <p>{selectedItem.label}</p>
        <h2>Number of lessons:</h2>
        <p>{selectedItem.lessonsCount}</p>
    </div>
  )
}

export default connect(mapStateToProps, {})(ChartItemDetails)
