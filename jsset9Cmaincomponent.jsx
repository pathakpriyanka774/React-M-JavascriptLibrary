import React, {Component} from "react";
import Question9c from "./jsset9CQuestionForm";
import CreatPaper from "./CreatPaperjsset9c";
import ViewPaper from "./jsset9cViewPaper";
class Jsset9c extends Component{
    state={ 
        questarr:[ 
            {id: 1, qnText: "What is the square of 9",A:"90",B:"72",C:"81",D:"99",ans:"C"},
            {id: 2, qnText: "What is the 11*16", A: "160", B: "176", C: "204", D: "166", ans: "B"},
            {id: 3, qnText: "Which of the following is not a power of 2",A:"0",B:"1", C: "2",D:"8",ans:"A"},
            {id: 4, qnText: "log 1 is equal to",A: "1", B: "10", C: "-1", D: "0", ans: "D"},
            {id: 5, qnText: "log(ab) is equal to",A:"(loga) + (logb)",B:"b(loga)",C:"a(logb)",D:"(loga)(logb)",ans: "A"},
            {id: 6, qnText: "The square root is equal to",A: "1.0", B: "1.25", C: "1.414", D: "1.462", ans: "B"},
            {id: 7, qnText: "The binary representation of 10 is",A: "0110", B: "1001", C: "1010", D: "1100", ans: "C"},
            {id: 8, qnText: "11111 in binary represents ",A: "27", B: "15", C: "41", D: "31", ans: "D"},
            {id: 9, qnText: "The absolute value of -10.5 is equal to ",A: "-10.5", B: "10.5",C: "10", D: "11", ans: "B"},
            {id: 10, qnText: "The roots of the equation of (x-2)(x+3) = 0 are",A: "2, -3",B: "2, 3", C: "-2, 3", D: "-2, -3", ans: "A"}],
            paperarr:[],
            json:{name:"",qcheck:[]},
        view:0,
        id:10,
        editindex:-1,
        editpaperindex:-1,
    }
    addQuest=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    }
    handleHomeclick=()=>{
        let s1={...this.state}; 
        s1.view=0;
        this.setState(s1);
    }
    questbankclick=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1);
    }
    handleSubmit=(form)=>{
        console.log(form);
        let s1={...this.state};
        s1.id=s1.id+1;
        s1.questarr.push(form);
        s1.view=0;
        this.setState(s1);   
    };
    handleDelete=(index)=>{
        let s1={...this.state};
        s1.questarr.splice(index,1);
        this.setState(s1);
    }
    handleEdit=(index)=>{
        let s1={...this.state};
        s1.editindex=index;
        s1.view=1;
        this.setState(s1);
    }
    createpaperclick=()=>{
        let s1={...this.state};
        s1.view=3;
        this.setState(s1);
    }
    viewpaperclick=()=>{
        let s1={...this.state};
        s1.view=4;
        this.setState(s1);
    }
    handlePaperSubmit=(json)=>{
        let s1={...this.state};
        let fd=s1.paperarr.findIndex((n1)=>{
            if(n1.name==json.name){
                return n1;
            }
        });
        if(fd==-1){
            s1.paperarr.push(json);
        
        }
        else{
            s1.paperarr[fd]=json;
        }
        s1.editpaperindex=-1;
        s1.view=0;
        this.setState(s1);
    }
    render(){
        let {view,questarr,id,editindex,paperarr,json,editpaperindex}=this.state;
        let jsn={id:id+1,qnText:"",A:"",B:"",C:"",D:"",ans:""};
        const map1=questarr.map((n1,index)=>{
            return <Question9c view={2} deleteFun={this.handleDelete} editquest={this.handleEdit} index={index} n1={n1}/>
        });
        return(
            <React.Fragment>
            
               {view==0 ? <p className="ms-5"><button className="btn btn-primary ms-4 me-4" onClick={()=>this.addQuest()}><h4>Add Question</h4></button>
                <button className="btn btn-primary m-2" onClick={()=>this.questbankclick()}><h4>Question Bank</h4></button>
                <button className="btn btn-primary m-2" onClick={()=>this.createpaperclick()}><h4>Create Question Paper</h4></button>
                <button className="btn btn-primary m-2" onClick={()=>this.viewpaperclick()}><h4>View Question Paper</h4></button></p>:
                view==1 ? <Question9c onclickhome={this.handleHomeclick} json={editindex>=0 ? questarr[editindex]:{id:id+1,qnText:"",A:"",B:"",C:"",D:"",ans:""}} id={id} view={1} Submitbtn={this.handleSubmit} />
                :view==2 ? <React.Fragment><button className="btn btn-primary" onClick={()=>this.handleHomeclick()}>Home</button>
                <h4>Question Bank</h4>{map1}</React.Fragment>:view==3 ?<CreatPaper onclickhome={this.handleHomeclick} questions={questarr} json={editpaperindex==-1?paperarr[editpaperindex]:json} onclickSubmit={this.handlePaperSubmit} />
                :<ViewPaper paperarr={paperarr} onclickhome={this.handleHomeclick}/>
        }

            </React.Fragment>
        )
    }
}
export default Jsset9c;
