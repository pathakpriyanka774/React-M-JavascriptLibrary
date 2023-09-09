import React,{Component} from "react";
class GameStart extends Component{
render(){
    let {GoalTeam2,ts1,ts2,GoalTeam1,matchover,team1,team2}=this.props;
    let won="";
        if(ts1>ts2){ 
            won=team1+" Won";
        }
        else if(ts2>ts1){
            won=team2+" Won";
        }
        else{
            won="Match Drawn";
        }
    let mtarr={team1:team1,team2:team2,score1:ts1,score2:ts2,result:won};
    return(
        <React.Fragment>
            <h1 className="text-center">Welcome to an exciting match</h1>
                   <p className="text-center teamrow "> <div className="row text-center"><div className="col-md-3"><h3>{team1}</h3><br/>
                    <button className="btn btn-warning" onClick={()=>GoalTeam1()}><h5>Goal Scored</h5></button>
                    </div><div className="col-md-3"><h3>{ts1}-{ts2}</h3></div> <div className="col-md-3"><h3>{team2}</h3><br/><button className="btn btn-warning" onClick={()=>GoalTeam2()}><h5>Goal Scored</h5></button></div></div>
                    </p>
                    <p className="text-center"><button className="btn btn-warning" onClick={()=>matchover(mtarr)}><h5>Match Over</h5></button></p>
        </React.Fragment>
    )
}
}
export default GameStart;