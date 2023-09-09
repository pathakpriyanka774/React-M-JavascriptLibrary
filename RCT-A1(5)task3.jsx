import React,{Component} from "react";
class Task3 extends Component{
    state={
        crs:this.props.crs,
    }
    handleChange=(e)=>{
        let s1={...this.state};
        s1.crs=e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.crs);
    };

    render(){
        let {crs}=this.state;
        return(
            <React.Fragment>
                
                <div  className="form-group col-md-8">
                    <label>Add a Course</label>
                    <input  type="text"
                    className="form-control"
                    id="course"
                    name="course"
                        placeholder="Enter Course Name"
                        value={crs}
                        onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Add Course</button>
            </React.Fragment>
        )
    }

}
export default Task3;