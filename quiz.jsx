import React,{Component} from "react";
import { getQuizQuestions} from "./quizqns";
class Quiztask2 extends Component{
    state={
        players:[
            {name:"James",points:0},
            {name:"Julia",points:0},
            {name:"Martha",points:0},
            {name:"Steve",points:0}
        ],
           question:getQuizQuestions(),
           currentQuestion:0,
           playerBuzzer:null,
           clrindex:-1,
           start:1,

    };
    buzzer=(index)=>{
        let s1={...this.state};
        s1.clrindex=index;
    
        this.setState(s1);

    };
    handleadd=(index,point)=>{
        let s1={...this.state};
        if(point==3){
        s1.players[index].points=s1.players[index].points+3;
        }
        else{
            s1.players[index].points=s1.players[index].points-1;
        }
        this.setState(s1);
    }
    handlechooseopt=(indexopt,indexquest,plyindex)=>{
        if(plyindex!=-1){
        let s1={...this.state};
        const fd=s1.question.find((n1,index)=>{
            if(index==indexquest)
            {
                if(n1.answer==indexopt+1)
                {
                    return n1;
                }
            }
        });
        
        if(fd!=undefined){
            alert("Correct Answer.You get 3 points.");
            s1.playerBuzzer=plyindex;
            s1.players[plyindex].points=s1.players[plyindex].points+3;
            s1.clrindex=-1;
            
        }
          else{
            alert("Wrong Answer.You loose 1 point.");
            s1.playerBuzzer=plyindex;
            s1.players[plyindex].points=s1.players[plyindex].points-1;
            s1.clrindex=-1;
          }
          if(s1.start<s1.question.length+1){
          s1.start++;
          }
          
          this.setState(s1);  
        }
        else{
            alert("Hands up for answer the Question!!");
        } 
    }
    render(){
        let {players,clrindex,questions,currentQuestion,playerBuzzer,start,question}=this.state;
        let scr1='';
        let str='';
        let mymsg="";
        let mymsg1="";
        const arr=[];
        const findmax = players.reduce((acc, curr) => {
            if (curr.points > acc.points) {
                acc = curr;
            } else if (curr.points == acc.points) {
                arr.push(curr.name);
                const fd = arr.find((n1) => {
                    if (n1 == acc.name) {
                        return n1;
                    }
                });
                
                if (fd == undefined) {
                    arr.push(acc.name);
                }
                
            }
            return acc;
        });
        if(start>question.length){ 
        if (arr=="") {
            mymsg=<h3 className="text-center">Game Over <br/>The winner is {findmax.name}</h3>;
            console.log(mymsg);
             } 
        else{
            const arr1 =arr.map((n1) => {
                return n1;
            });
            mymsg=<React.Fragment><h3 className="text-center">Game Over <br/> There is tie.The winners are {arr.join(" , ")}</h3></React.Fragment>
            console.log(mymsg);
        }
    }
       if(start<question.length+1){
        mymsg1=question[start-1].options.map((n1,index)=>{
            return <button className="btn btn-primary m-2" onClick={()=>this.handlechooseopt(index,start-1,clrindex)}>{n1}</button>
        });
    }else{
        mymsg1="";
    }
    
    
        
        const rmap=players.map((p1,index)=>{
            if(index==clrindex){
            str=<div className="col-md-2 bg-success m-2 text-center"><h4>Name : {p1.name}</h4>
           <h5> Score : {p1.points}</h5>
            <button onClick={()=>this.buzzer(index)}><h5>BUZZER</h5></button></div>
            return str;
            }
            else{
             str=<div className="col-md-2 bg-warning m-2 text-center"><h4>Name : {p1.name}</h4>
           <h5> Score : {p1.points}</h5>
            <button onClick={()=>this.buzzer(index)}><h5>BUZZER</h5></button></div>
            return str;

            }
        });
       
       
        return(
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center">Welcome to the Quiz Contest</h1>
                    <h3 className="text-center">Participants</h3>
                    <div className="row myr col-md-12">{rmap}</div>
                </div>
                <div className="container">
                    {
                        start<question.length+1?<React.Fragment><h2 className="text-center">Question Number : {start}</h2>
                        <h2 className="text-center"> {question[start-1].text}</h2>
                        <p className="text-center">{mymsg1}</p></React.Fragment>:<p className="text-center">{mymsg}
                    </p>
                    }
                  
                   

                </div>
            </React.Fragment>
        )
    }

}
export default Quiztask2;