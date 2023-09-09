import React,{Component} from "react";
import QuestCompJsset9A from "./QuestionCompJsset9A";
import MarkingCompJsset9A from "./MarkingSheetCompJsset9A";
class MainJsset9A extends Component{
  state={
    
    mainarr:[
        {text:"What is the capital of India",options:["New Delhi", "London", "Paris", "Tokyo"],answer:1},
        {text:"What is the capital of Italy",options:["Berlin", "London","Rome", "Paris"],answer:3},
        {text:"What is the capital of China",options:["Shanghai", "HongKong", "Shenzen", "Beijing"],answer:4},
        {text:"What is the capital of Nepal",options:["Tibet", "Kathmandu", "Colombo","Kabul"],answer:2},
        {text:"What is the capital of Iraq",options:["Baghdad", "Dubai", "Riyadh", "Teheran"],answer:1},
        {text:"What is the capital of Bangladesh",options:["Teheran", "Kabul", "Colombo", "Dhaka"],answer:4},
        {text:"What is the capital of Sri Lanka",options:["Islamabad", "Colombo", "Maldives", "Dhaka"],answer:2},
        {text:"What is the capital of Saudi Arabia",options:["Baghdad", "Dubai", "Riyadh", "Teheran"],answer:1},
        {text:"What is the capital of France",options:["London", "New York", "Paris", "Rome"],answer:3},
        {text:"What is the capital of Italy",options:["Berlin", "London", "Paris", "Rome"],answer:4},
        {text:"What is the capital of Sweden",options:["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],answer:2},
        {text:"What is the currency of UK",options:["Dollar", "Mark", "Yen", "Pound"],answer:4},
        {text:"What is the height of Mount Everest",options:["9231 m", "8848 m", "8027 m", "8912 m"],answer:2},
        {text:"What is the capital of Japan",options:["Beijing", "Osaka", "Kyoto", "Tokyo"],answer:4},
        {text:"What is the capital of Egypt",options:["Cairo", "Teheran", "Baghdad", "Dubai"],answer:1},
    ],
    start:0,
    myopt:-1,
    markingsheetarr:[{questnum:1,ans:""},{questnum:2,ans:""}
,{questnum:3,ans:""},{questnum:4,ans:""},{questnum:5,ans:""},{questnum:6,ans:""},{questnum:7,ans:""},
{questnum:8,ans:""},{questnum:9,ans:""},{questnum:10,ans:""},{questnum:11,ans:""},
{questnum:12,ans:""},{questnum:13,ans:""},{questnum:14,ans:""},{questnum:15,ans:""}],
    view:0,

  };
  handleanswer=(jsonmk)=>{
    let s1={...this.state};
    console.log(jsonmk);
    const fd=s1.markingsheetarr.findIndex((n1)=>{
        if(n1.questnum==jsonmk.questnum){
            return n1;
        }
    });
    if(fd==-1){
        s1.markingsheetarr.push(jsonmk);
    }
    else{
        s1.markingsheetarr[fd].ans=jsonmk.ans;
    }
    if(s1.start<s1.mainarr.length){
    s1.start=s1.start+1;
    }
    this.setState(s1);
  }
  handleprev=(jsonmk)=>{
    let s1={...this.state};
    const fd=s1.markingsheetarr.findIndex((n1)=>{
        if(n1.questnum==jsonmk.questnum){
            return n1;
        }
    });
    if(fd==-1){
        s1.markingsheetarr.push(jsonmk);
    }
    else{
        s1.markingsheetarr[fd].ans=jsonmk.ans;
    }
    if(s1.start>0){
    s1.start=s1.start-1;
    }
    this.setState(s1);

  };
  markingsheet=()=>{
    let s1={...this.state}; 
    s1.view=1;
    this.setState(s1);
  }
  render()
  {
    let {mainarr,start,selectedopt,markingsheetarr,view,myopt}=this.state;
    const map1= mainarr.map((n1,index)=>{
        if(index==start){
       return <QuestCompJsset9A arrlen={mainarr.length} myopt={myopt} markingsheetarr={markingsheetarr} text={n1.text} options={n1.options} answer={n1.answer} index={index+1}  
       nextquest={this.handleanswer}
       prevquest={this.handleprev}
       jsonmk={{questnum:index+1,ans:""}} />
        }
    });

    return(
        <React.Fragment>
            <div className="container bg-light">
            <div className="row"><div className="col-md-12"><h1 className="text-center">General Knowledge : Assignment 4A</h1></div></div>
            <div className="row"><div className="col-md-5"><h5 className="text-center ">Time : 5 mins</h5></div>
            <div className="col-md-6 ms-5"><h5 className="myhe">Max Score : 50</h5></div></div></div>
            {view === 0 ? (
                    <React.Fragment><button className="btn btn-primary btnmr" onClick={()=>this.markingsheet()}>View Marking Sheet</button>
                    {map1}</React.Fragment>
                ) : (
                    <MarkingCompJsset9A markingsheetarr ={this.state.markingsheetarr} />
                   
                )}
                </React.Fragment>
                )    
        
  }

}
export default MainJsset9A;