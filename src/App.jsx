import "./App.css";

import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./Pages/Users.jsx";

function App() {

 return (
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="users/:username" element={<Users/>}/>
    </Routes>
   </Router>
  )
}

export default App;
