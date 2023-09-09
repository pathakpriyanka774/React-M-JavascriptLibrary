import React,{Component} from "react";
class SimpleForm1 extends Component{
    state={
        person:this.props.person,
        errors:{},
            countries:["United States of America","Canada","India","United Kingdom"],
            countryList:[
                {
                    country:"United States of America",
                    cities:["New York","Los Angeles","Seattle","San Fransisco"],
                },
                {
                    country:"Canada",
                    cities:["Toronto","Montreal","Vancouver"],
                },
                {
                    country:"India",
                    cities:["New Delhi","Bengluru","Pune","Chennai"],
                },
                {
                    country:"United Kingdom",
                    cities:["London","Bristol","Menchester"],
                },
            ],
            designations:["Developer","Senior Developer","Team Lead","Architect","Delivery Manager"],
            techs:["React","Javascript","JQuery","AngularJS"],
            experience:["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"],
            manager: ["Meg Smith","Bill Watson","Tim Gates","George Cook","Larry Gomes"],
            servers: ["Development","Deployment","Alpha Test","Beta Test","BackUp"],

        };
        handleChange=(e)=>{
            const {currentTarget:input}=e;
            let s1={...this.state};
            input.type==="checkbox"?
            input.name==="techsKnown" ? (s1.person.techsKnown= this.updateCBs(input.checked,input.value,s1.person.techsKnown)) : input.name==="serveracess" ? (s1.person.serveracess= this.updateCBs(input.checked,input.value,s1.person.serveracess)) : (s1.person[input.name]=input.checked):
            s1.person[input.name]=input.value;
            if(input.name==="country") s1.person.city="";
            if(!s1.person.passport) s1.person.passportNumber="";
            this.handleValidate(e);
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
            let errors= this.validateAll();
            if(this.isValid(errors))
            this.props.onSubmit(this.state.person);
        else {
            let s1 = {...this.state};
            s1.errors = errors;
            this.setState(s1);

        }
        };
        handleValidate=(e)=>{
            //only the field which the has been fired
            let {currentTarget : input } = e;
            let s1={...this.state};
            switch(input.name){
                case "name":s1.errors.name=this.validateName(input.value);break;
                case "age":s1.errors.age=this.validateAge(input.value);break;
                case "country":s1.errors.country=this.validateCountry(input.value);break;
                default:
                    break;
            }
            this.setState(s1);
        }
        isValid=(errors)=>{
            //errors would have keys with non empty strings as values
            let keys = Object.keys(errors);
            console.log(errors);//keys in an array
            let count = keys.reduce((acc,curr) => (errors[curr] ? acc + 1 : acc ),0);
            console.log(count);
            return count === 0 ;
        };

        isFormValid=()=>{
            let errors = this.validateAll();
            return this.isValid(errors); 
        };

        validateAll=()=>{
            let {name,age,country,city,gender,passport,passportNumber,designation,techsKnown,experience,license,
            manager1,serveracess} = this.state.person;
            let errors={};
            errors.name=this.validateName(name);
            errors.age=this.validateAge(age);
            errors.country=this.validateCountry(country);
            if(!country) errors.country="Country must be selected";
            if(!city) errors.city="City must be selected";
            if(!gender) errors.gender="Gender must be selected";
            if(passport && !passportNumber) errors.passportNumber="Fill passport number";
            if(!designation) errors.designation="Designation must be selected";
            if(!techsKnown) errors.techsKnown="Select some technologies";
            if(!experience) errors.experience="Select Experience";
            if(!manager1) errors.manager1="Choose Manager";
            if(!serveracess) errors.serveracess="Choose the server Access";
            return errors;
        };

