
import React,{Component} from "react";
class ScoreMatch extends Component{
state={
num1:0,
num2:0,
};

clickt=(n3,nn3)=>{
let s1={...this.state};
s1.num1=s1.num1+n3;
s1.num2=s1.num2+nn3;
this.setState(s1);
};
   
            clickrset=()=>{
                let s1={...this.state};
                s1.num2=0;
                s1.num1=0;
                this.setState(s1);
            }
render(){
    const {num1,num2}=this.state;
 console.log("In render method");
return(
<React.Fragment><table className="tblemt">
<tr className="mytrow"><td className="trow">Team A<br/><br/><h1>{num1}</h1></td>
<td className="trow">Team B<br/><br/><h1>{num2}</h1></td></tr>
<tr><td className="trow1"><button className="btn1" onClick={()=>this.clickt(3,0)}>+3POINTS</button></td>
<td className="trow1"><button className="btn1" onClick={()=>this.clickt(0,3)}>+3POINTS</button></td></tr>
<tr><td className="trow1"><button className="btn1" onClick={()=>this.clickt(2,0)}>+2POINTS</button></td>
<td className="trow1"><button className="btn1" onClick={()=>this.clickt(0,2)}>+2POINTS</button></td></tr>
<tr><td className="trow1"><button className="btn1" onClick={()=>this.clickt(1,0)}>FREE THROW</button></td>
<td className="trow1"><button className="btn1" onClick={()=>this.clickt(0,1)}>FREE THROW</button></td></tr>
<tr><td className="resetrow" ><button className="btn1" onClick={()=>this.clickrset()}>Reset</button></td></tr>
</table>

<br/>

</React.Fragment>

)

}

}
export default ScoreMatch;