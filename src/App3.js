import { useState, useEffect } from "react";

// Effect란? (3)
function Hello() {
  useEffect(() => {
    console.log("Hello is created! :)");
    return () => console.log("destroyed :(")
  }, []);
  return (
    <h1>Hello</h1>
  );
}

function Hello2() {

  function byeFn() {
    console.log("Bye :(");
  }
  function helloFn() {
    console.log("Hello!! :)");
    return byeFn;                 // effect의 리턴의 코드는 해당 컴포넌트가 사라질때(destroyed될 때) 호출된다.
  }
  useEffect(helloFn, []);

  return (
    <h1>Hello</h1>
  );
}

function App3() {
  const [showing, setShowing] = useState(true);

  const onClick = () => {
    setShowing((current) => !current);
  }

  return (
    <div>
      {showing ? <Hello2 /> : null}
      <button
        onClick={onClick}
      >
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App3;
