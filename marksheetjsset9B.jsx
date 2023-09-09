import React,{Component} from "react";
class Marksheet9b extends Component{ 
    render(){
        let {arr,mainarr,len,quizindex,submitAssignment,viewquest,check}=this.props;
        
        let str="";
        const map1=arr.map((n1,index)=>{
            if(check==0){
                if(n1.ans==""){
             str=<button className="btn btn-warning m-2" onClick={()=>viewquest(index,quizindex)}>{n1.questnum}{n1.ans}</button>
                }
                else{
                    str= <button className="btn btn-secondary m-2" onClick={()=>viewquest(index,quizindex)}>{n1.questnum}{n1.ans}</button>
                }
            }
            else{
                if(n1.correct=="yes"){
                    str= <button className="btn btn-success m-2" onClick={()=>viewquest(index,quizindex)}>{n1.questnum}{n1.ans}</button>
                }
                else if(n1.correct=="no"){
                    str= <button className="btn btn-danger m-2" onClick={()=>viewquest(index,quizindex)}>{n1.questnum}{n1.ans}</button>
                }
            else{
                str=<button className="btn btn-warning m-2" onClick={()=>viewquest(index,quizindex)}>{n1.questnum}{n1.ans}</button>

            }
        }
                return str;
            });

        return(
            <React.Fragment>
                  <div className="container bg-light"><div className="row"><div className="col-md-12"><h1 className="text-center">{mainarr.subject} : Assignment {mainarr.name}</h1></div></div>
            <div className="row"><div className="col-md-5"><h5 className="text-center ">Time : 5 mins</h5></div>
            <div className="col-md-6 ms-5"><h5 className="myhe">Max Score : {len}</h5></div></div></div>
           <div className="container text-center">{map1}</div>
           <div className="container text-center"><button className="btn btn-secondary" onClick={()=>submitAssignment(quizindex)}><h4>{check==0 ? "Submit the Assignment" :"Go to the list of Assignments"}</h4></button></div>
            </React.Fragment>
        )
    
        }
}
export default Marksheet9b;
