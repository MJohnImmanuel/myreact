import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 44.330, label: 'Auto Repair A (44%)' },
  { id: 1, value: 32.230, label: 'Auto Repair B (32%)' },
  { id: 2, value: 24.180, label: 'Auto Repair C(24%)' },
];

export default function PieActiveArc() {
  return (
    <PieChart
    colors={[' rgb(22,24,49)', 'rgb(46,55,127)', ' rgb(114,125,210)']} // Use palette
      series={[
        {
          data,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray'},
        },
      ]}
      height={200}
    />
  );
}
