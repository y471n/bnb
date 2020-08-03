import * as React from "react";

const ENDPOINT = "ws://stocks.mnet.website/";

const Home = () => {
  const receiveStockData = (feed: any) => {
    const stockInputData = JSON.parse(feed.data);
    console.log(stockInputData);
  };
  React.useEffect(() => {
    const connection = new WebSocket(ENDPOINT);
    connection.onmessage = receiveStockData;

    return () => connection.close();
  });
  return (
    <>
      <h1>Bulls & Bears</h1>
    </>
  );
};

export default Home;
