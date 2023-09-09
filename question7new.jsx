import React, {Component} from "react";
class Quest7new extends Component{
    state = {employees : [{name:"Jack Smith", level:2, dept:"Tech", designation:"Manager", salary:24000},
    {name:"Mary Robbins", level:3, dept:"Fin", designation:"Manager", salary:28000},
    {name:"Steve Williams", level:4, dept:"Ops", designation:"President", salary:35000},
    {name:"Bob Andrews", level:1, dept:"Fin", designation:"Trainee", salary:16500},
    {name:"Dave Martin", level:2, dept:"Fin", designation:"Manager", salary:21700},
    {name:"Julia Clarke", level:3, dept:"Ops", designation:"Manager", salary:26900},
    {name:"Kathy Jones", level:4, dept:"Tech", designation:"President", salary:42500},
    {name:"Tom Bresnan", level:2, dept:"Tech", designation:"Manager", salary:22200}]};
    tblefun=(myarr)=>{
        const arr=myarr.map((n1)=>{
            
            let str=<tr><td className="td2">{n1.name}</td><td className="td1">{n1.level}</td>
            <td className="td1">{n1.dept}</td><td className="td1">{n1.designation}</td>
            <td className="td1">{n1.salary}</td></tr>
            return str;
            
         
         });
        return <div className="container"><table className="tb1">{arr}</table></div>
        
    }
    compasc=(n1,n2)=>{
        return n2.level-n1.level;
      }  
 render(){  
    this.state.employees.sort(this.compasc);
return(
    
this.tblefun(this.state.employees)

)
 }
}
export default Quest7new;