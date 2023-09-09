import React, {Component} from "react";
class Quest6 extends Component{
    state = {products: 
        [{ name: "Perk", quantity: 10, sales: 7 },
        { name: "5Star", quantity: 7, sales: 9 },
        { name: "Pepsi", quantity: 10, sales: 20 },
        { name: "Maggi", quantity: 41, sales: 22 },
        { name: "Coke", quantity: 18, sales: 50 }]};
         fun6=()=>{
               let {products}=this.state;
const arr = products.map((n1)=>{
    if(n1.sales>=n1.quantity){
    let str=<li><h5>Name : {n1.name} ,Quantity :{ n1.quantity} ,Sales : {n1.sales}</h5></li>
    return str;
    }
});
return arr;
         }

         
 render(){
           
return(
<React.Fragment>
<h2>Sales>=Quantity</h2>;
<ul>{this.fun6()}</ul>;
</React.Fragment>
)
        }
}
export default Quest6;