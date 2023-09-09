import React,{Component} from "react";
import Questionsheet9b from "./questionsheetjsset9b";
import Tblejsset9B from "./tablejsset9B";
import Marksheet9b from "./marksheetjsset9B";
class Jsset9Bmain extends Component{
    state={
        paperarr:[
            {
              subject: "General Knowledge",
              name: "4A",
              questions: [
                {
                  text: "What is the capital of India",
                  options: ["New Delhi", "London", "Paris", "Tokyo"],
                  answer: 1
                },
                {
                  text: "What is the capital of Italy",
                  options: ["Berlin", "London", "Rome", "Paris"],
                  answer: 3
                },
                {
                  text: "What is the capital of China",
                  options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],
                  answer: 4
                },
                {
                  text: "What is the capital of Nepal",
                  options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],
                  answer: 2
                },
                {
                  text: "What is the capital of Iraq",
                  options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                  answer: 1
                },
                {
                  text: "What is the capital of Bangladesh",
                  options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],
                  answer: 4
                },
                {
                  text: "What is the capital of Sri Lanka",
                  options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],
                  answer: 2
                },
                {
                  text: "What is the capital of Saudi Arabia",
                  options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                  answer: 1
                },
                {
                  text: "What is the capital of France",
                  options: ["London", "New York", "Paris", "Rome"],
                  answer: 3
                },
                {
                  text: "What is the capital of Germany",
                  options: ["Frankfurt", "Budapest", "Prague", "Berlin"],
                  answer: 4
                },
                {
                  text: "What is the capital of Sweden",
                  options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],
                  answer: 2
                },
                {
                  text: "What is the currency of UK",
                  options: ["Dollar", "Mark", "Yen", "Pound"],
                  answer: 4
                },
                {
                  text: "What is the height of Mount Everest",
                  options: ["9231 m", "8848 m", "8027 m", "8912 m"],
                  answer: 2
                },
                {
                  text: "What is the capital of Japan",
                  options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
                  answer: 4
                },
                {
                  text: "What is the capital of Egypt",
                  options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
                  answer: 1
                }
              ]
            },
            {
              subject: "Maths",
              name: "10C",
              questions: [
                {
                  text: "What is 8 * 9",
                  options: ["72", "76", "64", "81"],
                  answer: 1
                },
                {
                  text: "What is 2*3+4*5",
                  options: ["70", "50", "26", "60"],
                  answer: 3
                }
              ]
            },
            {
              subject: "Chemistry",
              name: "7A(i)",
              questions: [
                {
                  text: "What is the melting point of ice",
                  options: ["0F", "0C", "100C", "100F"],
                  answer: 2
                },
                {
                  text: "What is the atomic number of Oxygen",
                  options: ["6", "7", "8", "9"],
                  answer: 3
                },
                {
                  text: "What is the atomic number of Carbon",
                  options: ["6", "7", "8", "9"],
                  answer: 1
                },
                {
                  text: "Which of these is an inert element",
                  options: ["Flourine", "Suphur", "Nitrogen", "Argon"],
                  answer: 4
                },
                {
                  text: "What is 0 Celsius in Fahrenheit",
                  options: ["0", "32", "20", "48"],
                  answer: 2
                }
              ]
            },
            {
              subject: "Computers",
              name: "3B",
              questions: [
                {
                  text: "How many bytes are there in 1 kilobyte",
                  options: ["16", "256", "1024", "4096"],
                  answer: 3
                },
                {
                  text: "Who developed ReactJS",
                  options: ["Facebook", "Google", "Microsoft", "Apple"],
                  answer: 1
                },
                {
                  text: "Angular is supported by ",
                  options: ["Facebook", "Google", "Microsoft", "Twitter"],
                  answer: 2
                },
                {
                  text: "C# was developed by ",
                  options: ["Amazon", "Google", "Microsoft", "Twitter"],
                  answer: 3
                },
                {
                  text: "Bootstrap was developed by ",
                  options: ["Apple", "Google", "Facebook", "Twitter"],
                  answer: 4
                },    
                {
                  text: "AWS is provided by ",
                  options: ["Apple", "Amazon", "Microsoft", "Google"],
                  answer: 2
                },    
                {
                  text: "Azure is provided by ",
                  options: ["Microsoft", "Amazon", "IBM", "Google"],
                  answer: 1
                },
                {
                  text: "Angular is a framework that uses ",
                  options: ["Java", "Python", "C#", "Typescript"],
                  answer: 4
                }
              ]
            }
          ],
          view:0,
          quizindex:0,
          questindex:0,
          marksheetarr:[
          [{questnum:1,ans:"",correct:""},{questnum:2,ans:"",correct:""},{questnum:3,ans:"",correct:""},
          {questnum:4,ans:"",correct:""},{questnum:5,ans:"",correct:""},{questnum:6,ans:"",correct:""},{questnum:7,ans:"",correct:""},
          {questnum:8,ans:"",correct:""},{questnum:9,ans:"",correct:""},{questnum:10,ans:"",correct:""},{questnum:11,ans:"",correct:""},
          {questnum:12,ans:"",correct:""},{questnum:13,ans:"",correct:""},{questnum:14,ans:"",correct:""},{questnum:15,ans:"",correct:""}],

           [{questnum:1,ans:"",correct:""},{questnum:2,ans:"",correct:""}],

          [{questnum:1,ans:"",correct:""},{questnum:2,ans:"",correct:""},{questnum:3,ans:"",correct:""},{questnum:4,ans:"",correct:""},{questnum:5,ans:"",correct:""}],

          [{questnum:1,ans:"",correct:""},{questnum:2,ans:"",correct:""},{questnum:3,ans:"",correct:""},
          {questnum:4,ans:"",correct:""},{questnum:5,ans:"",correct:""},{questnum:6,ans:"",correct:""},{questnum:7,ans:"",correct:""},
          {questnum:8,ans:"",correct:""}]
          ],
          sbarr:[],
          check:0,
    };
    Doselectquiz=(index)=>{
        let s1={...this.state};
        s1.quizindex=index; 
        s1.check=0; 
        s1.view=1;
      
        this.setState(s1);

    };
    handleanswer=(jsonmk,index1)=>{
        let s1={...this.state};
           s1.marksheetarr[s1.quizindex]=s1.marksheetarr[s1.quizindex].map((n1,index)=>{
            if(index==index1)
            {  
              if(jsonmk.ans!=""){
                n1.ans=jsonmk.ans;
                n1.correct=jsonmk.correct;
                }
            }
            return n1;
           });
          
        if(s1.questindex<s1.paperarr[s1.quizindex].questions.length-1)
        s1.questindex=s1.questindex+1;
        this.setState(s1);
      }
      handleprev=(jsonmk,index1)=>{
        let s1={...this.state};
           s1.marksheetarr[s1.quizindex]=s1.marksheetarr[s1.quizindex].map((n1,index)=>{
            if(index==index1)
            {
              if(jsonmk.ans!=""){
              n1.ans=jsonmk.ans;
              n1.correct=jsonmk.correct;
              }
             
            }
            return n1;
           });
          
        if(s1.questindex>0)
        s1.questindex=s1.questindex-1;
        
        this.setState(s1);
      };
      handleviewsheet=()=>{
        let s1={...this.state};
        s1.view=2; 
        this.setState(s1);
        
      }
      handlesubmit=(quizindex)=>{
        let s1={...this.state};
        s1.sbarr.push(quizindex+1);
        s1.questindex=0;
        
        s1.view=0;
        this.setState(s1);

      };
      handlequest=(questindex1,quizindex1)=>{
        let s1={...this.state};
        s1.quizindex=quizindex1;
        s1.questindex=questindex1;
        s1.view=1;
        this.setState(s1);

      };
      handlecheck=(quizindex2)=>{
        let s1={...this.state};
        s1.quizindex=quizindex2;
        s1.questindex=0;
        s1.check=1;
        s1.view=1;
        this.setState(s1);
      }
    render(){
        
        let {paperarr,view,quizindex,marksheetarr,questindex,sbarr,check}=this.state;
        
        const map1=paperarr.map((n1,index)=>{
           return <Tblejsset9B marksheetarr={marksheetarr[quizindex]}  checkfun1={this.handlecheck} quizindex={quizindex} n1={n1} index={index} sbarr={sbarr} onclicktbDo={this.Doselectquiz}/>
        });
        const map2=paperarr[quizindex].questions.map((n1,index)=>{
          if(index==questindex){
         return <Questionsheet9b arrlen={paperarr[quizindex].questions.length} check={check}  marksheetarr={marksheetarr[quizindex]} text={n1.text} options={n1.options} answer={n1.answer} index={index}  
         nextquest={this.handleanswer}
         prevquest={this.handleprev}
         jsonmk={{questnum:index+1,ans:"",correct:""}} />
          }
      });
        
        return(
            <React.Fragment>
                {view===0 ? 
                     (<React.Fragment><h1 className="text-center">Choose the Assignment</h1>
                <div className="row border bg-dark text-light p-2 ms-3 me-3 ">
               <div className="col-md-3 "><h3>Subject</h3></div>
            <div className="col-md-2 "><h3>Assignment</h3></div>
            <div className="col-md-2 "><h3>Performance</h3></div>
            <div className="col-md-2 "></div>
            <div className="col-md-2 "></div></div>
                {map1}</React.Fragment>): view===1 ?<React.Fragment>
                <div className="container bg-light">
            <div className="row"><div className="col-md-12"><h1 className="text-center">{paperarr[quizindex].subject} : Assignment {paperarr[quizindex].name}</h1></div></div>
            <div className="row"><div className="col-md-5"><h5 className="text-center ">Time : 5 mins</h5></div>
            <div className="col-md-6 ms-5"><h5 className="myhe">Max Score : {paperarr[quizindex].questions.length}</h5></div></div>
            <div className="row"><div className="col-8"></div><div className="col-md-4"><button className="btn btn-primary" onClick={()=>this.handleviewsheet()}>View Marksheet</button></div></div></div>{map2}</React.Fragment>:
             <Marksheet9b 
                arr={marksheetarr[quizindex]} viewquest={this.handlequest} check={check} submitAssignment={this.handlesubmit} quizindex={quizindex} mainarr={paperarr[quizindex]} len={paperarr[quizindex].questions.length} />
                
    }
            </React.Fragment>
        )
    }

}
export default Jsset9Bmain;