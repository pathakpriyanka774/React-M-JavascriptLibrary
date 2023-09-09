import React,{Component} from "react";
import Task3 from "./RCT-A1(5)task3";
class Task3main extends Component{
    state={
        arr:[],
        view:0,
        editCourseIndex:-1,

    }
    clickHandle=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
        
    };
    editList=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editCourseIndex=index;
        this.setState(s1);
    }
    handlecourse=(crs)=>{
        let s1={...this.state};
        s1.editCourseIndex>=0 ? (s1.courses[s1.editCourseIndex]=crs):
        s1.arr.push(crs);
        s1.view=0;
        s1.editCourseIndex=-1;
        this.setState(s1);
        
        

    }
    render(){
        let str='';
        let crs=[];
        let {arr,view,editCourseIndex}=this.state;

        if(arr.length==0)
        {
            str=<h5>There is zero Courses</h5>
        }
        else{
            const map1=arr.map((n1,index)=>{
                let str1=<li>{n1}<button className="btn btn-warning" onClick={()=>this.editList(index)}>Edit</button></li>
                return str1;
            });
            str=<ul>{map1}</ul>;
        }
        return(
            <React.Fragment>
                {view==0?<button className="btn btn-primary" onClick={()=>this.clickHandle()}>Add Course</button>:
            <Task3 crs={editCourseIndex>=0 ? arr[editCourseIndex]:crs} onSubmit={this.handlecourse} />}

            <h4>List of Courses</h4>
            {str}
            </React.Fragment>
        )
    }
    }


export default Task3main;