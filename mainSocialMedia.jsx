import React,{Component} from "react";
import SocialPost from "./SocialMediaPost";
class MainSocial extends Component{
    state = {posts: [
        {postId: 255,heading: "World Cup Semi-final",postedBy: "Vishal",numOfLikes: 45,numOfShares: 10,txt: "India lost to New Zealand in the world cup. Very Bad."},
        {postId: 377,heading: "What a final",postedBy: "Mohit",numOfLikes: 18,numOfShares: 4,txt: "Was anyone awake to see the final. England won by boundary count."},
        {postId: 391,heading: "Was it 5 runs on 6 six runs",postedBy: "Preeti",numOfLikes: 29,numOfShares: 7,txt:"I feed sorry for New Zealand. If the ball had not hit the bat and no overthrows, New Zealand would have won."},
        {postId: 417,heading: "Will Dhoni retire",postedBy: "Hemant",numOfLikes: 66,numOfShares: 24,txt:"Is this Dhoni's final match. Will be ever see Dhoni playing for India."}]
    };
    handlelike=(index)=>{
        let s1={...this.state};
        s1.posts[index].numOfLikes++;
        this.setState(s1);
    }
    handleshare=(index)=>{
        let s1={...this.state};
        s1.posts[index].numOfShares++;
        this.setState(s1);

    }
    render(){
    let {posts}=this.state;
    const pt1=posts.map((p1,index)=>{
        let str=<SocialPost postId1={p1.postId} heading1={p1.heading} 
        shareBy={p1.postedBy} numlike={p1.numOfLikes} numshare={p1.numOfShares} index={index} txt1={p1.txt} onlike={this.handlelike} onshare={this.handleshare}/>
        return str;
       });
       
    return(
        <React.Fragment> {pt1}</React.Fragment>
       
    )

    }
}
export default MainSocial;