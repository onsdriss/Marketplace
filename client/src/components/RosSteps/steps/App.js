import React from 'react'
import { useState, useEffect } from "react";
import { Chart } from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
import * as d3 from 'd3'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import { csv } from 'd3'

const App = () => {
 
    const [chartData, setChartData] = useState({});
const chart = () => {
    let filename = 'https://raw.githubusercontent.com/onsdriss/Task-Prediction-using-supervised-ML/main/Arterial%20Segment%20of%20the%20Transit%20Coach%20Operating%20Duty%20Cycle.csv';
    d3.csv(filename).then(function(datapoints){

        //console.log(datapoints);
        let AverageDrivingSpeed = [];
        let MaximumSpeed = [];

        for (let i=0; i < datapoints.length; i++) {
          AverageDrivingSpeed.push(datapoints[i].AverageDrivingSpeed);

          MaximumSpeed.push(datapoints[i].MaximumSpeed);
            
        }
        console.log(MaximumSpeed);
        setChartData({
            labels: MaximumSpeed,
            datasets: [
              {
                label: "velocity",
                data: AverageDrivingSpeed,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
              }
            ]
          });

    })}

    useEffect(() => {
        chart();
      }, []);    
     

    return (
      <div>
          <h1>Velocity</h1>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "", display: true },
            scales: {
              yAxes: [
                {
                  title: {
                    text : chartData.MaximumSpeed ? chartData.MaximumSpeed : "X-Axis",
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  title: {
                    text : "voltage",
                  },
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
        </div>
      );
}

export default App;