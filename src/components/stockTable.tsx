import * as React from "react";
import { IStock } from "../interfaces/stock";
import StockVal from "./stockVal";

const StockTable = (props: any) => {
  const stockMap: IStock = props.stockMap;

  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(stockMap).map(([stockName, stockObj]) => (
          <tr
            key={stockName}
            onClick={() => props.handleClick(stockName, stockObj.history)}
          >
            <td>{stockName}</td>
            <td>
              <StockVal
                currentValue={stockObj.val}
                history={stockObj.history}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
