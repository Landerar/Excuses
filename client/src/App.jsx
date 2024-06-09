import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ExcuseGenerator from "./components/ExcuseGenerator.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Navbar from "./components/Navbar.jsx";
import AddExcusePart from "./components/AddExcusePart.jsx";

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/add-excuse-part" element={<AddExcusePart/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<ExcuseGenerator/>}/>
      </Routes>
    </Router>
  );
}

export default App