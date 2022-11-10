
import './App.css';
import useState from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home.js'
import Exchange from './Components/Exchange.js'


function App() {
        const [userData, setUserData]=useState({});

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Exchange' element={<Exchange/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
