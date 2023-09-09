import React,{Component} from "react";
class Empvalidation extends Component{
    state={

            person:{name:"",age:"",email:"",city:"",add:""},
        errors:{},
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let s1= {...this.state};
        s1.person[input.name]=input.value;
        this.handleValidate(e);
        this.setState(s1);

    };
    handleSubmit=(e)=>{
            let errors=this.validateAll();
            if(this.isValid(errors))
            alert("Submitted Successfully");
        else {
            let s1 = {...this.state};
            s1.errors = errors;
            this.setState(s1);

    }
}
    validateAll=()=>{
        let {name,age,city,add,email}=this.state.person;
        let errors={};
        errors.name=this.validateName(name);
        errors.age=this.validateAge(age);
        errors.city=this.validateCity(city);
        errors.email=this.validateEmail(email);
        return errors;
    };
    validateName=(name)=>{
        return !name ? "Name must be entered" : name.length < 5 ? "Name should have minimum 5 characters" : "";
    };
    validateAge=(age)=>{
        return  !age ? "Age must be entered" : age<20 ? "Age should be greater than 20" : "";
    };
    validateCity=(city)=>{
        return !city ? "Name must be entered" :"";

    };
    validateEmail=(email)=>{
        return !email ? "Email must be entered" :email.indexOf("@")===-1? "Email must contain @" :"";

    };
    
    isValid=(errors)=>{
        //errors would have keys with non empty strings as values
        let keys = Object.keys(errors);//keys in an array
        let count = keys.reduce((acc,curr) => (errors[curr] ? acc + 1 : acc ),0);
        console.log(count);
        return count === 0 ;
    };
    isFormValid=()=>{
        let errors = this.validateAll();
        return this.isValid(errors); 
    };
    handleValidate=(e)=>{
        //only the field which the has been fired
        let {currentTarget : input } = e;
        let s1={...this.state};
        switch(input.name){
            case "name":s1.errors.name=this.validateName(input.value);break;
            case "age":s1.errors.age=this.validateAge(input.value);break;
            case "city":s1.errors.city=this.validateCity(input.value);break;
            case "email":s1.errors.email=this.validateEmail(input.value);break;
            default:
                break;
        }
        this.setState(s1);
    }

render(){
    let {errors,person}=this.state;
    let {name,age,email,city,add}=this.state.person;
    return(
        <React.Fragment>
             <div className="container">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        {errors.name ? (<span className="text-danger">{errors.name}</span>) : 
                      ( "")}
        <div className="form-group">
            <label>Age</label>
            <input type="number" className="form-control" id="age" name="age" placeholder="Enter age"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        <span className="text-danger">{errors.age}</span>
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" id="email" name="email" placeholder="Enter email"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        <span className="text-danger">{errors.email}</span>
        <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" id="city" name="city" placeholder="Enter city"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        <span className="text-danger">{errors.city}</span>
        <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" id="add" name="add" placeholder="Enter address"  onChange={this.handleChange}/>
        </div>
        <button className="btn btn-primary" disabled={!this.isFormValid()} onClick={()=>this.handleSubmit()}>Submit</button>
        
        </div>
        </React.Fragment>
    )




}

    

}
export default Empvalidation;