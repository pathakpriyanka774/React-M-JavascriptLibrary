import React,{Component} from "react";
class Jsl5 extends Component{
state={
    codetype:-1,
    codeTypes:["UpperCase","LowerCase","Digits","Special"],
    codeMaker:[["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],[1,2,3,4,,5,6,7,8,9,0],["@","#","$","%","^","&","*","(",")"]],
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
    let btnMap2
    let str3='';
    let str4='';
    let list='';
     let  btnMap1= codeTypes.map((n1,index)=>{
        let str=<button className="btn btn-primary m-2" onClick={()=>this.viewFun(index)}>{n1}</button>
           return str;  
    }); 
    if(codetype!=-1){
        btnMap2= codeMaker[codetype].map((n1,index)=>{
        let str=<button className="btn2 m-1" onClick={()=>this.codeGen(n1)}>{n1}</button>
           return str;  
    });
}
const codeMap=codes.map((n1)=>{
    let str=<h5><li>{n1}</li></h5>
    return str;
});
list=<ul>{codeMap}</ul>
    return(
        <React.Fragment>
            <p className="col-md-5">{btnMap1}</p>
            <h4 className="col-md-6 border p-2 m-2">Text:{newCode}</h4>
           <p className="col-md-5">{btnMap2}</p>

{str3}{str4}<br/>
{list}
        </React.Fragment>
    )
}
}
export default Jsl5;