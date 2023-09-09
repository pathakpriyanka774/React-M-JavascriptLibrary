import React,{Component} from "react";
class quest5 extends Component{
state={
json:[{name:"Bill Johnson",english:61,maths:55,computer:60},
{name:"Mary Smith",english:75,maths:80,computer:82},
{name:"Rex Williams",english:37,maths:32,computer:27}
],
}
quest5fun=()=>{
    let {json}=this.state;
    let grade;
    let str=<div className="row">;
    {
        json.map((n1)=>{
            if(n1.english+n1.maths+n1.computer>=225)
            {
                 grade="A";
                console.log(grade);
            }
            else if(n1.english+n1.maths+n1.computer>=180){
                 grade="B";
                console.log(grade);
            }
            else if(n1.english+n1.maths+n1.computer>=150){
                 grade="C";
               console.log(grade);
            }
            else{
                 grade="D";
               
            }
            let str1=<div className="col-md-3"><h4>Name : {n1.name}</h4>
            <h4>Marks in English : {n1.english}</h4>
            <h4>Marks in Maths : {n1.maths}</h4>
            <h4>Marks in Computer : {n1.computer}</h4>
            <h4>Total Marks : {n1.english+n1.maths+n1.computer}</h4>
            <h4>Grade :{grade} </h4>
            </div>;
            return str1;
        })
    }</div>;
    return str;
}
    
render(){
  return(
    this.quest5fun()
  )
}
}
export default quest5;