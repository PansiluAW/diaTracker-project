import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component, useState, useEffect} from 'react'
import Chart from 'react-google-charts'
import axios from "axios";
<script src="/scripts/bootstrap.min.js"></script>

export default function LineChart() {

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const [data, setData] = useState([]);

useEffect(() => {
  getData();
}, []);

const getData = () =>{
  axios.get("#")
  .then((res) => res.data)
  .then((r) => setData(r));
};

const LineData = [
  ['x', 'Suger Level'],
  [date, 15],
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
    gridlines: {
      color: '#5b563f'
    }
  },
  series: {
    1: { curveType: 'function' },
    0: {
      color: '#372e18'
    }
  },
  backgroundColor:'#fcdc52',
}
  return (
    (
      <div className="container">
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
  )
}

