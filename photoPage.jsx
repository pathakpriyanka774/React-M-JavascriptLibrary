import React,{Component} from "react";
import PhotoComp from "./photoComp";
class PhotoPage extends Component{
state={
    photos:[
      {
        img:"https://picsum.photos/id/1/300/200",
        like:23,
        dislike:2,
        myOption:"",
      },
      {
        img:"https://picsum.photos/id/6/300/200",
        like:23,
        dislike:2,
        myOption:"dislike",
      },
      {
        img:"https://picsum.photos/id/2/300/200",
        like:23,
        dislike:2,
        myOption:"like",
      },
      {
        img:"https://picsum.photos/id/3/300/200",
        like:23,
        dislike:2,
        myOption:"like",
      },
      {
        img:"https://picsum.photos/id/4/300/200",
        like:23,
        dislike:2,
        myOption:"dislike",
      },
      {
        img:"https://picsum.photos/id/5/300/200",
        like:23,
        dislike:2,
        myOption:"",
      },

    ],


};
handleLike=(index)=>{
  let s1={...this.state};
  let photo=s1.photos[index];
  let {like,dislike,myOption}=photo;
  if(myOption==="like"){
    like--;
    myOption="";
  }
  else if(myOption==="dislike"){
    like++;
    dislike--;
    myOption="like";
  }
  else{
    like++;
    myOption="like";
  }
  photo.like=like;
  photo.dislike=dislike;
  photo.myOption=myOption; 
  this.setState(s1); 
};
handleDislike=(index)=>{
  let s1={...this.state};
  let photo=s1.photos[index];
  let {like,dislike,myOption}=photo;
  if(myOption==="dislike"){
    dislike--;
    myOption="";
  }
  else if(myOption==="like"){
    dislike++;
    like--;
    myOption="dislike";
  }
  else{
    dislike++;
    myOption="dislike";
  }
  photo.like=like;
  photo.dislike=dislike;
  photo.myOption=myOption; 
  this.setState(s1); 
};
handleDelete=(index)=>{
  let s1={...this.state};
  s1.photos.splice(index,1);
  this.setState(s1); 
}
render(){
  const {photos}=this.state;
  return(
    <div className="container">
      <div className="row">
        {photos.map((p1,index)=><PhotoComp photo={p1} index={index} onLike={this.handleLike} 
        onDislike={this.handleDislike} onDelete={this.handleDelete} />)}
      </div>
    </div>
  )
}

}
export default PhotoPage;