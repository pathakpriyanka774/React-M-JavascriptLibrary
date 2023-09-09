import React,{Component} from "react";
class ProdFormVal extends Component{
    state={

        product:this.props.product,
        errors:{},
        categoryarr:["Food", "Electronics","Apparels","Grocery"],
        discountarr:["5%","10%","20%"],
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let s1= {...this.state};
        s1.product[input.name]=input.value;
        this.handleValidate(e);
        this.setState(s1);

    };
    handleSubmit=(e)=>{
            let errors=this.validateAll();
            if(this.isValid(errors))
            this.props.onSubmit(this.state.product);
        else {
            let s1 = {...this.state};
            s1.errors = errors;
            this.setState(s1);

    }
}
    validateAll=()=>{
        let {name,desciption,code,discount,price,category}=this.state.product;
        console.log(this.state.product);
        let errors={};
        errors.name=this.validateName(name);
        errors.desciption=this.validatedescription(desciption);
        errors.code=this.validateCode(code);
        errors.discount=this.validateDiscount(discount);
        errors.price=this.validatePrice(price);
        errors.category=this.validateCategory(category);
        return errors;
    };
    validateName=(name)=>{
        return !name ? "Name must be entered" : name.length < 5 ? "Name should have minimum 5 characters" : "";
    };
    validatedescription=(desciption)=>{
        let str="";
        for (let i=0;i<desciption.length;i++){
            if(desciption[i]>="A" && desciption[i]<="Z" || desciption[i]>="a" && desciption[i]<="z" || desciption[i]==" "){
                str=true;
                
            }
            else{
                str=false;
                break;
            }
        }
          console.log(str);

        

        return  !desciption ? "Description must be entered" :str==false ? "Should not have any special characters except space and should not container any digit":str==true && desciption.length<10 ? "Description hould have minimum 10 characters" :"";
    };
    validateCode=(code)=>{
        let str="";
        let str1="";
        for(let i=0;i<2;i++){ 
            if(code[i]>="A" && code[i]<="Z")
            {
                str=true;
            }
            else{
                str=false;
                break;
            }
        }
        
        for(let i=2;i<6;i++){
            if(code[i]>=0 && code[i]<10)
            {
                str1=true;
            }
            else{
                str1=false;
                break;
            }
        } 
        return !code ? "Code must be entered" : str==true && str1==true && code.length!=6 ? "code should have 6 characters ":str==false ? "First Two characters should be in uppercase":str==true && str1==false ? "Last 4 characters should be digits" : "";

    };
    validateDiscount=(discount)=>{
        return !discount ? "Discount must be checked" :"";

    };
    validatePrice=(price)=>{
        let str="";
        for(let i=0;i<price.length;i++){
            if(price[i]>=0 && price[i]<=9)
            {
                str=true;
            }
            else{
                str=false;
                break;
            }
        }
        return !price || price==0 ? "Price should be greater than zero" :str==false ? "Price should be number":"";
    }
    validateCategory=(category)=>{
        return !category ? "Category must be selected":"";    
    }
    isValid=(errors)=>{
        //errors would have keys with non empty strings as values
        let keys = Object.keys(errors);//keys in an array
        let count = keys.reduce((acc,curr) => (errors[curr] ? acc + 1 : acc ),0);
        console.log(count);
        return count === 0 ;
    };
    isFormValid=()=>{
        let errors = this.validateAll();
        console.log(errors);
        return this.isValid(errors); 
    };
    handleValidate=(e)=>{
        //only the field which the has been fired
        let {currentTarget : input } = e;
        let s1={...this.state};
        switch(input.name){
            case "name":s1.errors.name=this.validateName(input.value);break;
            case "desciption":s1.errors.desciption=this.validatedescription(input.value);break;
            case "code":s1.errors.code=this.validateCode(input.value);break;
            case "discount":s1.errors.discount=this.validateDiscount(input.value);break;
            case "price":s1.errors.price=this.validatePrice(input.value);break;
            case "category":s1.errors.category=this.validateCategory(input.value);break;
            default:
                break;
        }
        this.setState(s1);
    };

render(){
    let {errors,categoryarr,discountarr}=this.state;
    let {name,desciption,code,category,price,discount}=this.state.product;
    return(
        <React.Fragment>
             <div className="container">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter name"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        {errors.name ? (<span className="text-danger">{errors.name}</span>) : 
                      ( "")}
        <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" id="desciption" name="desciption" value={desciption} placeholder="Enter description"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        {errors.desciption ? (<span className="text-danger">{errors.desciption}</span>) : 
                      ( "")}
        <div className="form-group">
            <label>Product Code</label>
            <input type="text" className="form-control" id="code" name="code" value={code} placeholder="Enter product code"  onChange={this.handleChange} onBlur={this.handleValidate} required/>
        </div>
        {errors.code ? (<span className="text-danger">{errors.code}</span>) : 
                      ( "")}
        <div className="form-group">
            <label>Category</label>  
            <select  className="form-control"  name="category" value={category} onChange={this.handleChange}
                     onBlur={this.handleValidate}>
                        <option disabled selected value="">
                            Select the Category
                        </option>
                        {categoryarr.map((n1)=>(
                            <option>{n1}</option>
                        ))}
                    </select>
        </div>
        {errors.category ? (<span className="text-danger">{errors.category}</span>) : 
                      ( "")}
        <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control" id="price" name="price" value={price} placeholder="Enter Price"  onChange={this.handleChange}
             onBlur={this.handleValidate}/>
        </div>
        {errors.price ? (<span className="text-danger">{errors.price}</span>) : 
                      ("")}
        <div className="form-group">
            <label>Discount</label>
            {discountarr.map(d1=>
                            ( <div className="form-check form-check-inline">
                                
                            <input className="form-check-input" type="radio" name="discount"
                            value={d1}
                            checked={discount==d1}
                            onChange={this.handleChange}
                            onBlur={this.handleValidate}
                            />
                            <label className="form-check-label">{d1} </label>
                           </div>
                            ))}
                            <br/> 
        </div>
        <span className="text-danger">{!discount?"Required(one of them should be checked":"" }</span> <br/> 
            
        <button className="btn btn-primary" disabled={!this.isFormValid()} onClick={()=>this.handleSubmit()}>Submit</button>
        
        </div>
        </React.Fragment>
    )
}
}
export default ProdFormVal;