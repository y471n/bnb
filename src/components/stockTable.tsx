import * as React from "react";
import { IStock, IStockHistory } from "../interfaces/stock";
import StockRow from "./stockRow";

interface IStockTableProps {
  stockMap: IStock;
  handleClick(stockName: string, stockHistory: Array<IStockHistory>): void;
}

const StockTable = ({ stockMap, handleClick }: IStockTableProps) => {
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
          <StockRow
            name={stockName}
            stockObj={stockObj}
            handleClick={handleClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
