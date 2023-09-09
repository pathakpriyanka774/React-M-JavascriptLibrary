import React,{Component} from "react";
class Task1 extends Component{
    state={
        store:[{"product":"Pepsi", "sales":[2,5,8,10,5]},
        {"product":"Coke", "sales":[3,6,5,4,11,5]},
        {"product":"5Star", "sales":[10,14,22]},
        {"product":"Maggi", "sales":[3,3,3,3,3]},
        {"product":"Perk", "sales":[1,2,1,2,1,2]},
        {"product":"Bingo", "sales":[0,1,0,3,2,6]},
        {"product":"Gems", "sales":[3,3,1,1]}],
        arrlist:[],

    };
    sortby=(n1)=>{

        let s1={...this.state};
        
        switch(n1){
            case 0:s1.store.sort((n2,n3)=>n2.product.localeCompare(n3.product));break;
            case 1:s1.store.sort((n2,n3)=>{
                const Tsale1=n2.sales.reduce((acc,curr)=>{
                    acc=acc+curr;
                    return acc;
                },0);
                const Tsale2=n3.sales.reduce((acc,curr)=>{
                    acc=acc+curr;
                    return acc;
                },0);
                return Tsale1-Tsale2;
            });break;
            case 2:s1.store.sort((n2,n3)=>{
                const Tsale1=n2.sales.reduce((acc,curr)=>{
                    acc=acc+curr;
                    return acc;
                },0);
                const Tsale2=n3.sales.reduce((acc,curr)=>{
                    acc=acc+curr;
                    return acc;
                },0);
                return Tsale2-Tsale1;
            });break;
           
        }
        this.setState(s1);

    };
    detailsbtn=(n1)=>{
        let s1={...this.state};
        const fd=s1.arrlist.find((n2)=>{
            if(n2==n1){
                return n2;
            }
        });
        if(fd==undefined){
            s1.arrlist.push(n1);
        }
        this.setState(n1);
    }
    render(){
        let {store,arrlist}=this.state;
        const tmap=store.map((n1)=>{
            const Tsale=n1.sales.reduce((acc,curr)=>{
                acc=acc+curr;
                return acc;
            },0);
            let str=<div className="row w-50 border ms-2"><div className="col-md-4 ">{n1.product}</div><div className="col-md-4">{Tsale}</div>
            <div className="col-md-4"><button className="btn btn-primary" onClick={()=>this.detailsbtn(n1)} >Details</button></div></div>
            return str;
        });
        const list=arrlist.map((n1)=>{
            const val=n1.sales.map((n1)=>{
                return <li>{n1}</li>;
            });
            console.log(val);
            let str=<li>Product : {n1.product}, Sales :<ul>{val}</ul></li>
            return str;
        });
        return(
            <React.Fragment>
                <div className="container">
                <button className="btn btn-primary m-2" onClick={()=>this.sortby(0)}>Sort by Product</button>
                <button className="btn btn-primary m-2" onClick={()=>this.sortby(1)}>Total Sales Asc</button>
                <button className="btn btn-primary m-2" onClick={()=>this.sortby(2)}>Total Sales Desc</button>
                <div className="row bg-dark text-white w-50 border ms-2"><div className="col-md-4">Product</div><div className="col-md-4">Total Sales</div><div className="col-md-4"></div></div>
                {tmap}
                <ul>{list}</ul>
                </div>
            
            </React.Fragment>
        )
    }

}
export default Task1;