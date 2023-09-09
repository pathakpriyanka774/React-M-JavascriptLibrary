import React,{Component} from "react";
class MarkingCompJsset9A extends Component{
    render(){
        let {markingsheetarr}=this.props;
        let str="";
        const map1=markingsheetarr.map((n1)=>{
            
                if(n1.ans==""){
             str=<button className="btn btn-warning m-2">{n1.questnum}{n1.ans}</button>
                }
                else{
                    str= <button className="btn btn-secondary m-2">{n1.questnum}{n1.ans}</button>
                }
                return str;
        });
        return(
            <React.Fragment>
           <div className="container text-center">{map1}</div>
            </React.Fragment>
        )
    }

}
export default MarkingCompJsset9A;
