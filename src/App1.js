import { useState, useEffect } from "react";


// Effect란? (1)
function App1() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount((current) => current + 1);
  }
  console.log("i run this every render",);  // 컴포넌트 function의 코드들은 렌더링되면 매번 호출하게 된다.

  const iRunOnlyOnce = () => {
    console.log("i run this only once",);
  }

  useEffect(() => { // 이를 방지하기 위해서는 effect라는 fuctnion을 사용해서, 안에 기술하면 렌더링 마다 실행을 피할 수 있다.
    iRunOnlyOnce();
  }, []);

  return (
    <div>
      {count}
      <button
        onClick={countUp}
      >count Up</button>
    </div>
  );
}

export default App1;
