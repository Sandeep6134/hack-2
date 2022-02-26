import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>  
          </Routes></BrowserRouter>
    </div>
  );
}

export default App;
