import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ExcuseGenerator from "./components/ExcuseGenerator.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<home/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/excuse" element={<ExcuseGenerator/>}/>
      </Routes>
    </Router>
  );
}

export default App