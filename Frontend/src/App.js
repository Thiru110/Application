import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginpage } from "./pages/LoginPage/loginpage";
import Register from "./pages/RegisterPage/register";
import Main from "./pages/MainPage/main";
import Forgot from "./pages/FogotPassPage/forgot";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          {/* this url will be Placed in main page */}
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/forgotpass" element={<Forgot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
