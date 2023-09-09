import React, {Component} from "react";
class ArrayList extends Component {
    state={
      nums:[10,4,13,24,54]
    };
   

    render(){
        let {nums}=this.state;
        let num1=[...nums];
        num1.sort((n1,n2)=>n1-n2);
    return ( 
     <ul>
        {num1.map((n1)=>(
            <li>{n1}</li>
        )
        )}
     </ul>     
    );
       
    }
}
export default ArrayList;