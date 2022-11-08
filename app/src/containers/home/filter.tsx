import { Select } from 'antd'
import { ReactElement } from 'react'

interface FilterProps {
  title: string
  value: string
  options: string[]
  onSelectChange: (value: string) => void
}
function Filter (props: FilterProps): ReactElement {
  const optionsList: any[] = []
  props.options.forEach((item) =>
    optionsList.push({ value: item, label: item })
  )
  return (
    <div className="filter">
      <p data-testid='filter-title'>{props.title}</p>
      <Select
        data-testid = 'filter-select'
        value={props.value}
        style={{ width: 120 }}
        options={optionsList}
        onChange={(value) => props.onSelectChange(value)}
      />
    </div>
  )
}
export default Filter
