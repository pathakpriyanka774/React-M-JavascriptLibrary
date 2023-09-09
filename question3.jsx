import React, {Component} from "react";
class Compdata extends Component{
    state = {employee:
         {name: "Steve Martin",
         company: "Google",
         department: "Technology",
         designation: "Senior Developer"}
        };
        aboveotpt=()=>{
            let {name,company,department,designation} = this.state.employee;
            console.log(name,company,department,designation);
            return (
                <React.Fragment>
                    <h2>Name : {name}</h2>
                    <h2>Company : {company}</h2>
                    <h2>Department : {department}</h2>
                    <h2>Designation : {designation}</h2>
                </React.Fragment>
            )

        }
        render(){
           
            return (this.aboveotpt());
        }

}
export default Compdata ;