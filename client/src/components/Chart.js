import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card } from 'reactstrap';

function Charts() {
  const [revenueSummary, setRevenueSummary] = useState({});
  const [genderRatio, seGenderRatio] = useState({});
  const [tripsSummary, setTripsSummary] = useState({});

  useEffect(() => {
    fetch(`/api/stats`)
      .then(response => response.json())
      .then(data => data.data)
      .then(stat => {
        const colors = ['rgba(255,149,237,0.6)', 'rgba(54,162,235,0.6)'];
        setRevenueSummary({
          chartData: {
            labels: [
              'Billed Total',
              'Cash Billed Total',
              'Non Cash Billed Total',
            ],
            datasets: [
              {
                label: 'Max Earning',
                data: [
                  stat.billedTotal,
                  stat.cashBilledTotal,
                  stat.nonCashBilledTotal,
                ],
                backgroundColor: ['rgba(75,192,192,0.6)', ...colors],
              },
            ],
          },
        });

        seGenderRatio({
          chartData: {
            labels: ['Total Females', 'Total Males'],
            datasets: [
              {
                data: [stat.female, stat.male],
                backgroundColor: colors,
              },
            ],
          },
        });
        setTripsSummary({
          chartData: {
            labels: ['No. of Cash Trips', 'No. of None Cash Trips'],
            datasets: [
              {
                data: [stat.noOfCashTrips, stat.noOfNonCashTrips],
                backgroundColor: colors,
              },
            ],
          },
        });
      });
  }, []);

  return (
    <div className="Chart">
      <Chart ChartType={Pie} data={genderRatio.chartData} />
      <Chart ChartType={Pie} data={tripsSummary.chartData} />
      <Chart ChartType={Bar} data={revenueSummary.chartData} />
    </div>
  );
}

function Chart({ ChartType, ...props }) {
  return (
    <Card
      style={{ marginTop: '10px', boxShadow: '1px 3px 1px rgb(207, 51, 207)' }}
    >
      <ChartType
        options={{
          title: {
            display: true,
            fontSize: 25,
          },
        }}
        {...props}
      />
    </Card>
  );
}
export default Charts;
