import { Route, Routes } from "react-router-dom";
import LoginUser from './components/Login';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginUser />} />
      </Routes>
    </>
  );
}

export default App;
