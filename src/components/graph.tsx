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
import { useStockContext } from "../stockContext";

const Graph = () => {
  const stockContext = useStockContext();
  console.log(stockContext);
  return (
    <div>
      {stockContext && stockContext.stocks && stockContext.selectedStock && (
        <>
          <LineChart
            width={500}
            height={300}
            data={stockContext.stocks[stockContext.selectedStock].history}
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
