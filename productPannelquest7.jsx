import React,{Component} from "react";
class ProductPannel7 extends Component{
    handleChange = (e) =>{
        //optionArray , optionSel
        let s1= {...this.props.optionsSel};
        let { currentTarget : input}=e;
        input.name==="name" ? s1.pName=this.updateCBs(input.checked,input.value,s1.pName): s1.pName=input.value;
        this.props.onChangeOption(s1);
    };
    updateCBs = (checked,value,arr) =>{
        if(checked) arr=value;
        else{
            arr=""; 
        }
        return arr;
    }
    render(){
        const {optionsSel,optionsArray}=this.props;
        console.log(optionsArray);
        return <div className="container">
            {this.showcheckboxes("Product",optionsArray,"name",optionsSel.pName)}
        </div>;
    }                
    
    showcheckboxes = (label,arr,name,selArr)=>{
        return (
            <React.Fragment>
                 <label className="form-check-label font-weight-bold"><b>{label}</b></label>
                        {arr.map(opt=>
                            (<div className="form-check ">
                            <input className="form-check-input" type="radio" name={name}
                            value={opt}
                            checked={selArr==opt}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">{opt} </label></div>
                            ))}
            </React.Fragment>
        )
    }

}
export default ProductPannel7;
//checkboxes for brand and ram
//radios for processor and rating
