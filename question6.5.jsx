import React, {Component} from "react";
class Quest6new1 extends Component{
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
    const arr =products.map((n1)=>{
        let str;
        if(n1.quantity>=n1.sales){
        let str=<tr className="trgreen"><td className="td2"><h5>{n1.name}</h5></td> <td className="td1"><h5>{ n1.quantity} </h5></td><td className="td1"><h5> {n1.sales}</h5></td></tr>;
        return str;
        }
        else{
            let str=<tr className="trred"><td className="td2"><h5>{n1.name}</h5></td> <td className="td1"><h5>{ n1.quantity} </h5></td><td className="td1"><h5> {n1.sales}</h5></td></tr>; 
            return str; 
        }
        
    });
    const sumquant=products.reduce((acc,curr)=>{
         acc=acc+curr.quantity;
        return acc;
    },0);
    const sumsal=products.reduce((acc,curr)=>{
         acc=acc+curr.sales;
        return acc;
    },0);

return(
<React.Fragment>
<h2 className="hpad">Table View</h2>
<table className="tb1">
    <tr className="thead">
        <td className="td2"><h5>Name</h5></td>
     <td className="td1"><h5>Quantity </h5></td>
     <td class="td1"><h5>Sales</h5></td>
     </tr>{arr}
<tr class="difftr">
    <td className="td2"><h5>Total</h5></td>
    <td className="td2"><h5>{sumquant}</h5></td>
    <td className="td2"><h5>{sumsal}</h5></td>
    </tr></table>
 
</React.Fragment>
)
}
}
export default Quest6new1;