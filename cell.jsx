import React,{Component} from "react";
class Cell extends Component{
    
render(){
    let {cellno,valCell,onClickbtn,nextmove}=this.props;
    let v1='';
    if(valCell==-1){
        v1='';
    }
    else{
        v1=valCell;
    }
    return(
        <React.Fragment>
            <div className="col-4  border" onClick={()=>onClickbtn(cellno,nextmove)}><div className="container mybox1">{v1}</div></div>

        </React.Fragment>
    )
}
}
export default Cell;