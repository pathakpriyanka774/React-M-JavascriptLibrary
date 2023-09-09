import React,{Component} from "react";
import Counting from "./RCTA1(4)(1)(A)PART";
class CountingMachine extends Component {
state={
counters:[
    {id:12 ,alphabet:"A" ,count:1 },
    {id:23 ,alphabet:"B" ,count:2 },
    {id:7 ,alphabet:"C" ,count:0 },
    {id:16 ,alphabet:"D" ,count:0 }, 
],
data:'',
}; 
handleIncrement=(id)=>{
    let s1={...this.state};
    let counter= s1.counters.find(c1=>c1.id===id);
    counter.count++;
    s1.data+=counter.alphabet;
    this.setState(s1);
    }
handleDelete=(id)=>{
    let s1={...this.state};
   let index= s1.counters.findIndex(c1=>c1.id===id);
   s1.counters.splice(index,1);
   this.setState(s1);
};
handleReset=()=>{
    let s1={...this.state};
    const arr1= s1.counters.map((c1)=>({id:c1.id,alphabet:c1.alphabet,count:0}));
     s1.counters=arr1;
     s1.data='';
   this.setState(s1);
};

render(){
const {counters,data}=this.state;
return(
<React.Fragment>
{counters.map((c1)=>(

    <Counting counter={c1} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>
))
}
<button className="btn btn-primary" onClick={()=>this.handleReset()}>Reset All</button>
<h6>Alphabets = {data}</h6>
</React.Fragment>
);
}
}
export default CountingMachine;