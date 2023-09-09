import React,{Component} from "react";
import Foodpannel from "./foodpannelquest8";
class FoodStatus extends Component{
    state={
        products :[{ id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
        { id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },
        { id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
        { id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
        { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
        { id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
        { id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
        { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
        { id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
        { id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
        { id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
        { id: "DOV044", name: "Dove", category: "Soap", stock: "yes" }],

catarr:["Food","Toothpaste","Soap","Shampoo"],
stsfilter:["yes","no","arriving"],
optionsSel:{
    
    pName:[],
    
},
sts1:{
sts:"",
},
    };
showProd = () =>{
        const {products,optionsSel,stsfilter,sts1}=this.state;
        const {pName}=optionsSel;
        const pd1=pName.length >0 ? products.filter((lt)=>optionsSel.pName.findIndex(r=>r===lt.category) >= 0):[];
        const pd2=sts1.sts.length >0 ? pd1.filter((lt)=>lt.stock===sts1.sts): pd1;
        return (
            <div className="container">
                <h4>Selected Products:{pName.join(",")}</h4>
                {
                    pd2.map((lt)=>(
                        <div className="row">
                            <div className="col-2 border">{lt.name}</div>
                            <div className="col-2 border">{lt.category}</div>
                            <div className="col-2 border">{lt.id}</div>
                            <div className="col-2 border">{lt.stock}</div>
                        </div>
                    ))}

            </div>
        );
    };
    handleChnageOption = (optionSel,s2) => {
        let s1={...this.state};
        s1.optionsSel=optionSel;
        s1.sts1.sts=s2.sts; 
        this.setState(s1);
    }
    render(){
        const {catarr,optionsSel,stsfilter,sts1}=this.state;
        return <div className="container">
            <div className="row">
                <div className="col-3 border bg-light">
                    <Foodpannel
                    optionsSel={optionsSel}
                     optionsArray={catarr}
                     stsfilter={stsfilter}
                     sts={sts1}
                      onChangeOption={this.handleChnageOption}
                       onClear={this.handleClear} />
                </div>
                <div className="col-9 border">{this.showProd()}</div>
            </div>
        </div>
    }
}
export default FoodStatus;