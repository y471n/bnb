import * as React from "react";
import { IStockHistory } from "../interfaces/stock";

const StockVal = (props: any) => {
  const currentValue: number = props.currentValue;
  const history: Array<IStockHistory> = props.history;
  return (
    <>
      <span
        className={
          history.length > 1 && history[history.length - 2].val > currentValue
            ? "text-success"
            : "text-danger"
        }
      >
        {currentValue}
      </span>
    </>
  );
};

export default React.memo(StockVal);
