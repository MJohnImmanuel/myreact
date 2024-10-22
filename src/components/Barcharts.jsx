import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const jobOrderData = [
  { name: "Panel A", value: 280 },
  { name: "Panel B", value: 250 },
  { name: "Panel C", value: 200 },
  { name: "Panel D", value: 150 },
  { name: "Panel E", value: 100 },
];

const insuranceData = [
  { name: "Insurance A", value: 380 },
  { name: "Insurance B", value: 350 },
  { name: "Insurance C", value: 300 },
  { name: "Insurance D", value: 200 },
  { name: "Insurance E", value: 150 },
];

const BarCharts = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "30px", gap:'25%' }}>
      <div style={{ width: "45%", color:'black', marginLeft:'-50px'}}>
        <h3>Job Order</h3>
        <BarChart
          width={400}
          height={300}
          data={jobOrderData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>

      <div style={{ width: "45%", color:'black', }}>
        <h3>Insurance</h3>
        <BarChart
          width={400}
          height={300}
          data={insuranceData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarCharts;
