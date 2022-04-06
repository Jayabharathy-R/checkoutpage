import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import App from'./App';
import CheckoutPage from './checkoutPage';
 
export default function router(){
    return(
        <div>
 <BrowserRouter>

 <Link to='/'>Homepage</Link>
 
 <Routes>

 <Route path='/' element={<App/>}></Route>
 <Route path='/checkoutPage' element={<CheckoutPage/>}></Route>
      
 </Routes>

 </BrowserRouter>
</div>
    );
}