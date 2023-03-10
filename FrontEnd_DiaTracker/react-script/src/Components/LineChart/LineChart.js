import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import Chart from 'react-google-charts'
<script src="/scripts/bootstrap.min.js"></script>

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const LineData = [
  ['x', 'Suger Level'],
  [date, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
]
const LineChartOptions = {
  hAxis: {
    title: 'Date',
  },
  vAxis: {
    title: 'Sugar Level',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class LineChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Sugar Level Chart</h2>
        <Chart
          width={'700px'}
          height={'410px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default LineChart
