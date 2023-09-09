import React, {Component} from "react";
class Prodcart extends Component{
state={
    products:[
        {name:"Pepsi",price:20},
        {name:"Dairy Milk",price:40},
        {name:"Maggi",price:15},
        {name:"Snickers",price:50},
        {name:"Nescafe",price:100},
    ],
    cart:[],
};
showCart=()=>{
    const {cart}=this.state;
    if(cart.length===0)return <h4>Cart is Empty</h4>
    return(
        <ul>
            {cart.map((item)=>{
                let {name,price,qty}=item;
                return <li>{name},price={price},qty={qty}</li>
            }
            )}
        </ul>
    )
};
addToCart=(index)=>{
let s1={...this.state};
let pr=s1.products[index];
let x1=s1.cart.find((c1=>c1.name==pr.name));
x1?x1.qty=x1.qty+1:s1.cart.push({...pr,qty:1});
this.setState(s1); 
};
showProducts=()=>{
    const {products}=this.state;
    return(
        <React.Fragment>
<div className="row bg-dark text-white">
    <div className="col-4">Name</div>
    <div className="col-4">Price</div>
    <div className="col-4"></div>
</div>
{products.map((pr,index)=>{
    let {name,price}=pr;
    return(
        <div className="row border">
        <div className="col-4">{name}</div>
        <div className="col-4">{price}</div>
        <div className="col-4"><button className="btn btn-primary btn-sm" onClick={()=>this.addToCart(index)}>Add</button></div>
    </div> 
    )
})}
</React.Fragment>
    );   
};
render(){
return (<React.Fragment>
{this.showCart()}
{this.showProducts()}
</React.Fragment>
)
}
}
export default Prodcart;