import * as React from "react";
import { IStock, IStockHistory, ISelectedStock } from "../interfaces/stock";
import StockTable from "../components/stockTable";
import Graph from "../components/graph";
import { getReadableTime } from "../utils";

const ENDPOINT = "ws://stocks.mnet.website/";
const initialStockMap: IStock = {};

const Home = () => {
  const [stockMap, setStockMap] = React.useState(initialStockMap);
  const [selectedStock, setSelectedStock] = React.useState<
    ISelectedStock | undefined
  >(undefined);

  /**
   *
   * @param stockInputData {Array<[string, number]}
   * @returns {IStock}
   */
  const getStockMap = (stockInput: Array<[string, number]>): IStock => {
    let existingStockMap = { ...stockMap };
    for (let i = 0; i < stockInput.length; i += 1) {
      const stock = stockInput[0];
      const currentStockName = stock[0];
      const currentStockValue = Number(Number(stock[1]).toFixed(2));
      const currentTime = Date.now();
      const stockHistoryItem: IStockHistory = {
        time: currentTime,
        val: currentStockValue,
        readableTime: getReadableTime(currentTime),
      };
      if (existingStockMap[currentStockName]) {
        const currentStockHistory = existingStockMap[currentStockName].history;
        if (
          currentStockHistory[currentStockHistory.length - 1].val !==
          currentStockValue
        ) {
          existingStockMap[currentStockName].val = currentStockValue;
          existingStockMap[currentStockName].history.push(stockHistoryItem);
        }
      } else {
        existingStockMap[currentStockName] = {
          val: currentStockValue,
          history: [stockHistoryItem],
        };
      }
    }
    return existingStockMap;
  };

  const receiveStockData = (feed: any) => {
    const stockInputData = JSON.parse(feed.data);
    setStockMap(getStockMap(stockInputData));
  };

  /**
   * Fetch Data via Websocket
   */
  React.useEffect(() => {
    const connection = new WebSocket(ENDPOINT);
    connection.onmessage = receiveStockData;
    return () => connection.close();
  });

  const handleClick = (
    stockName: string,
    stockHistory: Array<IStockHistory>
  ) => {
    const selectStock: ISelectedStock = {
      name: stockName,
      history: stockHistory,
    };
    setSelectedStock(selectStock);
  };

  return (
    <div>
      <div className="container">
        <div className="row flex-spaces">
          <div className="col-3">
            {stockMap && (
              <StockTable stockMap={stockMap} handleClick={handleClick} />
            )}
          </div>
          <div className="col-5">
            <Graph selectedStock={selectedStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
