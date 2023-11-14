import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/addrecord" element={<Add/>}></Route>
        <Route path="/viewrecord/:id" element={<View/>}></Route>
        <Route path="/editrecord/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
