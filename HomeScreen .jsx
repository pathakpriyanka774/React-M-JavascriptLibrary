import React,{Component} from "react";
import Customer from "./CustomerForm";
class HomeScreen extends Component{
    state={
        arr:[],
        view:0,
        editCourseIndex:-1,
        str1:"",

    }
    clickHandle=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
        
    };
    clickList=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1);
    }
    editList=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editCourseIndex=index;
        this.setState(s1);
    }
    handlecourse=(crs)=>{
        let s1={...this.state};
        s1.editCourseIndex>=0 ? (s1.arr[s1.editCourseIndex]=crs):
        s1.arr.push(crs);
        s1.view=0;
        s1.editCourseIndex=-1;
        this.setState(s1);
    }
    render(){
        let crs={name:"",age:"",email:""};
        let str2="";
        let {arr,view,editCourseIndex,str1}=this.state;
            const map1=arr.map((n1,index)=>{
                let str1=<div className="row"><div className="col-md-3 border">{n1.name}</div>
                <div className="col-md-3 border">{n1.age}</div><div className="col-md-3 border">{n1.email}</div>
                <div className="col-md-3 border"><button className="btn mybtn" onClick={()=>this.editList(index)}>Edit</button></div></div>
                return str1;
            });
            if(arr.length==0){
                str2=<h3>There are ZERO Customer</h3>
            }
            else{
            str2=<React.Fragment><div className="row"><div className="col-md-3  bg-dark text-white ">Name</div>
            <div className="col-md-3  bg-dark text-white">Age</div>
            <div className="col-md-3  bg-dark text-white">Email</div>
            <div className="col-md-3  bg-dark text-white"></div></div>{map1}</React.Fragment>
            }
            
        return(
            <React.Fragment>
            <React.Fragment>
            <button className="btn btn-primary" onClick={()=>this.clickHandle()}>New Customer</button>
            <button className="btn btn-primary" onClick={()=>this.clickList()}>List of Customer</button>
            </React.Fragment>
            {view==1?<Customer crs={editCourseIndex>=0 ? arr[editCourseIndex]:crs} onSubmit={this.handlecourse} />:view==2? str2  :<h4>Welcome to the Cutomer System</h4>}
            {str1}
            </React.Fragment>
        )
    }
    }


export default HomeScreen;