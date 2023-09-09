import React,{Component} from "react";
import Folder from "./MessagingFolder";
import SeeMsg from "./SeeMessage";
class Message extends Component{
state={
    msgarr:[{id: 121,sent: false,from: "tweets@twitter.com",to: "jack@test.com",subject: "18 tweets from those you follow",text: "Go to your twitter page and see the tweets from those you follow.",folder: "Social",read:true,},
    {id: 141,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Bug 461 in Customer Flow",text:"When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.",folder: "Sent",read:false,},
    {id: 158,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "New post from William Jones",text: "William Jones has just uploaded a new post -How i loved the Avengers Endgame.",folder: "Social",read:true,},
    {id: 177,sent: true,from: "jack@test.com",to: "williams@test.com",subject: "Movie tomorrow",text: "Avengers Endgame is releasing tomorrow. Wanna see.",folder: "Sent",read: false,},
    {id: 179,sent: false,from: "williams@test.com",to: "jack@test.com",subject: "Re: Movie tomorrow",text:"The movie is supposed to be a blast. Lets do the 8:30 show. Want to havea quick bite before.",folder: "Inbox",read:false,},
    {id: 194,sent: false,from: "retweet@twitter.com",to: "jack@test.com",subject: "Your tweet has been retweeted by Thomas",text:"Your tweet on the MarvelSuperheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27likes.",folder: "Social",read:false,},
    {id: 204,sent: true,from: "mary@test.com",to: "jack@test.com",subject: "To do on Friday",text:"Test the bugs on the employee form in Release 0.7.9 and fix them.",folder: "Inbox",read: false,},
    {id: 255,sent: true,from: "mary@test.com",to: "jack@test.com",subject: "Release 0.8.4 deployed",text: "Release 0.8.4 has been deployed in the test environment.",folder: "Inbox",read: false,},{id: 278,sent: false,from: "mary@test.com",to: "jack@test.com",subject: "Re: Bug 461 in Customer Flow",text:"The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",folder: "Inbox",read: false,},
    {id: 281,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Re: Re: Bug 461 in Customer Flow",text: "Bug 461 has been closed.\nRegards,\nJack",folder: "Sent",read: false,},{id: 289,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "5 Shares, 2 Posts from your friends",text:"Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with yourfriends.",folder: "Social",read: true,},],
folder:[{name:"All",stclass:"list-group-item"},{name:"Inbox",stclass:"list-group-item"},{name:"Social",stclass:"list-group-item"},{name:"Sent",stclass:"list-group-item"}],
arr:[],
st:'',
val:false,
index:-1,
sts:'',
};
tshow=(n1,index,index1)=>{
    console.log(index);
    let s1={...this.state};
    s1.sts=n1;
    let myfd=s1.folder.find((n1,index2)=>{
        if(s1.sts.name==n1.name)
        {
            n1.stclass="list-group-item bg-light text-black";
        }
        else{
            n1.stclass="list-group-item"; 
        }
    })
    if(n1.name=="Inbox")
    {
         let arr1=s1.msgarr.filter((n1)=>{
            if(n1.folder=="Inbox")
            {
            return n1;
            }
        });
        s1.arr=arr1;
        s1.val=false;
        this.setState(s1); 
    }
    else if(n1.name=="Social"){
        s1.arr=s1.msgarr.filter((n1)=>{
            if(n1.folder=="Social"){
            return n1;
        }
        });
        s1.val=false;
        this.setState(s1);

    }
    else if(n1.name=="Sent"){
        s1.arr=s1.msgarr.filter((n1)=>{
            if(n1.folder=="Sent")
            return n1;
        });
        s1.val=false;
        this.setState(s1);
    }
    else{
        s1.arr=s1.msgarr;
        s1.val=false;
        this.setState(s1);

    }  
}
handlemsg=(index,id)=>{
    let s1={...this.state};
    console.log(index);
    let in1=s1.msgarr.findIndex((n1)=>{
        if(n1.id==id){
            return n1;
        }
    });
    s1.msgarr[in1].read=true;
    s1.val=true;
    s1.index=index;
    this.setState(s1);
};
handleback=(sts,index,id)=>{
    let s1={...this.state};
    this.setState(s1);
    this.tshow(sts,index,index);
}
handledltbtn=(sts,index,id)=>{
    let s1={...this.state};
    let in1=s1.msgarr.findIndex((n1)=>{
        if(n1.id==id){
            return n1;
        }
    });
    s1.msgarr.splice(in1,1);
    this.setState(s1);
    this.tshow(sts,index);

}
render(){
let {msgarr,folder,arr,st,index,val,sts}=this.state;
let tmap='';
let fol1=folder.map((n1,index)=>{
    let str=<li className={n1.stclass} onClick={()=>this.tshow(n1,index,index)}>{n1.name}</li>
    return str;
});
if(val==false){
 tmap=arr.map((n2,index)=>{
    let str=<Folder onseemsg={this.handlemsg} id={n2.id} from={n2.from} subject={n2.subject} read={n2.read} index={index}/>
    return str;
});
}
else{
     tmap=arr.map((n2,index1)=>{
        if(index1==index){
        let str=<SeeMsg msg={n2}  id={n2.id} sts={sts} from={n2.from} subject={n2.subject} read={n2.read} index={index} backbtn={this.handleback} dltbtn={this.handledltbtn}/>
        return str;
        }

    })
}
let qtymsg=msgarr.reduce((acc,curr)=>{
    if(curr.read==false){
        acc++;
    }
    return acc;
},0);

return(
    <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Email
        </a>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Messages
                    <span className="badge badge-pill bg-secondary badge-secondary">{msgarr.length}</span>
                    </a>

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Unread Messages
                        <span className="badge badge-pill bg-secondary badge-secondary">{qtymsg}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
        <div className="row m-2">
            <div className="col-md-2 bg-secondary text-white"><h3 className="txt">Folders</h3><ul className="list-unstyled "><h4 className="txt">{fol1}</h4></ul>
            </div> <div className="col-md-10"><h5>{tmap}</h5></div>
        </div>


    </React.Fragment>
)

}


}
export default Message;