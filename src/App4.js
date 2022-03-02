import { useState, useEffect } from "react";

// 배열 만들어서 렌더링하기
function App4() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);  // 기존 배열에 toDo를 담는 방법.
    setToDo("");
  }

  console.log(toDos);

  return (
    <div>
      <h1>My ToDos {toDos.length}</h1>
      <form onClick={onSubmit}>
        <input
          type="text"
          placeholder="write toDo"
          onChange={onChange}
          value={toDo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <h2>아래처럼 state배열을 map으로 돌려서 생성할 수도 있다.</h2>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App4;
