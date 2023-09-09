import React,{Component} from "react";
class ViewPaper extends Component{
    state={
         json:"",
         paperarr:this.props.paperarr,
    };
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state};
        let fd=s1.paperarr.findIndex((n1)=>{
            if(n1.name==input.value){
                return n1;
            }
        });
        s1.json=s1.paperarr[fd];
        this.setState(s1);  
    }
    render(){
        let {onclickhome}=this.props;
        let {paperarr,json}=this.state;
        let map1="";
        if(json!=""){
            console.log(json);
         map1=json.qcheck.map((n1,index)=>{
          let str=<li><h4>Q {index+1}.{n1}</h4></li>
          return str;
        });
        console.log(map1);

        }
        else{
           map1="";
        }   
        return(
            <React.Fragment>
                <button className="btn btn-primary" onClick={()=>onclickhome()}>Home</button>
                <select class="form-select w-50" onChange={this.handleChange}>
  <option selected>Choose Paper</option>
  {
    paperarr.map((n1)=>(
        <option value={n1.name}>{n1.name}</option>
    ))
  }
  </select>
  {
    json!="" ? <React.Fragment><h1>Question Paper</h1>
    <h3>Name : {json.name}</h3>
    <ul>{map1}</ul>
    </React.Fragment>:""
  }
  

  
  

            </React.Fragment>
        )
    }

}
export default ViewPaper;