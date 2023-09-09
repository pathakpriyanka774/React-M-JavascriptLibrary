import React,{Component} from "react";
import Task2lib2 from "./RCT-A1(5)task2";
class Maintask2 extends Component{
    state={
    courses:[
        {courseName:"React JS",discription:"pr course",duration:2,faculty:"Priya"},      
    ],
    viewCourseIndex:-1,
    editCourseIndex:1,
};
handleSubmit=(crs)=>{
    console.log(crs);
    let s1={...this.state};
    s1.courses.push(crs);
    const map1=s1.courses.map((n1)=>{
        console.log("Course Details Submitted. Name : " + n1.courseName + ", Description :"+n1.discription+" Duration : "+n1.duration+" Faculty :"+n1.faculty);
    });
     this.setState(s1);

}
render(){
    let course={courseName:"",discription:"",duration:"",faculty:""};
let {courses}=this.state;

return(
    <Task2lib2 arr={course} onSubmit={this.handleSubmit}/>
)


}


}
export default Maintask2;