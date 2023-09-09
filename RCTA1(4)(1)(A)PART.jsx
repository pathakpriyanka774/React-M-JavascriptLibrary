import React,{Component} from "react";
class Counting extends Component {

render(){
    console.log("Props",this.props);
    const {counter,onDelete ,onIncrement}=this.props;
    const {alphabet,count,id}=counter;
    return (
    <h5>
        Counter {alphabet} Count={count}
        <button className="btn btn-primary btn-sm m-2" onClick={()=>onIncrement(id)}>
            Increament
        </button>
        <button className="btn btn-danger  btn-sm m-2" onClick={()=>onDelete(id)}>
            Delete
        </button>
        </h5>

    )
    

}

}
export default Counting;