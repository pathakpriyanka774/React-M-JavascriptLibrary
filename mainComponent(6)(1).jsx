import React,{Component} from "react";
import SimpleForm1 from "./RCT-A1(6)(1)main";
class MainComponent1 extends Component{
    state={
        persons:[
           { name:"Williams",
            age:27,
            gender:"Male",
            passport:true,
            license:"",
            country:"",
            city:"", 
            passportNumber:"FGRRT54234",
            designation:"",
            manager1:"",
            techsKnown:[],
            serveracess:[],
        },
        { name:"Anna",
            age:31,
            gender:"Female",
            passport:false,
            license:"",
            country:"",
            city:"",
            passportNumber:"",
            designation:"",
            manager1:"",
            experience1:"",
            techsKnown:[],
            serveracess:[],
        }, 

        ],
        view:0,
        editPersonIndex:-1,
    };
    handleSubmit = (person) =>{
        let s1={...this.state};
        s1.editPersonIndex >= 0 ?(s1.persons[s1.editPersonIndex]=person):s1.persons.push(person);
        s1.view = 0;
        s1.editPersonIndex = -1;
        this.setState(s1);
    };
    showForm = ()=>{
        let s1={...this.state};
        s1.view=1;
        s1.editPersonIndex=-1;
        this.setState(s1);

    }
    deleteCourse=(index)=>{
        let s1={...this.state};
        s1.persons.splice(index,1);
        this.setState(s1);

    }
    editPerson=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editPersonIndex=index;
        this.setState(s1);
    }
    showPersons = () =>{
        return(
        <React.Fragment>
        <h1 className="m-3">Details of the person</h1>
        { this.state.persons.map((n1,index)=>{
            return <div className="row ms-3 me-3">
            <div className="col-4 border">{n1.name}</div>
            <div className="col-4 border">{n1.age}</div>
            <div className="col-4 border"><button className="btn btn-danger btn-sm mr-2" onClick={()=>this.deleteCourse(index)}>Delete</button><button className="btn btn-warning btn-sm " onClick={()=>this.editPerson(index)}>Edit</button></div>
            </div>
        })}

    <button className="btn btn-primary m-2" onClick={()=>this.showForm()}>Add New Person</button>   
    </React.Fragment>  
        )
    };
     

    render(){
        const {persons,view,editPersonIndex}=this.state;
        return(
            <div className="container">
                
                {view === 0 ? (
                    this.showPersons()
                ) : (
                    <SimpleForm1 
                    person={editPersonIndex >= 0 ? persons[editPersonIndex] : {name:"",age:"",country:"",
                    gender:"",passport:"",license:"",
                        city:"",passportNumber:"",designation:"",manager1:"",techsKnown:[],serveracess:[],}}
                    onSubmit={this.handleSubmit}
                    edit={editPersonIndex >= 0} />  
                )}

            </div>
                )
    }
    
    

}
export default MainComponent1;