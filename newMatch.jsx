import React,{Component} from "react";
class NewMatch extends Component{
render(){
    let {teamarr,startFun,team1,team2,SelectTeam1,SelectTeam2}=this.props;
    const map1=teamarr.map((n1,index)=>{
        let str=<button className="btn btn-warning m-3" onClick={()=>SelectTeam1(index)}><h4>{n1}</h4></button>
        return str; 
    });
    const map2=teamarr.map((n1,index)=>{
        let str=<button className="btn btn-warning m-3" onClick={()=>SelectTeam2(index)}><h4>{n1}</h4></button>
        return str;
    });
    return(
        
        <React.Fragment>
        <h2 className="text-center">{team1=="" ? "Choose Team 1" :"Team 1 : "+team1}</h2>
        <p className="text-center">{map1}</p>
        <h2 className="text-center">{team2=="" ? "Choose Team 2" :"Team 2 : "+team2}</h2>
        <p className="text-center">{map2}</p>
        <p className="text-center"><button className="btn btn-dark text-white" onClick={()=>startFun(team1,team2)}><h4>Start Match</h4></button></p>
        </React.Fragment>
    );
}

}
export default NewMatch;