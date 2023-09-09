import React,{Component} from "react";
class CustForm extends Component{
    state={
         optionarr:this.props.optionsSel,
         genarr:["Male","Female"],
         delopt:["Home","Office","Pickup"],
        payment:["Credit Card","Debit Card","Net Banking"],
        slotarr:["2pm-7pm","before 10am"],
        };
        handleChange=(e)=>{
            const {currentTarget:input}=e;
            let s1={...this.state};
            console.log(input.value);
            input.type==="checkbox"?
            input.name==="payopt" ? (s1.optionarr.payopt = this.updateCBs(input.checked,input.value,s1.optionarr.payopt)) :(s1.optionarr[input.name]=input.checked):
            s1.optionarr[input.name]=input.value;
            this.setState(s1);
        }
        updateCBs=(checked,value,arr)=>{
            if(checked) arr.push(value);
            else{
                let index=arr.findIndex(ele=>ele===value);
                if(index >=0) arr.splice(index,1);
            }
            return arr;
        };
        handleSubmit=(e)=>{
            e.preventDefault();
            this.props.onSubmit(this.state.optionarr);
        };


    render(){
        let {name,gender,deliveryopt,payopt=[],slot}=this.state.optionarr;
        let {slotarr,payment,delopt,genarr}=this.state;
        return(
            <div className="container">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" value={name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <select  className="form-control"  name="slot" value={slot} onChange={this.handleChange}>
                        <option disabled selected value="">
                            Select the Slot
                        </option>
                        {slotarr.map((n1)=>(
                            <option>{n1}</option>
                        ))}
                    </select>
                    </div>
                    {
                    genarr.map((n1)=>{
                        return(
                            <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender"
                        value={n1}
                        checked={gender===n1}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">{n1}</label></div>
                        );
                    })}
                   \
                        <br/>
                         {
                            delopt.map((n1)=>{
                                return(
                                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="deliveryopt"
                        value={n1}
                        checked={deliveryopt===n1}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">{n1} </label></div>

                                );
                            })
                         }
                            <br/>
                            <label className="form-check-label"><b>Choose your Payment Option</b> </label>
                            {payment.map(t1=>(
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={t1} name="payopt" checked={payopt.findIndex((n1)=>n1===t1) >=0}
                                onChange={this.handleChange}/>
                                <label className="form-check-label">{t1}</label>
                            </div>
                            ) )}
                      
                        <br/>


                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                
            </div>
        );

    }


}
export default CustForm;