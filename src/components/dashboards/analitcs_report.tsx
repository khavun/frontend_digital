import React, { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
import { Line } from "react-chartjs-2";

const AnalyticsReport = () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const value1 = [
        { value: '', label: 'Total Earning' },
        { value: 'total_earning', label: 'Total Earning' },
        { value: 'another_option', label: 'Other  Option' },
    ];
    const value2 = [
        { value: '', label: 'Total Earning' },
        { value: 'total_earning', label: 'Total Earning' },
        { value: 'another_option', label: 'Other  Option' },
    ];
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            label: "Total Earnings",
            data: [20000, 40000, 60000, 50000, 30000, 70000, 78560, 60000, 80000, 90000, 50000, 120000],
            borderColor: "#4caf50", 
            backgroundColor: "rgba(76, 175, 80, 0.2)", 
            tension: 0.4, 
            pointBackgroundColor: "#4caf50",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#4caf50",
            fill: true, 
        },
        ],
    };

    
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                label: function (context: any) {
                    return `$ ${context.raw.toLocaleString()}`;
                },
                },
            },
        },
        scales: {
        x: {
            grid: { display: false },
        },
        y: {
            ticks: {
                callback: function (tickValue: string | number) {
                    return typeof tickValue === 'number' ? tickValue.toLocaleString() : tickValue;
                },
            },
        },
    },
};

  return (
    <Box sx={{ padding: 4, background: "#f9f9f9", borderRadius: "8px", boxShadow:3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',gap:2}}>
        <FormControl>
            <Select
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                displayEmpty
                fullWidth
                error={false}
                sx={{height: '32px'}}
            >
                {value1.map((option) => (
                    <MenuItem key={option.value} value={option.value} disabled={option.value === ''}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl>
          <Select
            value={val2}
            onChange={(e) => setVal1(e.target.value)}
            displayEmpty
            fullWidth
            error={false}
            sx={{height: '32px'}}
        >
            {value2.map((option) => (
                <MenuItem key={option.value} value={option.value} disabled={option.value === ''}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
      </Box>
      <Line data={data} options={options} />
    </Box>
  );
};

export default AnalyticsReport;
