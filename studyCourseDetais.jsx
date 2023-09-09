import React,{Component} from "react";
class StudyCourse extends Component{
   state={
    mydtail1:{
        name:"",
        designation:"",
        collegename:"",
        course:"",
    },
    
    arr:["Working","Studing"],
    myarr:[],

   };

   handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state};
    console.log(input.value);
    input.type==="checkbox"?
    input.name==="mysts" ? (s1.my = this.updateCBs(input.checked,input.value,s1.myarr)) :(s1.myarr[input.name]=input.checked):
    s1.mydtail1[input.name]=input.value;
    if(!input.checked)
    {
        if(input.name=="Working"){
          
        }
    }
    this.setState(s1); 
   };
   updateCBs=(checked,value,arr)=>{
    if(checked) arr.push(value);
    else{
        let index=arr.findIndex(ele=>ele===value);
        if(index >=0){
            if(value=="Working"){
            this.state.mydtail1.name="";
            this.state.mydtail1.designation="";
            }
            else{
                this.state.mydtail1.collegename="";
            this.state.mydtail1.course="";

            }


        arr.splice(index,1);
        }
    }
    return arr;
};
handleSubmit=()=>{
    let s1={...this.state};
    let str=s1.mydtail1.name!="" ? " Company Name :"+s1.mydtail1.name:"";
    str+=s1.mydtail1.designation!="" ? "Degination : "+s1.mydtail1.designation:"";
    str+=s1.mydtail1.collegename!="" ? "College Name :"+s1.mydtail1.collegename:"";
    str+=s1.mydtail1.course!="" ? "Course : "+s1.mydtail1.course:"";
        alert(str);
   
    this.setState(s1);
   }
   render(){
    let {mydtail1,arr,myarr}=this.state;
    const map1=myarr.map((n1)=>{
        if(n1=="Working")
        {
            let str=<div className="container">
                <h3>Provide Job Details</h3>
                 <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" value={mydtail1.name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control" id="designation" name="designation" placeholder="Enter designation" value={mydtail1.designation} onChange={this.handleChange}/>
                </div>
            </div>
            return str;
        }
        else if(n1=="Studing"){
            let str=<div className="container">
                <h3>Provide Course Details</h3>
                 <div className="form-group">
                    <label>College Name</label>
                    <input type="text" className="form-control" id="name" name="collegename" placeholder="College Name" value={mydtail1.collegename} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Course</label>
                    <input type="text" className="form-control" id="course" name="course" placeholder="Enter course" value={mydtail1.course} onChange={this.handleChange}/>
                </div>
            </div>
            return str;

        }

    });
    return(
        <div className="container w-50 border">
            <h1>Provide Details below</h1>
                            {arr.map(t1=>(
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={t1} name="mysts" checked={myarr.findIndex((n1)=>n1===t1) >=0}
                                onChange={this.handleChange}/>
                                <label className="form-check-label">{t1}</label>
                            </div>
                            ) )}
                            {map1}
                            <br/>
                            <button className="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
                      

        </div>

    )

   }

}
export default StudyCourse;