import React,{Component} from "react";
class LeftPanelForm extends Component{
    handleChange = (e) =>{
        //optionArray , optionSel
        let s1= {...this.props.optionsSel};
        let { currentTarget : input}=e;
        console.log(e.currentTarget.value);
        input.name==="processor" ? s1.processor= this.updateCBs(input.checked,input.value,s1.processor): input.name=="rating" ? s1.rating=this.updateCBs(input.checked,input.value,s1.rating) :input.name==="hardDisk" ? s1.hardDisk= this.updateCBs(input.checked,input.value,s1.hardDisk): s1[input.name]=input.value;
        this.props.onChangeOption(s1);
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
        const {optionsSel,optionsArray}=this.props;
        return <div className="container">
            <h6>Chose Options</h6>
            <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>Clear All</button>
            <br/>
            {this.showDropdowns("Brand",optionsArray.brand,"brand",optionsSel.brand)}
            {this.showDropdowns("RAM",optionsArray.ram,"ram",optionsSel.ram)}
            {this.showCheckboxes("Processor",optionsArray.processor,"processor",optionsSel.processor)}
            {this.showCheckboxes("Ratings",optionsArray.rating,"rating",optionsSel.rating)}
            {this.showCheckboxes("HarDisk",optionsArray.hardDisk,"hardDisk",optionsSel.hardDisk)}
        </div>;
    }
                   
                    
    showDropdowns=(label,arr,name,selVal)=>{
        return (<React.Fragment>
            <label className="form-check-label font-weight-bold">
               <b>{label}</b>
            </label>
            <select  className="form-control"
                      name={name} value={selVal} onChange={this.handleChange}>
                        <option disabled value="">
                            Select the {label}
                        </option>
                        {arr.map((n1)=>(
                            <option >{n1}</option>
                        ))}
                    </select>
        </React.Fragment>)
    };
    showCheckboxes = (label,arr,name,selArr)=>{
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

}
export default LeftPanelForm;
//checkboxes for brand and ram
//radios for processor and rating
