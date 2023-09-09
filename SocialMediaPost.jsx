import React,{Component} from "react";
class SocialPost extends Component{
    render(){
    let {shareBy,heading1,numlike,numshare,txt1,index,onlike,onshare}=this.props;
    return(
        <div className="row bg-light mydiv1 border"><h3>{heading1}</h3><h4>Shared By : {shareBy}</h4>
        <h5 className="text-muted">{txt1}</h5>
        <h4 className="text-muted">Likes : {numlike} <button  className="btn btn-primary" onClick={()=>onlike(index)}>Like</button>
         Share : {numshare}<button className="btn btn-primary"  onClick={()=>onshare(index)}>Share</button> </h4></div>
    )



    }
}
export default SocialPost;