import React from "react";
import { IStockObj } from "../interfaces/stock";
import StockVal from "./stockVal";
import { useStockContext } from "../stockContext";
import UpdatedAt from "./updatedAt";

interface IStockRowProps {
  name: string;
  stockObj: IStockObj;
}

const StockRow = ({ name, stockObj }: IStockRowProps) => {
  const stockContext = useStockContext();
  return (
    <tr
      key={name}
      className={stockContext?.selectedStock === name ? "selected" : ""}
      onClick={() => {
        stockContext?.setSelectedStock(name);
      }}
    >
      <td>{name}</td>
      <td>
        <StockVal currentValue={stockObj.val} history={stockObj.history} />
      </td>
      <td>
        <UpdatedAt
          updatedAt={stockObj.history[stockObj.history.length - 1].time}
        />
      </td>
    </tr>
  );
};

export default StockRow;
