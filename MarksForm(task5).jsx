import React,{Component} from "react";
class MrkForm extends Component{
    state={
        mrks:this.props.mrks,
    }
    handleChange=(e)=>{
        let s1={...this.state};
        s1.mrks[e.currentTarget.name]=e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.mrks);
    };

    render(){
        let {mrks}=this.state;
        let {name}=this.props;
        let {maths,english,computer,science}=mrks;
        return(
            <React.Fragment>
                <h2>Enter Marks for {name}</h2>
                <div  className="form-group">
                    <label>Maths</label>
                    <input type="text"
                    className="form-control"
                    id="maths"
                    name="maths"
                        value={maths}
                        placeholder="Maths"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>English</label>
                    <input type="text"
                    className="form-control"
                    id="english"
                    name="english"
                        value={english}
                        placeholder="English"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Computer</label>
                    <input type="text"
                    className="form-control"
                    id="computer"
                    name="computer"
                        value={computer}
                        placeholder="Computer"
                        onChange={this.handleChange}/>
                </div>
                <div  className="form-group">
                    <label>Science</label>
                    <input type="text"
                    className="form-control"
                    id="science"
                    name="science"
                        value={science}
                        placeholder="science"
                        onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit? "Edit" : "Submit"}</button>
                

            </React.Fragment>
        )
    }

}
export default MrkForm;