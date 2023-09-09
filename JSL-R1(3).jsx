import React, {Component} from "react";
class Jsl3 extends Component{
    state = {items: [{ name: "Liril", stock: 10, sales: 7, price: 10 },
    { name: "Dove", stock: 20, sales: 9, price: 20 },
    { name: "Pears", stock: 35, sales:20, price: 15 },
    { name: "Surf", stock: 45, sales: 22, price: 55 },
    { name: "Ariel", stock: 20, sales: 8, price: 40 },
    { name: "Tide", stock: 20, sales: 11, price: 35 },
    { name: "Nirma", stock: 30, sales: 21, price: 20 }
]};
sort=(n)=>{
    let s2= {...this.state};
    let {items}=s2;

    switch(n){
      case 0:items.sort((p1,p2)=>p1.name.localeCompare(p2.name));break;
      case 1:items.sort((p1,p2)=>p1.stock-p2.stock);break;
      case 2:items.sort((p1,p2)=>p1.sales-p2.sales);break;
      case 3:items.sort((p1,p2)=>(p1.stock-p1.sales)-(p2.stock-p2.sales));break;
      case 4:items.sort((p1,p2)=>p1.price-p2.price);break;
      case 5:items.sort((p1,p2)=>(p1.sales*p1.price)-(p2.sales*p2.price));break;
    }
    this.setState(s2);
    
  };

render(){
let {items}=this.state;
let numprod=0;
let totstksal=0;
let totsalval=0;
let totstkval=0;
let totsal=0;

const tmap=items.map((n1)=>{
    numprod=numprod+1;
    totstksal=totstksal+n1.stock;
    let stkleft=n1.stock-n1.sales;
    let salVal=n1.sales*n1.price;
    totsalval=totsalval+salVal;
    totsal=totsal+n1.sales;
    totstkval=totstkval+(n1.stock*n1.price);
let str=<div className="row "><div className="col-md-2 border ">{n1.name}</div><div className="col-md-2 border">{n1.stock}</div><div className="col-md-2 border">{n1.sales}</div><div className="col-md-2 border">{stkleft}</div><div className="col-md-2 border">{n1.price}</div><div className="col-md-2 border">{salVal}</div></div>
return str;

});
console.log(numprod);
const maxsal=items.reduce((acc,curr)=>{
if(curr.sales>acc.sales)
{
    acc=curr;
    
}
return acc;
});
const minsal=items.reduce((acc,curr)=>{
    if(curr.sales<acc.sales)
    {
        acc=curr;
        
    }
    return acc;
    });
    
const maxsalByval=items.reduce((acc,curr)=>{
    let accval=acc.sales*acc.price;
    let currval=curr.sales*curr.price;
    if(currval>accval)
    {
        acc=curr;
        
    }
    return acc;
    });
    const minsalByval=items.reduce((acc,curr)=>{
        let accval=acc.sales*acc.price;
        let currval=curr.sales*curr.price;
        if(currval<accval)
        {
            acc=curr;
            
        }
        return acc;
        });
       
        
    return(
<React.Fragment>
    <h3 className="text-center text-bold">Daily Sales Report for XYZ Enterprises</h3><b>
    <div className="row border bg-dark text-white"><div className="col-md-2 border" onClick={()=>this.sort(0)}>Name</div><div className="col-md-2 border" onClick={()=>this.sort(1)}>Stock</div><div className="col-md-2 border" onClick={()=>this.sort(2)}>Sales</div><div className="col-md-2 border" onClick={()=>this.sort(3)}>Stock Left</div><div className="col-md-2 border"onClick={()=>this.sort(4)}>Price</div><div className="col-md-2 border" onClick={()=>this.sort(5)}>Sales Value</div></div>
{tmap}
<div className="row border"><div className="col-md-3 border">Max Seller By Quantity<br/>
Name : {maxsal.name}<br/>
Quantity : {maxsal.sales}</div>
<div className="col-md-3 border">Max Seller By Value<br/>Name : {maxsalByval.name}<br/>
Quantity : {maxsalByval.sales*maxsalByval.price}</div>
<div className="col-md-3 border">Min Seller By Quantity<br/>
Name : {minsal.name}<br/>
Quantity : {minsal.sales}</div>
<div className="col-md-3 border">Min Seller By Value<br/>
Name : {minsalByval.name}<br/>
Quantity : {minsalByval.sales*minsalByval.price}</div>
</div>
<div className="row border"><div className="col-md-12 text-center">Number of Products : {numprod}<br/>
Total Stock By Quantity : {totstksal}<br/>
Total Stock By Value : {totstkval}<br/>
Total Sales By Quantity : {totsal}<br/>
Total Sales By Value : {totsalval}</div></div>
<div className="row border"><div className="col-md-12 text-center m-2"><button className="btn btn-primary">Close the Shop for the Day</button></div></div></b>

</React.Fragment>
    )
}
}
export default Jsl3;
