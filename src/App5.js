import { useState, useEffect } from "react";

// 수많은 데이터(코인) 파싱해서 그리기.
function App5() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // fetch로 파일 가져온다.
      .then((response) => response.json())          // json형태로 파싱한다.
      .then((json) => {                             // 파싱 완료되면
        setCoins(json)                              // state배열에 coin정보를 집어넣는다.
        setLoading(false);                          // 그 다음에 state값을 false로 바꿔준다.
      });
  }, [])    // 한번만 실행되도록 effect정의. 



  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading ...</strong> : null}
      <ul>
        {coins.map((coin) => <li key={coin.id}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App5;
