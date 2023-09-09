import React,{Component} from "react";
import ProductPannel from "./productPannelquest6";
class ProductQuest6 extends Component{
    state={
products : [{ id: "PEP110", name: "Pepsi", category: "Food", stock: true },
{ id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
{ id: "PEA531", name: "Pears", category: "Soap", stock: true },
{ id: "LU7264", name: "Lux", category: "Soap", stock: false },
{ id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
{ id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
{ id: "LI130", name: "Liril", category: "Soap", stock: true },
{ id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
{ id: "MAG441", name: "Maggi", category: "Food", stock: true }],
catarr:["Food","Toothpaste","Soap"],
optionsSel:{
    
    pName:[],
    
}
    };
showProd = () =>{
        const {products,optionsSel}=this.state;
        const {pName}=optionsSel;
        const pd1=pName.length >0 ? products.filter((lt)=>optionsSel.pName.findIndex(r=>r===lt.category) >= 0):[];
        return (
            <div className="container">
                <h4>Selected Products:{pName.join(",")}</h4>
                {
                    pd1.map((lt)=>(
                        <div className="row">
                            <div className="col-2 border">{lt.name}</div>
                            <div className="col-2 border">{lt.category}</div>
                            <div className="col-2 border">{lt.id}</div>
                            <div className="col-2 border">{lt.stock==true? "true":"false"}</div>
                        </div>
                    ))}

            </div>
        );
    };
    handleChnageOption = (optionSel) => {
        let s1={...this.state};
        s1.optionsSel=optionSel;
        this.setState(s1);
    }
    render(){
        const {catarr,optionsSel}=this.state;
        return <div className="container">
            <div className="row">
                <div className="col-3 border bg-light">
                    <ProductPannel
                    optionsSel={optionsSel}
                     optionsArray={catarr}
                      onChangeOption={this.handleChnageOption}
                       onClear={this.handleClear} />
                </div>
                <div className="col-9 border">{this.showProd()}</div>
            </div>
        </div>
    }
}
export default ProductQuest6;