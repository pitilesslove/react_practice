import { useState, useEffect } from "react";

// Effect란? (2)
function App2() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const countUp = () => {
    setCount((current) => current + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  const iRunOnlyOnce = () => {
    console.log("i run this only once",);
  }

  useEffect(() => {
    iRunOnlyOnce();
  }, []);       // 비어있으면 맨 처음 한번 렌더링에서만 실행된다.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("Seaerch for ", keyword);
  }, [keyword]);  // keyword가 변경되었을 때에만 수행하게 한다.

  useEffect(() => {
    console.log("Change for count", count);
  }, [count]);    // count가 변경되었을 때에만 수행된다.

  useEffect(() => {
    console.log("Both arer changed", count, keyword);
  }, [keyword, count]); // 물론 둘다 설정해서 둘의 변화에 따라 호출도 가능하다.

  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search me..."
        onChange={onChange}
      />
      <h1>{count}</h1>
      <button
        onClick={countUp}
      >count Up</button>
    </div>
  );
}

export default App2;
