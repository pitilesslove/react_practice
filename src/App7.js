import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Details from "./components/Details";

// Router 예제
// npm install react-router-dom@6 설치
// url을 Router에서 분기해준다. 조건들을 가지는건 Routes에서 관장해준다.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
