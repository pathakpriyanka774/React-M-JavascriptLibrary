import React,{Component} from "react";
class Namebtn extends Component{
state={
persons:[{
    name: "Jack",
    age:25,
    skills:"JavaScript,React",
    email:"jack@email.com",
    mobile:"2343454566",
},
{
name:"anna",
age:29,
skills:"Node.js,MongoDB",
email:"Anna@email.com",
mobile:"2321234534",

},
{
    name:"steve",
    age:31,
    skills:"Android App Development",
    email:"steve@email.com",
    mobile:"2345432123",
}

],
indexPerson:-1,
showContact:false,

};
setIndex=(index)=>{
    let s1={...this.state};
       s1.indexPerson=index;
       s1.showContact=false;
       this.setState(s1);
};
showPerson=()=>{
const {persons,indexPerson,showContact}=this.state;
return(
    <React.Fragment>
        <div className="container m-0">
Name: {persons[indexPerson].name}<br/>
Age: {persons[indexPerson].age}<br/>
Skills: {persons[indexPerson].skills}<br/>
</div>
<button className="btn btn-primary" onClick={()=>this.showContactDetails()}>Contact Info</button>
<br/>
{showContact?(
<React.Fragment>
    Email:{persons[indexPerson].email}<br/>
    Mobile : {persons[indexPerson].mobile}<br/>  
</React.Fragment>
):("")
}
</React.Fragment>
);
};

showContactDetails=()=>{
let s1 = {...this.state};
s1.showContact = true;
this.setState(s1);
}

render(){
const {persons,indexPerson}=this.state;
return(
<React.Fragment>
{
    persons.map((p1,index)=>(
        <button className="btn btn-primary m-2" onClick={()=>this.setIndex(index)}>{p1.name}</button>
    ))
    }
    <br/>
    {indexPerson>=0?this.showPerson():''}
</React.Fragment>
)
}
}
export default Namebtn;