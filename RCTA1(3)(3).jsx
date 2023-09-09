
import React,{Component} from "react";
class ApendABCD extends Component{
state={
txt:"",
};

clickbtnABCD=(str)=>{
let s1={...this.state};
s1.txt=s1.txt+str;
this.setState(s1);
};
backSpace=()=>{
    let s1={...this.state};
    let index=s1.txt.length-1;
    s1.txt=s1.txt.substring(0,index);
    this.setState(s1);
}
clearbtn=()=>{
    let s1={...this.state};
    let index=s1.txt.length-1;
    s1.txt=s1.txt.substring(index,index);
    this.setState(s1);
}
render(){
    const {txt}=this.state;
    let txt1="";
    if(txt){
         txt1="Text = "+txt;
    }
    else{
         txt1="";
    }
 console.log("In render method");
return(
<React.Fragment><h1>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtnABCD("A")}>A</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtnABCD("B")}>B</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtnABCD("C")}>C</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clickbtnABCD("D")}>D</button>
<br/>
{txt1}<br/>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.backSpace()}>BackSpace</button>
<button className="btn btn-primary btn-lg m-2" onClick={()=>this.clearbtn()}>Clear</button>
</h1>
</React.Fragment>

)

}

}
export default ApendABCD;