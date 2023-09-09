import React,{Component} from "react";
class Books extends Component{
    render(){
        const {name,author,issued,onissue,index,list}=this.props;
        return(
            
            <React.Fragment>
               
                <div className="col-md-4  m-2 mycol text-center"><b>{name}<br/>{author}</b><br/>
                <button className="btn btn-light btn-sm" onClick={()=>onissue(index)}>Issue</button></div>
                </React.Fragment>
    
           
        )
    }

}
export default Books;