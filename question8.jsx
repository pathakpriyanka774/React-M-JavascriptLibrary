import React, {Component} from "react";
class Quest8 extends Component{
    state ={ employees : [{name:"Jack Smith", level:2, dept:"Tech", designation:"Manager", salary:24000},
    {name:"Mary Robbins", level:3, dept:"Fin", designation:"Manager", salary:28000},
    {name:"Steve Williams", level:4, dept:"Ops", designation:"President", salary:35000},
    {name:"Bob Andrews", level:1, dept:"Fin", designation:"Trainee", salary:16500},
    {name:"Dave Martin", level:2, dept:"Fin", designation:"Manager", salary:21700},
    {name:"Julia Clarke", level:3, dept:"Ops", designation:"Manager", salary:26900},
    {name:"Kathy Jones", level:4, dept:"Tech", designation:"President", salary:42500},
    {name:"Tom Bresnan", level:2, dept:"Tech", designation:"Manager", salary:22200}]
};
    tblefun=(myarr)=>{
        const arr=myarr.map((n1)=>{
            let str=<div class="row border text-center"><div class="col-md-3 border"><b>{n1.name}</b></div><div class="col-md-2 border"><b>{n1.level}</b></div>
            <div class="col-md-2 border"><b>{n1.dept}</b></div><div class="col-md-2 border"><b>{n1.designation}</b></div>
            <div class="col-md-2 "><b>{n1.salary}</b></div></div>
            return str;
         
         });
         const arremp=myarr.reduce((acc,curr)=>{
            acc=acc+1;
            return acc;
         },0);
         const arrtech=myarr.reduce((acc,curr)=>{
            if(curr.dept=="Tech"){
                acc=acc+1;
                
            }
            return acc;
         },0);
         const arrFin=myarr.reduce((acc,curr)=>{
            if(curr.dept=="Fin"){
                acc=acc+1;
                
            }
            return acc;
         },0);
         const arrOps=myarr.reduce((acc,curr)=>{
            if(curr.dept=="Ops"){
                acc=acc+1;
                
            }
            return acc;
         },0);
         const arrsal=myarr.reduce((acc,curr)=>{
                acc=acc+curr.salary;
            return acc;
         },0);
         const arrMaxSal=myarr.reduce((acc,curr)=>{
            if(curr.salary>acc)
            acc=curr.salary
        return acc;
     },0);
     const arrMinSal=myarr.reduce((acc,curr)=>{
        if(curr.salary<acc)
        acc=curr.salary
    return acc;
 });
    const avgsal= arrsal/arremp;   
         
        return (
        <React.Fragment><div className="container"><div class="row bg-primary text-white text-center">
        <div class="col-md-3 border"><h5>Name</h5></div>
     <div class="col-md-2 border"><h5>Level </h5></div>
     <div class="col-md-2 border"><h5>Department</h5></div>
     <div class="col-md-2 border"><h5>Designation</h5></div>
     <div class="col-md-2"><h5>Salary</h5></div>
     </div>{arr}
     <div class="row bg-warning text-center">
        <div class="col-md-6 "><b>Employee Details<br/>Number of Employee : {this.arremp}<br/>Tech : {this.arrtech}<br/>Fin : {this.arrFin}<br/>Ops : {this.arrOps}</b></div>
        <div class="col-md-6 "><b>Salary Details<br/>Total Salary : {this.arrsal}<br/>Average salary : {this.avgsal}<br/>Max Salary : {this.arrMaxSal}<br/>Min Salary : {this.arrMinSal}</b></div>
     </div></div>
     </React.Fragment>
      )  
    }
compasc=(n1,n2)=>{
    return n1.salary-n2.salary;
}
 render(){  
    this.state.employees.sort(this.compasc);
return(
    <React.Fragment>
        <h3 class="text-center">Welcome to the Employee Portal</h3>
       { this.tblefun(this.state.employees)}
    </React.Fragment>
)
 }
}
export default Quest8;