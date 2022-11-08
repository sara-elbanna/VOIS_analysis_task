import './App.css'
import 'antd/dist/antd.css'

import { ReactElement } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './containers/home/homePage'
import ChartItemDetails from './containers/chart/chartItemDetails'

function App (): ReactElement {
  return (
  <Router>
      <div>
        <Switch>
          <Route path="/chartDetails" component={ChartItemDetails} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default (App)
