import React,{Component} from "react";
class CodelistModefied extends Component{
state={
    codetype:-1,
    codeTypes:["Code:ABC123","Code:0-9","Code:MN012"],
    codeMaker:[["A","B","C",1,2,3],[0,1,2,3,4,5,6,7,8,9],["M","N",0,1,2]],
   codes:[],
   newCode:'',
};
viewFun=(n1)=>{
    let s1={...this.state};
    s1.codetype=n1;
    this.setState(s1);
}
codeGen=(n1)=>{
    let s1={...this.state};
s1.newCode=s1.newCode+n1;
this.setState(s1);
}
codeAdd=(n1)=>{
    let s2={...this.state};
    const ft=s2.codes.find((n1)=>{
        if(n1==s2.newCode)
        return n1;
    });
    if(ft!=undefined){
        alert("Code Already Exist!");
    }
    else{
    s2.codes.push(s2.newCode);
    s2.newCode='';
    s2.codetype=-1;
    this.setState(s2);
    }
}
clearcode=()=>{
     let s2={...this.state};
s2.newCode='';
s2.codetype=-1;
this.setState(s2);
}
render(){
    let {codetype,codeTypes,codeMaker,codes,newCode}=this.state;
    let btnMap='';
    let str1='';
    let str3='';
    let str4='';
    let list='';
    if(codetype==-1){
       btnMap= codeTypes.map((n1,index)=>{
        let str=<button className="btn btn-primary m-2" onClick={()=>this.viewFun(index)}>{n1}</button>
           return str;  
    }); 
}
else{
       btnMap= codeMaker[codetype].map((n1,index)=>{
        let str=<button className="btn btn-warning m-2" onClick={()=>this.codeGen(n1)}>{n1}</button>
           return str;  
    });
    str1=<React.Fragment><h5>Code Type:{codeTypes[codetype]}</h5><h6>Code so far:{newCode}</h6></React.Fragment>
    str3=<React.Fragment><button className="btn btn-primary m-2" onClick={()=>this.codeAdd(newCode)}>Add New Code</button>
    <button className="btn btn-primary m-2" onClick={()=>this.clearcode()}>Clear Code</button></React.Fragment>
}
const codeMap=codes.map((n1)=>{
    let str=<h5><li>{n1}</li></h5>
    return str;
});
list=<ul>{codeMap}</ul>
    return(
        <React.Fragment>
            <h3>Create New Code</h3>
            {str1}<br/>
{btnMap}<br/>
{str3}{str4}<br/>
<h3>List of Code Created</h3>
{list}
        </React.Fragment>
    )
}
}
export default CodelistModefied;