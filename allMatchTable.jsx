import React,{Component} from "react";
class AllMatchTable extends Component{
    render(){
    let {allmatch}=this.props;
    let allmap1="";
    allmap1=allmatch.map((n1)=>{
        let str=<div className="row border"><div className="col-md-2">{n1.team1}</div>
         <div className="col-md-2">{n1.team2}</div>
         <div className="col-md-2">{n1.score1}-{n1.score2}</div>
         <div className="col-md-2">{n1.result}</div></div>
         return str;
     });
    return(
        <React.Fragment>
                        <h1 className="text-center">Results of the Matches so far</h1>
                        <div className="row bg-dark text-white"><div className="col-md-2">Team 1</div>
                        <div className="col-md-2">Team 2</div>
                        <div className="col-md-2">Score</div>
                        <div className="col-md-5">Result</div></div>
                        {allmap1}
                    </React.Fragment>
    )
    }
}
export default AllMatchTable;