import * as React from "react";
import StockRow from "./stockRow";
import { useStockContext } from "../stockContext";

const StockTable = () => {
  const stockContext = useStockContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {stockContext &&
          stockContext.stocks &&
          Object.entries(stockContext.stocks).map(([stockName, stockObj]) => (
            <StockRow key={stockName} name={stockName} stockObj={stockObj} />
          ))}
      </tbody>
    </table>
  );
};

export default StockTable;
