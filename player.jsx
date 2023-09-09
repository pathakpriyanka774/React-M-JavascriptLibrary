import React,{Component} from "react";
class Player extends Component{
state={
}
render(){
    const {name,index,onpoint}=this.props;
    return(
        <React.Fragment><div className="myclass bg-light "><b>Name : {name.name} <br/>Score :{name.score}</b><br/><button className="btn btn-success btn-sm" onClick={()=>onpoint(index)}>1Point</button></div></React.Fragment>
       
    )
}

}
export default Player;