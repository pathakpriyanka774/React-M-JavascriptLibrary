import React,{Component} from "react";
class PicViewer extends Component{
    render(){
        let {pic,picindex,clickNext,clickPrevious,clickAddfav}=this.props;
        return(
            <React.Fragment>
        <div className="container border text-center mycont"><img className="mypic "src={pic}></img><br/>
        <button className="btn btn-primary  p-2 mt-3 mb-3" onClick={()=>clickAddfav(pic)}><h5>Add to Favorites</h5></button></div>
       <div className="container mycont"><button className="btn btn-primary  p-2 justify-content-left" onClick={()=>clickPrevious(picindex)}><h5>Previous</h5></button>
       <button className="btn btn-primary float-end p-2" onClick={()=>clickNext(picindex)}><h5>Next</h5></button></div>
        </React.Fragment>
        )
    }


}
export default PicViewer;