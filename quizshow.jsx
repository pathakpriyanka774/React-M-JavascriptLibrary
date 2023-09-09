import React, {Component} from "react";
class Quiz extends Component {
    state={
   players: [
        {name:"Jack",answered:10,correct:8},
        {name:"Steve",answered:8,correct:7},
        {name:"William",answered:12,correct:9},
        {name:"Kathy",answered:11,correct:10},
        {name:"Edward",answered:9,correct:6},
        {name:"Mary",answered:13,correct:8},
   ],
   correctScore:2,
   incorrectScore:-1
    };
    sortPlayers=(p1,p2)=>{
        const {correctScore,incorrectScore}=this.state;
        let x1 = p1.correct*correctScore + (p1.answered - p1.correct)* incorrectScore;
        let x2 = p2.correct*correctScore + (p2.answered - p2.correct)* incorrectScore;
        return x2-x1;
    };
    totalQns = ()=>{
        const {players}=this.state;
        return players.reduce((acc,curr)=>acc+curr.answered,0);
    };
    totalCorrect = ()=>{
        const {players}=this.state;
        return players.reduce((acc,curr)=>acc+curr.correct,0);
    };

render(){
    const {players,correctScore,incorrectScore}=this.state;
    const players1=[...players];
    players1.sort(this.sortPlayers);
   let totalQnsAsked = this.totalQns();
   let totalCorrectAns = this.totalCorrect();
    return(
            <React.Fragment>
        <div className="container">
        
             <div className="row border bg-success text-white">
             <div className="col-3 border">Name</div>
             <div className="col-3 border">Answered</div>
             <div className="col-3 border">Correct</div>
             <div className="col-3 border">In Correct</div>
         </div>
         {
            players.map((p1)=>{
                let { name,answered,correct}=p1;
                return(
                <div className="row border">
                    <div className="col-3 border">{name}</div>
                    <div className="col-3 border">{answered}</div>
                    <div className="col-3 border">{correct}</div>
                    <div className="col-3 border">{correct*correctScore+(answered-correct)*incorrectScore}
                    </div>
                </div>);
})}
        <div className="row bg-light">
            <div className="col-6 border">
                <h4>Leaderboard</h4>
                1.{players1[0].name}<br/>
                2.{players1[1].name}<br/>
                3.{players1[2].name}<br/>
            </div>
            <div className="col-6 border">
                <h4>Statistics</h4>
                Total Questions :{totalQnsAsked} <br/>
                Correct Answers :{totalCorrectAns} <br/>
                Incorrect Answers {totalQnsAsked-totalCorrectAns}: <br/>
                </div>
        </div>
        </div>
        <div className="container">
             <h2>Other Formate</h2>
             <div className="row"> 
             {players.map((p1)=>{
                let { name,answered,correct}=p1;
                return(
                    <div className="col-3 border bg-warning">
                        {name}<br/>
                        Answered : {answered}<br/>
                        Correct : {correct}<br/>
                        Score : 
                        {correct * correctScore+(answered-correct) * incorrectScore}
    
             </div>
                );

             })}
        </div>
        <div className="row bg-light">
            <div className="col-6 border">
                <h4>Leaderboard</h4>
                1.{players1[0].name}<br/>
                2.{players1[1].name}<br/>
                3.{players1[2].name}<br/>
            </div>
            </div>
            </div>
            
        </React.Fragment>

        )
        
            
        }
    }  
export default Quiz;