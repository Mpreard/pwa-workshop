import React from "react";
import {Doughnut} from 'react-chartjs-2'
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'

function DonutGraph() {
    const data = {
        labels: ['1', '2', '3', '4'],
        datasets: [
            {
                data: ['25', '21', '24', '13'],
                backgroundColor: ["red", "blue", "Green", "Yellow"]
            }
        ]
    }

    return (
        <Doughnut data={data}/>
    );
}

export default DonutGraph;