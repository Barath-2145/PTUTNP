import React from 'react';
import ResponsivePieChart from './Chart'
import './index.css'

    // Sample data
    const chartData = [
      { name: 'Zoho', value: 30 },
      { name: 'TCS', value: 45 },
      { name: 'Accenture', value: 25 },
      { name: 'CTS', value: 28 },
      { name: 'Others', value: 15 },
    ];

    const ChartDesc = () => {
      return( 
        <div className='chart-desc'>
            <h1>Yearly placement statistics!</h1>
            <h2>Rising pride every year</h2>
            <h3>Average income</h3>
        </div>
      )
    };

    const Chart = () => {
    return (
        <div className='container-5'>
        <div style={{ flex: 1 }}>
            <ChartDesc />
        </div>
        <div style={{ flex: 1 }}>
            <ResponsivePieChart data={chartData} />
        </div>
        </div>
  );
  }
export default Chart;
