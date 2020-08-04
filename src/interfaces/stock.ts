export interface IStockHistory {
  time: number;
  val: number;
  readableTime: string;
}

export interface IStockObj {
  val: number;
  history: Array<IStockHistory>;
}

export interface IStock {
  [name: string]: IStockObj;
}

export interface ISelectedStock {
  name: string;
  history: Array<IStockHistory>;
}
