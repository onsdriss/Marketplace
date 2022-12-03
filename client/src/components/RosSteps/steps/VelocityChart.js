import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import { csv } from 'd3';

const Velocity = () => {
 
  const [data, setData] = useState([]);
  let filename="./example.csv"
  // Load the dataset
  var svg=csv(filename).then(setData);
 // console.log(data)

  const [chartData, setChartData] = useState({});

  const p = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "velocity",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div >
      <h1>Example</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "", display: true },
            scales: {
              yAxes: [
                {
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
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
        
      </div>
    </div>
  );
};

export default Velocity;