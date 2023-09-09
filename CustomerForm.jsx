import React,{Component} from "react";
class Customer extends Component{
    state={
        crs:this.props.crs,
    }
    handleChange=(e)=>{
        let s1={...this.state};
        s1.crs[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.crs);
    };

    render(){
        let {crs}=this.state;
        let {name,age,email}=crs;
        return(
            <React.Fragment>
                <div  className="form-group">
                    <label>Name</label>
                    <input type="text"
                    className="form-control"
                    id="name"
                    name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Age</label>
                    <input type="text"
                    className="form-control"
                    id="age"
                    name="age"
                        value={age}
                        placeholder="Age"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Email ID</label>
                    <input type="text"
                    className="form-control"
                    id="email"
                    name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit? "Edit" : "Submit"}</button>
            </React.Fragment>
        )
    }

}
export default Customer;