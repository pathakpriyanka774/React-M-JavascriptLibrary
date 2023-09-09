import React,{Component} from "react";
class Codelist extends Component{
state={
    arr:["A","B","C","D",1,2,3],
    st1:'',
    stcode:[],

};
add=(n1)=>{
let s1={...this.state};
s1.st1=s1.st1+n1;
this.setState(s1);
}
addcode=()=>{
let s2={...this.state};
const ft=s2.stcode.find((n1)=>{
    if(n1==s2.st1)
    return n1;
});
if(ft!=undefined){
    alert("Code Already Exist!");
}
else{
s2.stcode.push(s2.st1);
s2.st1='';
this.setState(s2);
}
}
clearcode=()=>{
    let s2={...this.state};
s2.st1='';
this.setState(s2);

}
render(){
    let {arr,st1,stcode}=this.state;
    let list='';
    const btnMap=arr.map((n1)=>{
        let str=<button className="btn btn-warning m-3" onClick={()=>this.add(n1)}>{n1}</button>
        return str;
    });
    const codeMap=stcode.map((n1)=>{
        let str=<h5><li>{n1}</li></h5>
        return str;
    });
    list=<ul>{codeMap}</ul>
    
    return(
        <React.Fragment>
            <h3>Create new Code</h3>
            <h4>Code so far :{st1}</h4>
           {btnMap}<br/>
           <button className="btn btn-primary m-3" onClick={()=>this.addcode()}>Add New Code</button>
           <button className="btn btn-primary m-3" onClick={()=>this.clearcode()}>Clear Code</button><br/>
           <h2>List of Code Created</h2>
           {list}


        </React.Fragment>
    )
}
}
export default Codelist;