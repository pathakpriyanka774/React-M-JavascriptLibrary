import React,{Component} from "react";
import CustForm from "./customerform(task5reactpart6)";
class HomeScreen2 extends Component{
    state={
        arr:[    
        ],
        view:0,
        editCustomerIndex:-1,
        editstdIndex:-1,
        str1:"",
       
    }
   
    showForm=()=>{
        let s1={...this.state};
        s1.editCustomerIndex=-1;
        s1.view=1;
        this.setState(s1);
    };
   
    handlecustomer=(optionsSel)=>{
        let s1={...this.state};
        let fd=s1.arr.find((n1)=>(n1.name==optionsSel.name));
        if(fd==undefined){
        s1.arr.push(optionsSel);
        }
        s1.view=0;
        this.setState(s1);
    }
    handleChnageOption = (optionSel) => {
        let s1={...this.state};
        s1.optionsSel=optionSel;
        this.setState(s1);
    };
    clickList=()=>{
        let s1={...this.state};
         s1.view=2;
         this.setState(s1);

    }
    edit=(index)=>{
        let s1={...this.state};
        s1.editCustomerIndex=index;
        s1.view=1;
        this.setState(s1);
    }
    
    render(){
        let str2="";
        let {arr,view,editCustomerIndex,editstdIndex,str1}=this.state;
            const map1=arr.map((n1,index)=>{
                let str1=<div className="row">
                    <div className="col-md-2 border">{n1.name}</div>
                <div className="col-md-2 border">{n1.gender}</div>
                <div className="col-md-2 border">{n1.deliveryopt}</div>
                <div className="col-md-2 border">{n1.payopt[0]}<br/>{n1.payopt[1]}<br/>{n1.payopt[2]}</div>                
                <div className="col-md-2 border">{n1.slot}</div>
                <div className="col-md-2 border"><button className="btn btn-primary" onClick={()=>this.edit(index)}>Edit</button></div>
                </div>
                return str1;
            });
            if(arr.length==0){
                str2=<h3>There are ZERO Customer</h3>
            }
            else{
            str2=<React.Fragment><div className="row"><div className="col-md-2  bg-dark text-white ">Name</div>
            <div className="col-md-2  bg-dark text-white">Gender</div>
            <div className="col-md-2  bg-dark text-white">Delivery</div>
            <div className="col-md-2  bg-dark text-white">Payments</div>
            <div className="col-md-2  bg-dark text-white">Slots</div>
            <div className="col-md-2  bg-dark text-white"></div></div>{map1}</React.Fragment>
            }  
        return(
            <React.Fragment>
            <React.Fragment>
            <button className="btn btn-primary ms-5" onClick={()=>this.showForm()}>New Customer</button>
            <button className="btn btn-primary" onClick={()=>this.clickList()}>List of Customer</button>
        
            </React.Fragment>    
            {view==1?<CustForm arr={arr} optionsSel={editCustomerIndex >= 0 ? arr[editCustomerIndex] :{name:"",gender:"",deliveryopt:"",payopt:[],slot:""}} 
             onSubmit={this.handlecustomer}
            onChangeOption={this.handleChnageOption}  edit={editCustomerIndex >= 0} />
            :view==2? str2:<h4>Welcome to the Customer System</h4>}
            {str1}
            </React.Fragment>
        )
    }
    }
export default HomeScreen2;