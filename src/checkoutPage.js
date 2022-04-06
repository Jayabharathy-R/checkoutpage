import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";

export default function checkoutPage(){
 // const [itemNo,setItemNo]=React.useState(0);
 var itemNo=1,total=0;
  const location=useLocation();
 console.log(location.state.items);
  const checkoutItems=location.state.items;
  if(checkoutItems.length>0){
    return(
      <body>
        <div><h3 className="head">Checkout Page</h3>
        <table  >
          <thead className="head"> 
            <tr>
            <td>No</td>
            <td>Product Name</td>
            <td>Price</td>
            </tr>
          </thead>
          <tbody>
          {checkoutItems.map(item => {
            // console.log(item[0]);
           // setItemNo(itemNo+1);
           // console.log(itemNo)
           total=total+Number(item[0].price);
           console.log(total);
          return (
            <tr>
              <td>{itemNo++}</td>
              <td>{item[0].name}</td>
              <td>{item[0].price}</td>
            </tr>
          );
        })}
          <hr style={{width:"500%"}}></hr>
          <tr>
            <td colSpan={2}><i>Total amount&nbsp;&nbsp;:</i></td>
            <td>{total}</td>
            </tr>
          <tr>
           <td colSpan={2}><i> Gst(18%)&nbsp;&nbsp;:</i></td>
           <td>{(18/100)*total}</td>
            </tr>
            <hr style={{width:"500%"}}></hr>
            <tr>
              <td colSpan={2}><i>Total Amount Includes Gst<br/>(rounding off)</i></td>
              <td>{Math.round(((18/100)*total)+total)}</td>
              </tr>
            </tbody>
          
          </table>
        </div>
        </body>
    );
      }
      else{
        return(
          <body>
          <div id="emptyCart" >The cart is Empty</div>
          </body>
        )
      }
}