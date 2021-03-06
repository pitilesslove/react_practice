import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Details from "./components/Details";

// Router 예제
// url로 값을 전달해줘야 하는 경우는?
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
