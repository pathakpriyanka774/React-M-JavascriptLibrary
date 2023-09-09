import React,{Component} from "react";
import SimpleForm from "./SimpleForm";
class MainCompponent extends Component{
    state={
        persons:[
            {name:"Jack",age:24},
            {name:"Mary",age:28}
        ],
        view:0,
        editPersonIndex:-1, //0-show persons and button ,1-show form
    }
    handlePerson=(person)=>{
        console.log("In Handle person",person);
        let s1={...this.state};
        s1.editPersonIndex>=0 ? (s1.persons[s1.editPersonIndex]=person):s1.persons.push(person);
        s1.view=0;
        s1.editPersonIndex=-1;
        this.setState(s1);

    };
    showForm=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);
    };
    editPerson=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editPersonIndex=index;
        this.setState(s1);


    }
    render(){
        let person={name:'',age:''};
        let {persons,view,editPersonIndex}=this.state;
        return(
            <React.Fragment>
            {view===0?(<div className="container">
                {persons.map((p1,index)=>(
                <div className="row">
                    <div className="col-4 border">
                        {p1.name}</div>
                        <div className="col-4 border">{p1.age}</div>
                        <div className="col-4"><button className="btn btn-warning" onClick={()=>this.editPerson(index)}>Edit</button></div></div>))}
                        <button className="btn btn-primary " onClick={()=>this.showForm()}>Add New Person</button>
            </div>):(
            <SimpleForm person={editPersonIndex>=0 ? persons[editPersonIndex] : person} onSubmit={this.handlePerson}
            edit={editPersonIndex >= 0}/>
            )
            }
            </React.Fragment>
        )
    }


}
export default MainCompponent;