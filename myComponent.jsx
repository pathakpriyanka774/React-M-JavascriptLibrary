import React, {Component} from "react";
class Mycomponent extends Component {
    state={
        s1:"React.js 12345",
        s2:"Javascript",
        s3:"Node.js"
    };
   showString = ()=>{
    let {s1,s2,s3}=this.state;
    return ( 
        <React.Fragment>
        <h1>{s1}</h1>
        <h1>{s2}</h1>
        <h1>{s3}</h1>
        </React.Fragment>
        );
   }
    render(){
     return <React.Fragment>{this.showString()}</React.Fragment>
       
    }
}
export default Mycomponent;