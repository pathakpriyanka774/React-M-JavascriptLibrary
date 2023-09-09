import React,{Component} from "react";
class Deal extends Component{
    render(){
        let {name,mem,property,price,index,oncart}=this.props;
        return(
            <React.Fragment>
                <div className="col-md-3 mybgcol m-3 text-center"><h4><b>{name}{mem}</b></h4><h5>{property}</h5><button className="btn btn-light m-2" onClick={()=>oncart(index,name)}><h4>Just{price}</h4></button></div>
            </React.Fragment>
        )
    }
    

}
export default Deal;