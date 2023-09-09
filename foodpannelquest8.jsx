import React,{Component} from "react";
class Foodpannel extends Component{
    handleChange = (e) =>{
        //optionArray , optionSel
        let s1= {...this.props.optionsSel};
        let s2={...this.props.sts1};
        let { currentTarget : input}=e;
        input.name==="name" ? s1.pName=this.updateCBs(input.checked,input.value,s1.pName): s1[input.name]=input.value;
        s2.sts=input.name==="stock" ? input.value:"";
        
        this.props.onChangeOption(s1,s2);
    };
    updateCBs = (checked,value,arr) =>{
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex(ele=>ele===value);
            if(index > -1 ) arr.splice(index,1); 
        } 
        return arr;
    }
    render(){
        const {optionsSel,optionsArray,stsfilter,sts}=this.props;
        return <div className="container">
            {this.showcheckboxes("Product",optionsArray,"name",optionsSel.pName)}
            {this.showRadios("Stock Status",stsfilter,"stock",sts.sts)}
        </div>;
    }                
    
    showcheckboxes = (label,arr,name,selArr)=>{
        return (
            <React.Fragment>
                 <label className="form-check-label font-weight-bold"><b>{label}</b></label>
                        {arr.map(opt=>
                            (<div className="form-check ">
                            <input className="form-check-input" type="checkbox" name={name}
                            value={opt}
                            checked={selArr[opt]}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">{opt} </label></div>
                            ))}
            </React.Fragment>
        )
    }
    showRadios = (label,arr,name,selVal)=>{
        return (
            <React.Fragment>
                 <label className="form-check-label font-weight-bold"><b>{label}</b></label>
                        {arr.map(opt=>
                            (<div className="form-check ">
                            <input className="form-check-input" type="radio" name={name}
                            value={opt}
                            checked={selVal==opt}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">{opt} </label></div>
                            ))}
            </React.Fragment>
        )
    }

}
export default Foodpannel;
//checkboxes for brand and ram
//radios for processor and rating
