import React,{Component} from "react";
class Question9c extends Component{
    state={
        form:this.props.json,
    };   
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state};
        s1.form[input.name]=input.value;
        this.setState(s1);
 
    }
    render(){
        let {onclickhome,n1,view,Submitbtn,deleteFun,index,editquest}=this.props;
        let {form}=this.state;
   return (
    
    <React.Fragment>
    {view ==1 ?
    <div className="container"> 
        <button className="btn btn-primary" onClick={()=>onclickhome()}>Home</button>
        <div className="form-group">
            <label>Question</label>
            <input type="text" className="form-control" id="qnText" name="qnText" placeholder="Enter question" value={this.state.form.qnText}  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Option A</label>
            <input type="text" className="form-control" id="A" name="A" placeholder="Enter Option A" value={form.A}  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Option B</label>
            <input type="text" className="form-control" id="B" name="B" placeholder="Enter Option B" value={form.B}  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Option C</label>
            <input type="text" className="form-control" id="C" name="C" placeholder="Enter Option C" value={form.C}  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Option D</label>
            <input type="text" className="form-control" id="D" name="D" placeholder="Enter Option D" value={form.D}  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Correct Option </label>
            <input type="text" className="form-control" id="ans" name="ans" placeholder="Enter correct Option "  value={form.ans} onChange={this.handleChange}/>
        </div>
        <button className="btn btn-primary" onClick={()=>Submitbtn(this.state.form)}>Submit</button>
        </div> :<React.Fragment> <h5>Q{n1.id+"."+n1.qnText}<button className="btn btn-warning me-2" onClick={()=>editquest(index)}>Edit</button><button className="btn btn-warning" onClick={()=>deleteFun(index)}>Delete</button></h5>
        <ul><b><li>{n1.A}</li><li>{n1.B}</li><li>{n1.C}</li><li>{n1.D}</li><li>Answer :{n1.ans}</li></b></ul></React.Fragment>}
        </React.Fragment>
   )
    }

}
export default Question9c;