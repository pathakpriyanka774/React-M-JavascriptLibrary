import React,{Component} from "react";
class SimpleForm extends Component{
    state={
        person:this.props.person,
    };
    handleChnage = (e)=>{
        console.log(e.currentTarget);
        let s1={...this.state};
       // if(e.currentTarget.name=="name")s1.person["name"]=e.currentTarget.value;
       // if(e.currentTarget.name=="age")s1.person["age"]=e.currentTarget.value;
        s1.person[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1);
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("handle Submit",this.state.person);
        this.props.onSubmit(this.state.person);

    }
    render(){
        let {name,age}=this.state.person;
        return(
            <div className="container">
                <h5>{this.props.edit ? "Edit Details":"Enter Details of Person"}</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter name"
                    onChange={this.handleChnage}
                    />

                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    value={age}
                    placeholder="Enter Age"
                    onChange={this.handleChnage}
                    />

                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                    {this.props.edit ? "Update" : "Submit"}</button>
            </div>
        );
    }

}
export default SimpleForm;