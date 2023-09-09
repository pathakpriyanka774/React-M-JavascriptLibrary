import React,{Component} from "react";
import ProdFormVal from "./productFormValidation";
class MainCompProdVal extends Component{
    state={
        productarr:[{name:"colgate",desciption:"best quality toothpaste",code:"QZ1234",discount:"5%",price:45,category:"daily use"},
        {name:"Chilly souce",desciption:"best quality souce",code:"AY1234",discount:"10%",price:55,category:"food"},],
        view:0,
        editProductIndex:-1,
    };
    deleteProduct=(index)=>{
        let s1={...this.state};
        s1.productarr.splice(index,1);
        this.setState(s1);

    }
    editProduct=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editProductIndex=index;
        this.setState(s1);
    }
    handleproduct=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    };
    handleSubmit = (product) =>{
        let s1={...this.state};
        s1.editProductIndex >= 0 ?(s1.productarr[s1.editProductIndex]=product):s1.productarr.push(product);
        s1.view = 0;
        s1.editProductIndex = -1;
        this.setState(s1);
    };
    render(){
        let {productarr,view,editProductIndex}=this.state;
        const map1=productarr.map((n1,index)=>{
            let str=<div className="row border p-2">
                <div className="col-md-2">{n1.name}</div>
                        <div className="col-md-3">{n1.desciption}</div>
                        <div className="col-md-1">{n1.code}</div>
                        <div className="col-md-1">{n1.discount}</div>
                        <div className="col-md-1">{n1.price}</div>
                        <div className="col-md-1">{n1.category}</div>
                        <div className="col-md-3"><button className="btn btn-warning me-1" onClick={()=>this.editProduct(index)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=>this.deleteProduct(index)}>Delete</button></div>
            </div>
            return str;
        });
        return(
            <React.Fragment>
                {view==0 ? <React.Fragment><nav class="navbar navbar-expand-lg text-white bg-dark">
                    <h4>Number of Products {productarr.length}</h4></nav>
                    <br/>
                    
                    <div className="container">
                        <div className="row bg-dark text-white p-2 "><div className="col-md-2">Product Name</div>
                        <div className="col-md-3">Description</div>
                        <div className="col-md-1">Code</div>
                        <div className="col-md-1">Discount</div>
                        <div className="col-md-1">Price</div>
                        <div className="col-md-1">Category</div>
                       <div className="col-md-3"></div>
                        </div>
                        {map1}</div>
                       <div className="text-center"><button className="btn btn-primary p-2 m-5" onClick={()=>this.handleproduct()}> Add New Product</button></div></React.Fragment>:
                       <ProdFormVal onSubmit={this.handleSubmit}  product={editProductIndex >= 0 ? productarr[editProductIndex] : {name:"",desciption:"",code:"",discount:"",price:"",category:""}}
                       edit={editProductIndex >= 0} productarr={productarr} />}


            </React.Fragment>
        )
    }

}
export default MainCompProdVal;