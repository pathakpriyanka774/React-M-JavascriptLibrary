
import React,{Component} from "react";
class AddingNums extends Component{
    state = {
        numbers : [1,3,5,7],
        expression : "",
        calcValue: 0,
        opt:'',
    };
    
clickt=(n1)=>{
let s1={...this.state};
let n2='';
if(s1.expression=='' && n1!="+" && n1!="*"){
    console.log(n1);
    s1.opt='';
    s1.expression=s1.expression+n1;
    s1.calcValue=s1.expression;
}
else if(s1.expression=='' && (n1=="+" || n1!="*")){
    console.log(n1);
    if(n1=="+"){
        s1.opt=n1;
        n2=n1;
        s1.expression='';
        s1.calcValue=s1.calcValue;
    }
    else{
        s1.opt=n1;
        n2=n1;
        s1.expression='';
        s1.calcValue=s1.calcValue;
    }
}
else if(s1.expression!='' && n1!="*" && n1!="+"){
    console.log(n1);
    let n2=s1.expression.substring(s1.expression.length-1,s1.expression.length);
        if(n2!="+" && n2!="*"){
            s1.expression=s1.expression+n1;
            s1.calcValue=eval(s1.expression);
        }
        else{
            if(n2=="+"){
                s1.opt='';
                s1.expression=s1.expression+n1;
                s1.calcValue=eval(s1.expression);
            }
            else if(n2=="*"){
                s1.opt='';
                s1.expression=s1.expression+n1;
                s1.calcValue=eval(s1.expression);
            } 
        } 
    }
    else if(s1.expression!='' && (n1=="+" || n1=="*")){
        let n2=s1.expression.substring(s1.expression.length-1,s1.expression.length);
        if(n2=="+" && n1=="+"){
            s1.expression=s1.expression;
        }
        else if(n2=="+" && n1=="*"){
            s1.expression=s1.expression.substring(0,s1.expression.length-1);
            s1.expression=s1.expression+n1;
        }
        else if(n2=="*" && n1=="*"){
            s1.expression=s1.expression;
        }
        else if(n2=="*" && n1=="+") {
           s1.expression= s1.expression.substring(0,s1.expression.length-1);
            s1.expression=s1.expression+n1;
        }
        else{
            s1.expression=s1.expression+n1; 
        }
        console.log(n1);
            s1.opt=n1;
            s1.calcValue=s1.calcValue;
}        
this.setState(s1);
};
   
render(){
    const {numbers,expression,calcValue,opt}=this.state;
 const btnMap=numbers.map((n1)=>{
       let str=<button className="btn btn-primary m-2 btn-lg" onClick={()=>this.clickt(n1)}>{n1}</button>;
       return str;
 });
return(
<React.Fragment>
<p class="paraa1">Operator : <button className="btn btn-primary m-2 btn-lg" onClick={()=>this.clickt('+')}>Add</button>
<button className="btn btn-primary m-2 btn-lg" onClick={()=>this.clickt('*')}>Multiply</button></p>
    {btnMap}<br/>
   <p className="paraa1">Operation ={opt}<br/>Expression =  {expression}<br/>
   Calculated Value = {calcValue}
   </p>
<br/>

</React.Fragment>

)

}

}
export default AddingNums;