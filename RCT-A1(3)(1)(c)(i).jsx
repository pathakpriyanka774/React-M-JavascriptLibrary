import React,{Component} from "react";
class Mylist1 extends Component{
 state={
list1:["Bob","Tim","Julia","Steve","Edwards","George","Kathy"],
list2:[],
 };
list1Click=(index)=>{
let s1={...this.state};
let name=s1.list1.splice(index,1);
s1.list2.push(name);
this.setState(s1);

}
list2Click=(index)=>{
    let s1={...this.state};
let name=s1.list2.splice(index,1);
s1.list1.push(name);
this.setState(s1);
}

 render(){
    const {list1,list2}=this.state;
return <React.Fragment>
 <div className="row">
<div className="col-4 border">
    <h4>List1</h4>
{  list1.map((l1,index)=>(<span onClick={()=>this.list1Click(index)}> {l1} <br/></span>))}

</div>
<div className="col-4 border">
<h4>List2</h4>
{  list2.map((l1,index)=>(<React.Fragment> {l1}<button class="btn btn-danger btn-sm" onClick={()=>this.list2Click(index)}>X</button> <br/></React.Fragment>))}

</div>
 </div>


</React.Fragment>
 }




}
export default Mylist1;