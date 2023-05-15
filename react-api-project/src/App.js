import './App.css';
import Header from './components/Header';
import UsNews from './UsNews/UsNews';
import WorldNews from './WorldNews/WorldNews';
import SportNews from './SportNews/SportNews';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/us' element={<UsNews/>}/>
        <Route path='/world' element={<WorldNews/>}/>
        <Route path='/sport' element={<SportNews/>}/>
      </Routes>
      <Footer/>
    </>
    
      
  );
}

export default App;
