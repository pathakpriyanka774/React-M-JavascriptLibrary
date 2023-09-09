import React,{Component} from "react";
class QuestCompJsset9A extends Component{
    state={
        jsonmk:this.props.jsonmk,
        myopt:-1,
        
        
    };
    seloptfun=(n1,indexopt,index,)=>{
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
        this.setState(s1);
    }

    render(){
        let {jsonmk,myopt}=this.state;
        
        let {text,options,answer,index,selectedopt,nextquest,prevquest,arrlen,markingsheetarr}=this.props;
       const listmap= options.map((n1,indexopt)=>{
            return <li className="mystyle" onClick={()=>this.seloptfun(n1,indexopt,index)}>{n1}</li>
        });
        

        return(
            <React.Fragment>
                
                <h2 className="olmr">Question Number :{index}</h2>
                <h3 className="olmr">{text}</h3>
                <ol type="A" className="olmr">{listmap}</ol>
                <p className="olmr">Your Answer : {markingsheetarr[index-1].ans=="" && myopt==-1 ? " Not Answered" :markingsheetarr[index-1].ans!="" &&  myopt==-1 ? markingsheetarr[index-1].ans:myopt }</p>
                {index==1 ? <button className="btn btn-primary olmr" onClick={()=>nextquest(jsonmk)}>Next Question</button> :index==arrlen ?
                <button className="btn btn-primary olmr" onClick={()=>prevquest(jsonmk)}>Previous Question</button>:
               <React.Fragment> <button className="btn btn-primary olmr" onClick={()=>prevquest(jsonmk)}>Previous Question</button>
               <button className="btn btn-primary olmr" onClick={()=>nextquest(jsonmk)}>Next Question</button></React.Fragment>}

                    

                

            </React.Fragment>
        )

    }

}
export default QuestCompJsset9A;