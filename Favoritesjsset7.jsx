import React,{Component} from "react";
class PicFav extends Component{
    render(){
        let {pics,onclickpic}=this.props;
        let mystr='';
        const picsMap=pics.map((n1,index)=>{
            let str=<div className="col-md-1 ms-0 me-5"><img className="favpic"src={n1} onClick={()=>onclickpic(index)}></img></div>
            return str;
        })
        if(pics.length>0){
            mystr=<h3>My Favorites</h3>
        }
        return(
            <React.Fragment>
                <div className="container mycont">
        <div className="row myfav">
            {mystr}
            {picsMap}
        </div>
        </div>
        </React.Fragment>
        )
    }


}
export default PicFav;