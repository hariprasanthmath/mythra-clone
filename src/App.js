import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import ProductListPage from './Pages/ProductListPage';
import Navbar from './Components/Navbar/Navbar';
import ProductDetailsPage from './Pages/ProductDetailsPage';
function App() {
  return (
    <>
    <Navbar/>
     <BrowserRouter>
     <Routes>
        {/* <Route path="/product" element={<ProductListPage/>}> */}
           <Route path='' element={<Navigate to="mens"/>}></Route>
           <Route path="mens" element={<ProductListPage/>}></Route>
        {/* </Route> */}
        <Route path="/products">   
                 <Route path=":id" element={<ProductDetailsPage/>}></Route>
           </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