        validateName=(name)=>{
            console.log(name);
           return !name ? "Name must be entered" : name.length < 5 ? "Name should have minimum 5 characters" : "";

        }
        validateAge=(age)=>{
          return  !age ? "Age must be entered" : age<21 || age>75 ? "Age should be between 21 and 75" : "";

        }
        validateCountry=(country)=>{
           return !country ? "country must be selected" : "";
        }
    render(){
        let {name,age,country,gender,passport,license,experience1,
            city,passportNumber,designation,techsKnown=[],serveracess=[],manager1}=this.state.person;
        let {countries,countryList,designations,techs,experience,manager,servers,errors}=this.state;
        const cities=country ? countryList.find((c1)=>c1.country==country).cities:[];
        return(
            <div className="container">
                <h5>Enter New Details</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" value={name} onChange={this.handleChange}
                    onBlur={this.handleValidate}/>
                    {errors.name ? (<span className="text-danger">{errors.name}</span>) : 
                      ( "")}
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" id="age" name="age" placeholder="Enter Age" value={age} onChange={this.handleChange}
                     onBlur={this.handleValidate}/>
                    {errors.age ? (<span className="text-danger">{errors.age}</span>) : 
                      ( "")}
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <select  className="form-control"  name="country" value={country} onChange={this.handleChange}
                     onBlur={this.handleValidate}>
                        <option disabled selected value="">
                            Select the Country
                        </option>
                        {countries.map((n1)=>(
                            <option>{n1}</option>
                        ))}
                    </select>
                    {errors.country ? (<span className="text-danger">{errors.country}</span>) : 
                      ( "")}
                    </div>
                    {country ?(<div className="form-group">
                    <label>City</label>
                    <select  className="form-control"
                      name="city" value={city} onChange={this.handleChange}>
                        <option disabled value="">
                            Select the City
                        </option>
                        {cities.map((n1)=>(
                            <option>{n1}</option>
                        ))}

                    </select>
                    {errors.cities ? (<span className="text-danger">{errors.cities}</span>) : 
                      ( "")}
                    </div>):"" }
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender"
                        value="Male"
                        checked={gender==="Male"}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">Male </label></div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender"
                        value="Female"
                        checked={gender==="Female"}
                        onChange={this.handleChange}/>
                        <label className="form-check-label">Female </label>
                        
                        </div>
                        <br/>
                        {errors.gender ? (<span className="text-danger">{errors.gender}</span>) : 
                      ( "")}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={passport} name="passport" checked={passport}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">Passport</label>
                            
                        </div>
                        {passport ?  (<div className="form-group">
                    <label>Passport Number</label>
                    <input type="text" className="form-control" id="passportNumber" name="passportNumber" placeholder="Enter Passport Number" value={passportNumber} onChange={this.handleChange}/><br/>
                    {errors.passportNumber ? (<span className="text-danger">{errors.passportNumber}</span>) : 
                      ( "")}
                </div>):""}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={license} name="license" checked={license}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">License</label>
                        </div>
                        <label className="form-check-label font-weight-bold"><b>Choose the Designation</b>&nbsp;</label>
                        {designations.map(d1=>
                            ( <div className="form-check form-check-inline">
                                
                            <input className="form-check-input" type="radio" name="designation"
                            value={d1}
                            checked={designation==d1}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">{d1} </label>
                           </div>
                            ))}
                            <br/> 
                            {errors.designation ? (<span className="text-danger">{errors.designation}</span>) : 
                      ( "")}
                      <br/>
                            <label className="form-check-label"><b>Choose the Technologies</b> </label>
                            {techs.map(t1=>(
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={t1} name="techsKnown" checked={techsKnown.findIndex((tech)=>tech===t1) >=0}
                                onChange={this.handleChange}/>
                                <label className="form-check-label">{t1}</label>
                                
                            </div>
                            ) )}
                            {errors.techsKnown ? (<span className="text-danger">{errors.techsKnown}</span>) : 
                      ( "")}
                        <br/>
                        <div className="form-group">
                    <label>Work Experience</label>
                    <select  className="form-control"  name="experience1" value={experience1} onChange={this.handleChange}>
                        <option disabled selected value="">
                            Select the Work Experience
                        </option>
                        {experience.map((n1)=>(
                            <option>{n1}</option>
                        ))}
                    </select>
                    {errors.experience ? (<span className="text-danger">{errors.experience}</span>) : 
                      ( "")}
                    </div>
                    <br/>
                    <label className="form-check-label font-weight-bold"><b>Choose the Manager </b>&nbsp;</label>
                        {manager.map(d1=>
                            ( <div className="form-check form-check-inline">
                                
                            <input className="form-check-input" type="radio" name="manager1"
                            value={d1}
                            checked={manager1==d1}
                            onChange={this.handleChange}/>
                            <label className="form-check-label">{d1} </label>
                           </div>
                            ))}
                            <br/> 
                            <label className="form-check-label"><b>Choose the Server Access</b> </label>
                            {servers.map(t1=>(
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={t1} name="serveracess" checked={serveracess.findIndex((server)=>server===t1) >=0}
                                onChange={this.handleChange}/>
                                <label className="form-check-label">{t1}</label>
                            </div>
                            ) )}
                            
                            {errors.serveracess ? (<span className="text-danger">{errors.serveracess}</span>) : 
                      ( "")}
                        <br/>


                    <button className="btn btn-primary" onClick={this.handleSubmit} 
                    disabled={!this.isFormValid()}>Submit</button>
                
            </div>
        );

    }


}
export default SimpleForm1;