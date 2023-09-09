
import React,{Component} from "react";
class Prod7 extends Component{
    state = {
        products:[{ name: "Perk", price: 10, sales: 7 },
        { name: "5Star", price: 15, sales: 9 },
        { name: "Pepsi", price: 20, sales: 20 },
        { name: "Maggi", price: 12, sales: 15},
        { name: "Coke", price: 20, sales: 50 },
        { name: "Lindt", price: 80, sales: 4 }],
       sortsts:"Not Sorted",
       array:[],
    };
    sort=(n)=>{
        let s2= {...this.state};
        let {products,sortsts,array}=s2;
             if(n==0){
            s2.sortsts="Sorted by Name ";
             }
             else if(n==1){
                s2.sortsts="Sorted by Price ";
             }
             else if(n==2){
                s2.sortsts="Sorted by Sales ";
             }
             else{
                s2.sortsts="Sorted by Value ";
             }
        switch(n){
          case 0:products.sort((p1,p2)=>p1.name.localeCompare(p2.name));break;
          case 1:products.sort((p1,p2)=>p1.price-p2.price);break;
          case 2:products.sort((p1,p2)=>p1.sales-p2.sales);break;
          case 3:products.sort((p1,p2)=>((p1.sales*p1.price)-(p2.sales*p2.price)));break;
        }
        this.setState(s2);
      };
      allfilter1=(n)=>{
        let s2= {...this.state};
        let {products,sortsts,array}=this.state;
        s2.sortsts="Filter : Price>=15";
        const ftp=products.filter((n1)=>{
            if(n1.price>=15){
                return n1;
            }
        });
        s2.array=ftp;
        this.setState(s2);
      }
      allfilter2=(n)=>{
        let s2= {...this.state};
        let {products,sortsts}=this.state;
        s2.sortsts="Filter : Sales>=10";
        const ftp=products.filter((n1)=>{
            if(n1.sales>=10){
                return n1;
            }
        });
        s2.array=ftp; 
        this.setState(s2);
 
    }
    allfilter3=(n)=>{
        let s2= {...this.state};
        let {products,sortsts,array}=this.state;
        s2.sortsts="Filter : Value>=100";
        const ftp=products.filter((n1)=>{
            if(n1.sales*n1.price>=100){
                return n1;
            }
        });
        s2.array=ftp;
        this.setState(s2);
      }
render(){
    let {products,sortsts,array}=this.state;
let tmap='';
    if(array==''){
     tmap=products.map((n1)=>{
        let str=<div className="row"><div className="col-md-2 border">{n1.name}</div><div className="col-md-2 border">{n1.price}</div>
        <div className="col-md-2 border">{n1.sales}</div>
        <div className="col-md-2 border">{n1.sales*n1.price}</div></div>
        return str;
    });  
}
else{
     tmap=array.map((n1)=>{
        let str=<div className="row"><div className="col-md-2 border">{n1.name}</div><div className="col-md-2 border">{n1.price}</div>
        <div className="col-md-2 border">{n1.sales}</div>
        <div className="col-md-2 border">{n1.sales*n1.price}</div></div>
        return str;
    });  

}
return(
    <React.Fragment>
        <div className="container">   
            <h4>{sortsts}</h4>
            <button className="btn btn-primary m-2" onClick={()=>this.allfilter1(0)}>Price>=15</button> 
            <button className="btn btn-primary m-2" onClick={()=>this.allfilter2(1)}>Sales>=10</button>
            <button className="btn btn-primary m-2" onClick={()=>this.allfilter3(2)}>Value>=100</button>
            <div className="row">
        <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(0)}>Name</div>
        <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(1)}>Price</div>
        <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(2)}>Sales</div>
        <div className="col-md-2 bg-dark text-white border" onClick={()=>this.sort(3)}>Value</div>
        </div>
            {tmap}</div>

    </React.Fragment>
)

}

}
export default Prod7;