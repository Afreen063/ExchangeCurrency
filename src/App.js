
import './App.css';
import useState from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Exchange from './Components/Exchange/Exchange'



function App() {
        

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Exchange' element={<Exchange />}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
