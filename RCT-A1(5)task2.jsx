import React,{Component} from "react";
class Task2lib2 extends Component{
    state={
        arr1:this.props.arr,
    };
    handleChange=(e)=>{
        let s1={...this.state};
        s1.arr1[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1);

    }
    handle1Submit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.arr1);
    }
    render(){
        let{arr1}=this.state;
        return(
        <div className="container">
        <div  className="form-group">
        <label>Course Name</label>
        <input type="text"
        className="form-control"
        id="courseName"
        name="courseName"
            value={arr1.courseName}
            placeholder="Enter Course Name"
            onChange={this.handleChange}/>
    </div>
    <div  className="form-group">
                    <label>Discription</label>
                    <input type="text"
                    className="form-control"
                    id="discription"
                    name="discription"
                        value={arr1.discription}
                        placeholder="Enter Course Discription"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Duration</label>
                    <input type="number"
                    className="form-control"
                    id="duration"
                    name="duration"
                        value={arr1.duration}
                        placeholder="Enter Course duration"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Faculty</label>
                    <input type="text"
                    className="form-control"
                    id="faculty"
                    name="faculty"
                        value={arr1.faculty}
                        placeholder="Enter Course faculty"
                        onChange={this.handleChange}/>
                </div>
                
    <button className="btn btn-primary" onClick={this.handle1Submit}>Submit</button>
    </div>
        )

    }

}
export default Task2lib2; 