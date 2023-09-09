import React,{Component} from "react";
class CreatPaper extends Component{
    state={
        json:{name:"",qcheck:[]},
    }
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state};
        console.log(input.type);
        s1.json[input.name]=input.type=="checkbox"? this.funCheck(input.checked,s1.json.qcheck,input.value):input.value;
        this.setState(s1);
    }
    funCheck=(checked,arr,inputVal)=>{
        if(checked){
            arr.push(inputVal);
    }
    else{
        let fd=arr.findIndex((n1)=>{
            if(n1==inputVal){
                return n1;
            }
        });
        if(fd>=0){
        arr.splice(fd,1);
        }

    }
    return arr;
    };
    
    render(){
        let {onclickhome,questions,onclickSubmit}=this.props;
        let {json}=this.state;
        let {name,qcheck}=json;
        let map1=questions.map((n1)=>{
        let str=<div className="form-group">
            <input type="checkbox" className="form-check-inline" id={n1.id} name="qcheck" value={n1.qnText} onChange={this.handleChange}/>
            <label>{n1.qnText}</label>
        </div>
        return str;
        }); 
        return(
            <React.Fragment>
                <button className="btn btn-primary" onClick={()=>onclickhome()}>Home</button>
                <div className="form-group">
            <label>Name of Question Paper</label>
            <input type="text" className="form-control w-50" id="qset" name="name" placeholder="Enter question paper name"  onChange={this.handleChange}/>
        </div>
        {map1}
        <button className="btn btn-primary" onClick={()=>onclickSubmit(json)}>Submit</button>

            </React.Fragment>
        ) 
    }

} 
export default CreatPaper;
