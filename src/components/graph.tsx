import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ISelectedStock } from "../interfaces/stock";

interface IGraphProps {
  selectedStock: ISelectedStock | undefined;
}

const Graph = ({ selectedStock }: IGraphProps) => {
  console.log(selectedStock);

  return (
    <div>
      {selectedStock && selectedStock.history && (
        <>
          <LineChart
            width={500}
            height={300}
            data={selectedStock?.history}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <YAxis dataKey="val" />
            <XAxis dataKey="readableTime" />
            <Line
              type="monotone"
              dataKey="val"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Legend />
          </LineChart>
          <Tooltip />
        </>
      )}
      <br />
    </div>
  );
};

export default Graph;
