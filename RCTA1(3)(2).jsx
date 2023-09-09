
import React,{Component} from "react";
class Add110100 extends Component{
state={
num:0,
};

clickbtn1=()=>{
let s1={...this.state};
s1.num=s1.num+1;
this.setState(s1);
};
clickbtn10=()=>{
let s1={...this.state};
s1.num=s1.num+10;
this.setState(s1);
};
clickbtn100=()=>{
let s1={...this.state};
s1.num=s1.num+100;
this.setState(s1);
};
 
render(){
    const {num}=this.state;

return(
<React.Fragment><h1>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtn1(1)}>1</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtn10(10)}>10</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtn100(100)}>100</button>
<br/>
Number ={num}<br/>
</h1>
</React.Fragment>

)

}

}
export default Add110100;