import React,{Component} from "react";
class Tblejsset9B extends Component{
    render(){
        let {n1,index,onclicktbDo,sbarr, checkfun1,marksheetarr,quizindex}=this.props;
        
        let yes1=0;
        const fd=sbarr.find((n1)=>{
            if(n1===index+1)
                return n1;
            
        });
        if(fd!==undefined){
            yes1=1;
        }
        let count=0;
        const count1=marksheetarr.map((n1,index1)=>{
            if(n1.correct=="yes"){
                count=count+1;
            }
            return count;

            });
            console.log(marksheetarr);

        
        return(
            <React.Fragment>
            <div className="row border p-2 p-2 ms-3 me-3 ">
            <div className="col-md-3 "><h3>{n1.subject}</h3></div>
            <div className="col-md-2 "><h3>{n1.name}</h3></div>
            <div className="col-md-2 "><h3>{yes1==1 ?count+"/"+n1.questions.length:" Not Done"}</h3></div>
            <div className="col-md-2 "><button className="btn btn-primary" onClick={()=>onclicktbDo(index)}><h3>Do</h3></button></div>
            <div className="col-md-2 ">{yes1==1 ? <button className="btn btn-primary" onClick={()=>checkfun1(index)}><h3>Check</h3></button> : ""}</div></div>
            </React.Fragment>
            
        )
    }

}
export default Tblejsset9B;