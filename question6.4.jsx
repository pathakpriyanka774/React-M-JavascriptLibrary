import React, {Component} from "react";
class Quest6new extends Component{
    state = {products: 
        [{ name: "Perk", quantity: 10, sales: 7 },
        { name: "5Star", quantity: 7, sales: 9 },
        { name: "Pepsi", quantity: 10, sales: 20 },
        { name: "Maggi", quantity: 41, sales: 22 },
        { name: "Coke", quantity: 18, sales: 50 }]};
        
        compasc=(n1,n2)=>{
            return n1.sales-n2.sales;
          }   
 render(){  
    let {products}=this.state;
    const Products1=[...products];
    Products1.sort(this.compasc);
    console.log(Products1);
    const arr =Products1.map((n1)=>{
        let str=<li><h5>Name : {n1.name} ,Quantity :{ n1.quantity} ,Sales : {n1.sales}</h5></li>
        return str;
    });
return(
<React.Fragment>
<h2>Sorted By Sales</h2>
<ul>{arr}</ul>
 
</React.Fragment>
)
}
}
export default Quest6new;