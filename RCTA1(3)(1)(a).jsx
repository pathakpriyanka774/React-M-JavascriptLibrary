
import React,{Component} from "react";
class Abc123btn extends Component{
state={
txt:"No button is Clicked",
count:0,
};

clickbtn=(str)=>{
    console.log("Clicked ABC");
let s1={...this.state};
s1.txt=str;
s1.count=s1.count+1;
this.setState(s1);
};
 
render(){
    const {txt,count}=this.state;
 console.log("In render method");
return(
<React.Fragment>
<button className="btn btn-primary" onClick={()=>this.clickbtn("ABC")}>ABC</button>
<button className="btn btn-secondary" onClick={()=>this.clickbtn("123")}>123</button>
<br/>
txt : {txt}<br/>
count : {count}<br/>

</React.Fragment>

)

}

}
export default Abc123btn;