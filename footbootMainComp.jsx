import React,{Component} from "react";
import FootBallmatch from "./football";
import NewMatch from "./newMatch";
import GameStart from "./gamestart";
import AllMatchTable from "./allMatchTable";
class FootBall extends Component{
    state={ 
        allmatch:[],
        arr:[{team:"France",matchcount:0,woncount:0,lostcount:0,dwncount:0,goalfor:0,goalagnt:0,points:0},
        {team:"England",matchcount:0,woncount:0,lostcount:0,dwncount:0,goalfor:0,goalagnt:0,points:0},
        {team:"Brazil",matchcount:0,woncount:0,lostcount:0,dwncount:0,goalfor:0,goalagnt:0,points:0},
        {team:"Germany",matchcount:0,woncount:0,lostcount:0,dwncount:0,goalfor:0,goalagnt:0,points:0},
        {team:"Argentina",matchcount:0,woncount:0,lostcount:0,dwncount:0,goalfor:0,goalagnt:0,points:0},],
        teamarr:["France","England","Brazil","Germany","Argentina"],
        allmatch1:[],
        score:"",
        matchNumber:0,
        view:0,
        team1:"",
        team2:"",
        ts1:0,
        ts2:0,
        
    };
    newMatchHandle=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    };
    handleSelectTeam1=(index)=>{
        let s1={...this.state};
        s1.team1=s1.teamarr[index];
        this.setState(s1);
    }
    handleSelectTeam2=(index)=>{
        let s1={...this.state};
        s1.team2=s1.teamarr[index];
        this.setState(s1);
    };
    handlestart=(team1,team2)=>{
        let s1={...this.state};
        if(team1=="")
        {
            alert("Select team 1");
        }
        else if(team2==""){
            alert("Select team 2");
        }
        else if(team1==team2) {
            alert("Select Different teams");
        }
        else{
        s1.view=2;
        }
        this.setState(s1);
    }
    handleGoal2=()=>{
        let s1={...this.state};
        s1.ts2=s1.ts2+1;
        this.setState(s1);
    }
    handleGoal1=()=>{
        let s1={...this.state};
        s1.ts1=s1.ts1+1;
        this.setState(s1);
    };
    handleMatchOver=(mtarr)=>{
        let s1={...this.state};
        s1.matchNumber=s1.matchNumber+1;
        s1.allmatch1.push(mtarr);
        s1.allmatch.push(mtarr);
        s1.arr=s1.arr=s1.arr.map((n1)=>{
            s1.allmatch.find((n2)=>{
                if(n1.team==n2.team1 || n1.team==n2.team2){
                    if(n1.team==n2.team1){
                        n1.goalfor=n1.goalfor+n2.score1;
                        n1.goalagnt=n1.goalagnt+n2.score2;
                    }
                    else{
                        n1.goalfor=n1.goalfor+n2.score2;
                        n1.goalagnt=n1.goalagnt+n2.score1;
                    }
                    n1.matchcount=n1.matchcount+1;
                }
                if((n1.team==n2.team1 || n1.team==n2.team2) &&  n2.result==(n1.team+" Won")){
                
                    n1.woncount=n1.woncount+1;
                }
                if((n1.team==n2.team1 || n1.team==n2.team2) && n2.result=="Match Drawn"){
                   n1.dwncount=n1.dwncount+1;
                }
               
            });
            n1.lostcount=n1.matchcount-(n1.woncount+n1.dwncount);
            n1.points=(n1.woncount*3)+(n1.dwncount*1)+(n1.lostcount*0);  
            return n1;
        }); 
        s1.allmatch=[];
        s1.ts1=0;
        s1.ts2=0;
        s1.team1="";
        s1.team2="";
        s1.view=0;
        this.setState(s1);

    };
    AllMatchHandle=()=>{
        let s1={...this.state};
        s1.view=3;
        this.setState(s1);

    };
    PointTableHandle=()=>{
        let s1={...this.state};
        s1.view=4;
        this.setState(s1);

    }

    render(){
        let {teamarr,ts1,ts2,team1,team2,view,allmatch, allmatch1,matchNumber,arr}=this.state;
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a href="/" className="navbar-brand">
    Football Tournament
    </a>
    <div className="">
        <ul className="navbar-nav mr-auto">
            <li className="nav-link">Number of matches</li>
            <li className="nav-link">{matchNumber}</li>
        </ul>
    </div>
</nav>
                <button className="btn btn-primary m-2" onClick={()=>this.AllMatchHandle()}><h5>All Matches</h5></button>
                <button className="btn btn-primary m-2" onClick={()=>this.PointTableHandle()}><h5>Points Table</h5></button>
                <button className="btn btn-primary m-2" onClick={()=>this.newMatchHandle()}><h5>New Match</h5></button>
                {view==1 ? <NewMatch  SelectTeam1={this.handleSelectTeam1} SelectTeam2={this.handleSelectTeam2}
                 team1={team1} team2={team2} teamarr={teamarr}  startFun={this.handlestart}/> 
                 :view==2 ? <GameStart team1={team1} team2={team2} GoalTeam2={this.handleGoal2} 
                 GoalTeam1={this.handleGoal1} matchover={this.handleMatchOver} teamarr={teamarr} ts1={ts1} view={view} ts2={ts2} />:view==3 ? 
                 <AllMatchTable teamarr={teamarr} view={view} allmatch={allmatch1}/>:view==4 ? <FootBallmatch arr={arr} teamarr={teamarr} view={view} allmatch={allmatch} />:"" }

            </React.Fragment>
        )
    }

}
export default FootBall;