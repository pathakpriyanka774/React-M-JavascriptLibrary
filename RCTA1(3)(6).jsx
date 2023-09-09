import React,{Component} from "react";
class Prodsold extends Component{
state={
    products:[{name:"Liril",sales:0},{name:"Lux",sales:0},{name:"Dove",sales:22},{name:"Pears",sales:25}],
    totsales:'',
};

sell=(name1)=>{
alert(name1+ " Sold");

}
rtnbtn=(name1)=>{
    alert(name1+" Returned");
}
totsell=(products)=>{
    let s1={...this.state};
    const tot=products.reduce((acc,curr)=>{
        acc=acc+curr.sales;
        return acc;
},0);
s1.totsales= <h1>Total Sales ={tot}</h1>
 this.setState(s1);
};
bestsale=(products)=>{
    let s1={...this.state};
    const tot=products.reduce((acc,curr)=>{
        if(acc.sales<curr.sales){
            acc=curr;
        }
        return acc;
});
s1.totsales= <h1>Best Sales ={tot.sales}</h1>
 this.setState(s1);
};

render(){
    let {products,totsales}=this.state;

    const listmap=products.map((n1)=>{
        if(n1.sales>0){
            let l1=<li className="lipad">Name: {n1.name}, Sales : {n1.sales} <button className="btn btn-primary"onClick={()=>this.sell(n1.name)}>Sell</button> <button className="btn btn-danger"onClick={()=>this.rtnbtn(n1.name)}>Return</button></li>;
            return l1;
        }
        else{
            let l1=<li className="lipad">Name: {n1.name}, Sales : {n1.sales} <button className="btn btn-primary"onClick={()=>this.sell(n1.name)}>Sell</button></li>;
        return l1;
        } 
    });
    let totsl1;
    if(totsales){
        totsl1=totsales;
    }
    else{
        totsl1='';
    }
    
return(
    <React.Fragment>
<h3>Sales Details</h3>
<button className="btn btn-primary"onClick={()=>this.totsell(products)}>Total Sales</button> <button className="btn btn-primary"onClick={()=>this.bestsale(products)}>Best Sales</button>
<ul>{listmap}</ul>
{totsl1}

   

</React.Fragment>
)
}
}
export default Prodsold;