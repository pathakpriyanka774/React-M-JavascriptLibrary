import React,{Component} from "react";
import Deal from "./dealMobile";
class Productlist extends Component{
state={
    dealarr:[{name:"Redmi 6",mem:"(Upto 64GB)",property:"Dual Rear Cam|3000mAh",price:7499},
    {name:"Realme 3",mem:"(Upto 4GB)",property:"Dual Rear Cam|4230mAh",price:8999},
    {name:"Honor 7S",mem:"(2GB | 16GB)",property:"Face Unlock|30320mAh",price:5499},
    {name:"Samsung J6",mem:"(4GB|64GB)",property:"14.22cm HD|Face Unlock",price:9490},
    {name:"Moto One ",mem:"(4GB|64GB)",property:"Extra 2000 off on Exchange",price:13999},
    {name:"Nokia 6.1",mem:"(3GB|32GB)",property:"Full HD Display|SD630",price:13999}

],
cart:[],
};
handlecart=(index,name)=>{
    let s1={...this.state};
    let fd=s1.cart.findIndex((n2,id1)=>{
        if(n2.name==name)
        return n2;
    });
    console.log(fd);
    if(fd!=-1){
        s1.cart[fd].qty=s1.cart[fd].qty+1;
    }
    else{
        s1.cart.push({name:name,qty:1,price:s1.dealarr[index].price});
    }
    this.setState(s1);
}
removeCart=(index)=>{
    let s1={...this.state};
    s1.cart.splice(index,1);
    this.setState(s1);

}
render(){
    let {dealarr,cart}=this.state;
    let ct1='';
    let item='';
    let value='';
    if(cart.length==0){
        ct1="Cart is Empty";
    }
    else{
        ct1=cart.map((n1,index)=>{
            return <li>{n1.name},quantity : {n1.qty} <button onClick={()=>this.removeCart(index)}>Remove from Cart</button></li>;
        });
        item="Number of items in cart ="+cart.reduce((acc,curr)=>{
            acc=acc+curr.qty;
            return acc;
        },0);
        value="Value of cart = "+cart.reduce((acc,curr)=>{
            acc=acc+(curr.qty*curr.price);
            return acc;
        },0);

    }
    return(
        <React.Fragment>
            <div className="container">
            <h3 className="text-center">Exciting Deals on Mobiles</h3>
                <div className="row text-center mydiv">
                {  
                    dealarr.map((n1,index)=><Deal name={n1.name} mem={n1.mem} property={n1.property} price={n1.price} index={index} oncart={this.handlecart}/>)
                }
                </div>
                <h3 className="mydiv">Cart</h3>
                <h4 className="mydiv"><ul>{ct1}</ul></h4>
                <h4 className="mydiv">{item}</h4>
                <h4 className="mydiv">{value}</h4>

            </div>
        </React.Fragment>

    )
}


}
export default Productlist;