import React,{Component} from "react";
class StdForm extends Component{
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
        let {name,year,course}=crs;
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
                    <label>Course</label>
                    <input type="text"
                    className="form-control"
                    id="course"
                    name="course"
                        value={course}
                        placeholder="Course"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Year</label>
                    <input type="text"
                    className="form-control"
                    id="year"
                    name="year"
                        value={year}
                        placeholder="Year"
                        onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit? "Edit" : "Submit"}</button>
                

            </React.Fragment>
        )
    }

}
export default StdForm;