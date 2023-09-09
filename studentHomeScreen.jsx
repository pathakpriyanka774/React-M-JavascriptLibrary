import React,{Component} from "react";
import StdForm from "./StudentForm(task5)";
import MrkForm from "./MarksForm(task5)";
class HomeScreen1 extends Component{
    state={
        arr:[],
        view:0,
        editCourseIndex:-1,
        editstdIndex:-1,
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
    entermrks=(index)=>{
        let s1={...this.state};
        s1.view=3;
        s1.editstdIndex=index;
        this.setState(s1);
    }
    editList=(index)=>{
        let s1={...this.state};
        s1.view=3;
        s1.editstdIndex=index;
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
    handleMarks=(mrks)=>{
         
        let s1={...this.state}; 
        s1.arr[s1.editstdIndex].totmark.pop();
        s1.arr[s1.editstdIndex].totmark=mrks;
       console.log( s1.arr[s1.editstdIndex].totmark);
        s1.view=4;
        s1.editstdIndex=-1;
        this.setState(s1);

    }
    render(){
        let crs={name:"",course:"",year:"",totmark:["No Data"]};
        let mrks=[{maths:0,english:0,computer:0,science:0}];
        let str2="";
        let {arr,view,editCourseIndex,editstdIndex,str1}=this.state;
            const map1=arr.map((n1,index)=>{
                let totm='';
                if(n1.totmark!="No Data"){
                let {maths=0,english=0,computer=0,science=0}=n1.totmark;
                console.log(maths);
                totm=(+maths)+( +english)+( +computer)+( +science);
                console.log(totm);
                }
                else{
                    totm=n1.totmark;
                }
                let str1=<div className="row">
                    <div className="col-md-2 border">{n1.name}</div>
                <div className="col-md-2 border">{n1.course}</div>
                <div className="col-md-2 border">{n1.year}</div>
                <div className="col-md-2 border">{totm}</div>                
                <div className="col-md-2 border">{n1.totmark=="No Data" ? 
                <button className="btn mybtn" onClick={()=>this.entermrks(index)}>Enter</button>:<button className="btn mybtn" onClick={()=>this.editList(index)}>Edit</button>}</div></div>
                return str1;
            });
            if(arr.length==0){
                str2=<h3>There are ZERO Student</h3>
            }
            else{
            str2=<React.Fragment><div className="row"><div className="col-md-2  bg-dark text-white ">Name</div>
            <div className="col-md-2  bg-dark text-white">Course</div>
            <div className="col-md-2  bg-dark text-white">Year</div>
            <div className="col-md-2  bg-dark text-white">Total Marks</div>
            <div className="col-md-2  bg-dark text-white"></div></div>{map1}</React.Fragment>
            }
            
        return(
            <React.Fragment>
            <React.Fragment>
            <button className="btn btn-primary" onClick={()=>this.clickHandle()}>New Student</button>
            <button className="btn btn-primary" onClick={()=>this.clickList()}>List of Student</button>
            </React.Fragment>
            {view==1?<StdForm crs={editCourseIndex>=0 ? arr[editCourseIndex]:crs} onSubmit={this.handlecourse} />
          
            :view==2? str2:view==3?<MrkForm name={arr[editstdIndex].name} mrks={editstdIndex>=0 ? arr[editstdIndex].totmark:mrks} onSubmit={this.handleMarks} /> :<h4>Welcome to the Student Management System</h4>}
            {str1}
            </React.Fragment>
        )
    }
    }
export default HomeScreen1;