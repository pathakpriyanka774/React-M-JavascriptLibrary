import React,{Component} from "react";
class Movielist extends Component{
state={
      moviedata: [{title:"Terminator" ,genre:"Action" ,stock:6 ,rate:2.5 },
        {title:"Die Hard" ,genre:"Action" ,stock:5 ,rate:2.5 },
        {title:"Get Out" ,genre:"Thriller" ,stock:8 ,rate:3.5 },
        {title:"Trip to Italy" ,genre:"Comedy" ,stock:7 ,rate:3.5 },
        {title:"Airplane" ,genre:"Comedy" ,stock:7 ,rate:3.5 },
        {title:"Wedding Crasher" ,genre:"Comedy" ,stock:7 ,rate:3.5 },
        {title:"Gone Girl" ,genre:"Thriller" ,stock:7 ,rate:3.5 },
        {title:"The Six Sense" ,genre:"Thriller" ,stock:7 ,rate:3.5 },
        {title:"The Avengers" ,genre:"Action" ,stock:7 ,rate:4.5 },
    ],
     movieNum:0,
};
sort=(n)=>{
    let s2= {...this.state};
    let {moviedata,movieNum}=s2;
    switch(n){
      case 0:moviedata.sort((p1,p2)=>p1.title.localeCompare(p2.title));break;
      case 1:moviedata.sort((p1,p2)=>p1.genre.localeCompare(p2.genre));break;
      case 2:moviedata.sort((p1,p2)=>p1.stock-p2.stock);break;
      case 3:moviedata.sort((p1,p2)=>((p1.rate)-(p2.rate)));break;
    }
    this.setState(s2);
  };
  deletefun=(index1)=>{
    let s1={...this.state};
    let {moviedata,movieNum}=this.state;
    let newIndex=moviedata.findIndex((n1,index)=>{
         if(index==index1){
            return n1;
         }
    });
    console.log(newIndex);
    s1.moviedata.splice(newIndex,1);
    this.setState(s1);

  }
  
render(){
let {moviedata,movieNum}=this.state;
let tmap='';
let movieNum1='';
 tmap=moviedata.map((n1,index)=>{
    movieNum=movieNum+1;
    let str=<div className="row border-bottom p-3"><div className="col-md-3 ">{n1.title}</div>
    <div className="col-md-3 ">{n1.genre}</div>
    <div className="col-md-2 ">{n1.stock}</div>
    <div className="col-md-2 ">{n1.rate}</div>
    <div className="col-md-2 "><button className="btn btn-danger" onClick={()=>this.deletefun(index)}>Delete</button></div></div>
    return str;
}); 
if(movieNum>0){
    movieNum1="Showing "+movieNum+" movies";
} 
else{
    movieNum1='There is no Movie';
};
return(
<React.Fragment>
    <div className="container">   
        <h4>{movieNum1}</h4><hr/>
       <b> <div className="row border-bottom p-3">
    <div className="col-md-3 " onClick={()=>this.sort(0)}>Title</div>
    <div className="col-md-3 " onClick={()=>this.sort(1)}>Genre</div>
    <div className="col-md-2 " onClick={()=>this.sort(2)}>Stock</div>
    <div className="col-md-2" onClick={()=>this.sort(3)}>Rate</div>
    <div className="col-md-2"></div>
    </div></b>
        {tmap}</div>
</React.Fragment>
)
}
}
export default Movielist;