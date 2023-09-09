import React,{Component} from "react";
class CountryCity extends Component{
   state={ locs: [{country: "India",cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
    {country: "USA",cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"]},
    {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
    {country: "Japan", cities: ["Tokyo", "Kyoto"]},
    {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]},
    
],

country1:"",
city:"",
   };
   handleChange=(e)=>{
    let {currentTarget:input}=e;
    let s1={...this.state};
    console.log(input.name);
    if(input.name=="country"){
        s1.country1=input.value;
        s1.city="";
    }
    else{
        s1.city=input.value;
    }

    this.setState(s1);

   };
   handleSubmit=()=>{
    let s1={...this.state};
    if(s1.country1!="" && s1.city!=""){
        alert("Counrty : "+s1.country1+" City : "+s1.city);



    }
   
    this.setState(s1);
   }
   render(){
     let {locs,country1,city}=this.state;
     const fd=locs.findIndex((n1)=>{
        if(n1.country==country1){
            return n1;
        }
    });
    
    let opt="";
    if(fd!=-1){
     opt=locs[fd].cities.map((n1)=>{
            return <option>{n1}</option>
        })

    }
    
     return(
        <div className="container">
            <div className="form-group">
                <select className="form-control" name="country" value={country1} onChange={this.handleChange} >
                <option disabled selected value="">
                            Choose Country
                        </option>
                        {locs.map((n1)=>(
                            <option>{n1.country}</option>
                        ))}
                </select>
                </div>
                <div className="form-group">
                    <select  className="form-control"
                      name="city" value={city} onChange={this.handleChange}>
                       <option disabled value="">
                            Choose City
                        </option>
                       {
                        opt
                       }
                </select>
                    </div>
                <button className="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
                </div>
     )


   }

}
export default CountryCity;