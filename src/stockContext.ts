import * as React from "react";
import { IStock } from "./interfaces/stock";

type IStockContext = {
  stocks: IStock | undefined;
  selectedStock: string | undefined;
  setStocks: React.Dispatch<React.SetStateAction<IStock | undefined>>;
  setSelectedStock: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const StockContext = React.createContext<IStockContext | null>(null);

export const useStockContext = () => React.useContext(StockContext);
