import React,{Component} from "react";
class PriceData extends Component{
state={
    priceData: [{ name: "Perk", category:"Food", oldPrice: 10,newPrice: 10 },
    { name: "5Star", category:"Food", oldPrice: 15, newPrice: 12 },
     { name: "Pepsi", category:"Drink", oldPrice: 20, newPrice: 22 },
     { name: "Maggi", category:"Food", oldPrice: 12, newPrice: 15 },
     { name: "Coke", category:"Drink", oldPrice: 20, newPrice: 20 },
     { name: "Gems", category:"Food", oldPrice: 10, newPrice: 10 },
     { name: "7Up", category:"Drink", oldPrice: 15, newPrice: 17 },
     { name: "Lindt", category:"Food", oldPrice: 80, newPrice: 90 },
     { name: "Nutties", category:"Food", oldPrice: 20, newPrice: 18 },
     { name: "Slice", category:"Drink", oldPrice: 18, newPrice: 16 }],
     sortsts:"Not Sorted",
     array:[],
};
sort=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts,array}=s2;
         if(n==0){
        s2.sortsts="Sorted by Name ";
         }
         else if(n==1){
            s2.sortsts="Sorted by Category ";
         }
         else if(n==2){
            s2.sortsts="Sorted by Old Price ";
         }
         else{
            s2.sortsts="Sorted by New Price ";
         }
    switch(n){
      case 0:priceData.sort((p1,p2)=>p1.name.localeCompare(p2.name));break;
      case 1:priceData.sort((p1,p2)=>p1.category.localeCompare(p2.category));break;
      case 2:priceData.sort((p1,p2)=>p1.oldPrice-p2.oldPrice);break;
      case 3:priceData.sort((p1,p2)=>((p1.newPrice)-(p2.newPrice)));break;
    }
    this.setState(s2);
  };
  allfilter1=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts,array}=this.state;
    s2.sortsts="Category : Food";
    const ftp=priceData.filter((n1)=>{
        if(n1.category=="Food"){
            return n1;
        }
    });
    s2.array=ftp;
    this.setState(s2);
  }
  allfilter2=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts}=this.state;
    s2.sortsts="Category : Drink";
    const ftp=priceData.filter((n1)=>{
        if(n1.category=="Drink"){
            return n1;
        }
    });
    s2.array=ftp; 
    this.setState(s2);

}
allfilter3=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts,array}=this.state;
    s2.sortsts="Price Increase";
    const ftp=priceData.filter((n1)=>{
        if(n1.oldPrice>n1.newPrice){
            return n1;
        }
    });
    s2.array=ftp;
    this.setState(s2);
  }
  allfilter4=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts,array}=this.state;
    s2.sortsts="Price Decrease";
    const ftp=priceData.filter((n1)=>{
        if(n1.oldPrice<n1.newPrice){
            return n1;
        }
    });
    s2.array=ftp;
    this.setState(s2);
  }
  allfilter5=(n)=>{
    let s2= {...this.state};
    let {priceData,sortsts,array}=this.state;
    s2.sortsts="Price Same";
    const ftp=priceData.filter((n1)=>{
        if(n1.oldPrice==n1.newPrice){
            return n1;
        }
    });
    s2.array=ftp;
    this.setState(s2);
  }
render(){
let {priceData,sortsts,array}=this.state;
let tmap='';
if(array==''){
 tmap=priceData.map((n1)=>{
    let str=<div className="row"><div className="col-md-2 border">{n1.name}</div>
    <div className="col-md-2 border">{n1.category}</div>
    <div className="col-md-2 border">{n1.oldPrice}</div>
    <div className="col-md-2 border">{n1.newPrice}</div></div>
    return str;
});  
}
else{
 tmap=array.map((n1)=>{
    let str=<div className="row"><div className="col-md-2 border">{n1.name}</div>
    <div className="col-md-2 border">{n1.category}</div>
    <div className="col-md-2 border">{n1.oldPrice}</div>
    <div className="col-md-2 border">{n1.newPrice}</div></div>
    return str;
});  
}
return(
<React.Fragment>
    <div className="container">   
        <h4>{sortsts}</h4>
        <button className="btn btn-primary m-2" onClick={()=>this.allfilter1(0)}>Food</button> 
        <button className="btn btn-primary m-2" onClick={()=>this.allfilter2(1)}>Drink</button>
        <button className="btn btn-primary m-2" onClick={()=>this.allfilter3(2)}>Increase</button>
        <button className="btn btn-primary m-2" onClick={()=>this.allfilter4(3)}>Decrease</button>
        <button className="btn btn-primary m-2" onClick={()=>this.allfilter5(4)}>Same</button>
        <div className="row">
    <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(0)}>Name</div>
    <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(1)}>Category</div>
    <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(2)}>Old Price</div>
    <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(3)}>New Price</div>
    </div>
        {tmap}</div>
</React.Fragment>
)
}
}
export default PriceData;