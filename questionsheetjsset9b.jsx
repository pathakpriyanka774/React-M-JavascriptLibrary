import React,{Component} from "react";
class Questionsheet9b extends Component{
    state={
        jsonmk:this.props.jsonmk,
        myopt:-1,
        
        
    };
    seloptfun=(n1,indexopt,index,answer)=>{
        let s1={...this.state};
        s1.jsonmk.questnum=index;
        console.log(s1.jsonmk.questnum);
        if(indexopt==0){
           
            s1.jsonmk.ans="A";
            s1.myopt="A";
           
        }
        else if(indexopt==1){
            
            s1.jsonmk.ans="B";
            s1.myopt="B";
           
        }
        else if(indexopt==2){
           
            s1.jsonmk.ans="C";
            s1.myopt="C";
           
        }
        else if(indexopt==3){
            
            s1.jsonmk.ans="D";
            s1.myopt="D";
        }
        if(indexopt+1==answer){
            s1.jsonmk.correct="yes";
        }
        else{
            s1.jsonmk.correct="no";
        }
        this.setState(s1);
    }

    render(){
        let {jsonmk,myopt}=this.state;
        
        let {text,options,answer,index,nextquest,prevquest,arrlen,marksheetarr,check}=this.props;
       const listmap= options.map((n1,indexopt)=>{
            return <li className="mystyle" onClick={()=>this.seloptfun(n1,indexopt,index,answer)}>{n1}</li>
        });
        let str="";
        if(check==1){
        if(marksheetarr[index].correct=="yes"){
            str=<h4 className="text-success olmr">Correct Answer</h4>

        }
        else if(marksheetarr[index].correct=="no"){
            str=<h4 className="text-danger olmr">Incorrect Answer : The Correct Answer is {marksheetarr[index].ans}</h4>

        }
        else{
            str="";
        }
    }

        return(
            <React.Fragment> 
                <h2 className="olmr">Question Number :{index+1}</h2>
                <h3 className="olmr">{text}</h3>
                <ol type="A" className="olmr">{listmap}</ol>
                <p className="olmr">Your Answer : {marksheetarr[index].ans=="" && myopt==-1 ? " Not Answered" :marksheetarr[index].ans!="" &&  myopt==-1 ? marksheetarr[index].ans:myopt }</p>
                {check==1 ? str : ""}
                {index==0 ? <button className="btn btn-primary olmr" onClick={()=>nextquest(jsonmk,index)}>Next Question</button> :index==arrlen ?
                <button className="btn btn-primary olmr" onClick={()=>prevquest(jsonmk,index)}>Previous Question</button>:
               <React.Fragment> <button className="btn btn-primary olmr" onClick={()=>prevquest(jsonmk,index)}>Previous Question</button>
               <button className="btn btn-primary olmr" onClick={()=>nextquest(jsonmk,index)}>Next Question</button></React.Fragment>}   

            </React.Fragment>
        )

    }

}
export default Questionsheet9b;