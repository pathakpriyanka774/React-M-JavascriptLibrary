import React,{Component} from "react";
import {Link} from "react-router-dom";
class CourseAppWEL extends Component{
    render(){
        return(
            <div className="container">
                <h4>Welcome : Choose your course</h4>
                <Link to="/coursePage/React">React</Link><br/>
                <Link to="/coursePage/Angular">Angular</Link><br/>
                <Link to="/coursePage/Javascript">Javascript</Link><br/>
            </div>
        );
    }

}
export default CourseAppWEL;