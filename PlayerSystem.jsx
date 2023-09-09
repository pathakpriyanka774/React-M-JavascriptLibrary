import React,{Component} from "react";
import Player from "./player";
class PlayerSystem extends Component{
state={
    names:[{name:"Jack",score:21},{name:"Steve",score:30},{name:"Martha",score:44},
    {name:"Bob",score:15},{name:"Katherine",score:28}],

};
handlepoint=(index)=>{
    let s1={...this.state};
    s1.names[index].score=s1.names[index].score+1;
    this.setState(s1);
}
render(){
    let {names}=this.state;
return (
    <div className="container">
    <ul className="w-50"><li className="list-unstyled">
    <h4>List of Names</h4></li>
      {names.map((p1,index)=><li className="list-unstyled text-primary" >
        <Player name={p1} index={index} onpoint={this.handlepoint} /></li>
        )}
    </ul>
  </div>
)

}

}
export default PlayerSystem;