import React, {Component} from "react";
class Quest8new extends Component{
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
            let str=<div className="col-md-6 border bg-light"><h4 className="h4mg">{n1.name}</h4><br/>Department : {n1.dept}<br/>Designation : {n1.designation}</div>;
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
         let arrOps=myarr.reduce((acc,curr)=>{
            if(curr.dept=="Ops"){
                acc=acc+1; 
            }
            return acc;
         },0);
         let arrsal=myarr.reduce((acc,curr)=>{
                acc=acc+curr.salary;
            return acc;
         },0);
         let arrmx=myarr.reduce((acc,curr)=>{
            let max=acc;
            if(max<curr.salary){
                max=curr.salary;
            }
            return max;  
     },0);
     let minvalue=this.state.employees.reduce((acc,curr)=>{
        if(acc.salary>curr.salary){
            acc=curr;
            return acc;
        }
        else{
            return acc;
        }
        });
        console.log(minvalue.salary);
    const avgsal= arrsal/arremp;   
        return (
        <React.Fragment><div className="container">
      <div className="row border text-center">{arr}</div>
     <div className="row bg-warning text-center">
        <div className="col-md-6 "><h5 className="h5mg">Employee Details</h5>
        <br/>Number of Employee : {arremp}<br/>Tech :{arrtech}
        <br/>Fin : {arrFin}<br/>Ops : {arrOps}</div>
        <div className="col-md-6 "><h5 className="h5mg">Salary Details</h5>
        <br/>Total Salary : {arrsal}<br/>Average salary : {avgsal}<br/>Max Salary : {arrmx}<br/>Min Salary : {minvalue.salary}</div>
     </div></div>
     </React.Fragment>
      )  
    }
 render(){
   
return(
    <React.Fragment>
        <h3 className="text-center">Welcome to the Employee Portal</h3>
        { this.tblefun(this.state.employees)}
    </React.Fragment>
)
 }
}
export default Quest8new;