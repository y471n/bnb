import React from "react";
import { IStockObj, IStockHistory } from "../interfaces/stock";
import StockVal from "./stockVal";

interface IStockRowProps {
  name: string;
  stockObj: IStockObj;
  handleClick(name: string, history: Array<IStockHistory>): void;
}

const StockRow = ({ name, stockObj, handleClick }: IStockRowProps) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <tr
      key={name}
      className={selected ? "selected" : ""}
      onClick={() => {
        setSelected(!selected);
        handleClick(name, stockObj.history);
      }}
    >
      <td>{name}</td>
      <td>
        <StockVal currentValue={stockObj.val} history={stockObj.history} />
      </td>
    </tr>
  );
};

export default StockRow;
