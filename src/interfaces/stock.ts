export interface IStockHistory {
  time: number;
  val: number;
  readableTime: string;
}

export interface IStock {
  [name: string]: {
    val: number;
    history: Array<IStockHistory>;
  };
}

export interface ISelectedStock {
  name: string;
  history: Array<IStockHistory>;
}
