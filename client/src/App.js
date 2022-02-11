import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Main from "./screens/Main";
import Landing from "./screens/Landing";
import Movies from "./components/Movies";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/search' element={<Main />}>
        <Route path=':keyword' element={<Movies />} />
      </Route>

      <Route path='*' element={<Landing />} />
    </Routes>
  );
}

export default App;
