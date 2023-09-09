import React,{Component} from "react";
class Folder extends Component{
    render(){
   let {from,subject,id,read,index,onseemsg}=this.props;
   let env='';
   let bstate='';
   if(read==true){
    env=<i class="fa fa-envelope-open"></i>
    bstate="col-md-5 text-muted";
   }
   else{
    env=<i class="fa fa-envelope"></i>
    bstate="col-md-5";

   }
   return(
    <React.Fragment>
    <div className="row border" onClick={()=>onseemsg(index,id)} ><div className="col-md-2" >{env}</div><div className={bstate}>{from}</div><div className={bstate}>{subject}</div></div>
       
    </React.Fragment>
   )

    }


}
export default Folder;