import React, {Component} from "react";
class checkingPrime extends Component {
    state={
       x:20,
       y:17
    };
  isPrime=(num)=>{
   for(let i=2;i<num;i++){
    if(num%i===0)return false;
    }
    return true;
  };

    render() {
        let {x,y}=this.state;
     return <React.Fragment>
         Number 1 is {x} Prime is {""+this.isPrime(x)}
         <br/>
        Number 2 is {y} Prime is {""+this.isPrime(y)}
        <br/>
        Sum is {x+y}<br/>
        Larger is {x>y ? x:y}
        
        
        {this.showString()}</React.Fragment>
       
    }
}
export default checkingPrime;