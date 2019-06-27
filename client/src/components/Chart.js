import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

function Charts() {
  const [revenueSummary] = useState({
    chartData: {
      labels: ['Billed Total', 'Cash Billed Total', 'Non Cash Billed Total'],
      datasets: [
        {
          label: 'Max Earning',
          data: [128224.69, 69043.8, 59180.89],
          backgroundColor: [
            'rgba(255,149,237,0.6)',
            'rgba(54,162,235,0.6)',
            'rgba(75,192,192,0.6)',
          ],
        },
      ],
    },
  });

  const [genderRatio] = useState({
    chartData: {
      labels: ['Total Females', 'Total Males'],
      datasets: [
        {
          data: [20, 30],
          backgroundColor: ['rgba(255,149,237,0.6)', 'rgba(54,162,235,0.6)'],
        },
      ],
    },
  });

  const [tripsSummary] = useState({
    chartData: {
      labels: ['No. of Cash Trips', 'No. of None Cash Trips'],
      datasets: [
        {
          data: [24, 26],
          backgroundColor: ['rgba(255,149,237,0.6)', 'rgba(54,162,235,0.6)'],
        },
      ],
    },
  });

  return (
    <div className="Chart">
      <Pie
        data={genderRatio.chartData}
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
        }}
      />
      <Chart
        ChartType={Pie}
        data={tripsSummary.chartData}
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
        }}
      />
      <Bar
        ChartType={Pie}
        data={revenueSummary.chartData}
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
        }}
      />
    </div>
  );
}

function Chart({ ChartType, ...props }) {
  return <ChartType {...props} />;
}
export default Charts;
