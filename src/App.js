import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import ProductListPage from './Pages/ProductListPage';
import Navbar from './Components/Navbar/Navbar';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import { useSelector } from 'react-redux';
function App() {
  
  let {currentPage} = useSelector(State=>State);

  return (
    
    <>
    <Navbar/>
    {
      currentPage ? <ProductListPage/> : <ProductDetailsPage/>
    }
    
    
    </>
  );
}

export default App;
