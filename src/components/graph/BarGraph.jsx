import React from "react";
import {Bar} from 'react-chartjs-2'
// eslint-disable-next-line
import {Chart as ChartJS} from 'chart.js/auto'

function BarGraph({labels, datasets}) {
    const data = {
        labels: labels,
        datasets: datasets
    }

    return (
        <Bar data={data}/>
    );
}

export default BarGraph;