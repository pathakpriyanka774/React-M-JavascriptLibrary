import React, {Component} from "react";
class Myclass extends Component {
    state={
       x:20,
       y:17
    };
   showString = ()=>{
    let {x,y}=this.state;
    return ( 
        <React.Fragment>
        Number 1 is {x}<br/>
        Number 2 is {y}<br/>
        Sum is {x+y}<br/>
        Larger is {x>y ? x:y}
        </React.Fragment>
        );
   }
    render(){
     return <React.Fragment>{this.showString()}</React.Fragment>
       
    }
}
export default Myclass;