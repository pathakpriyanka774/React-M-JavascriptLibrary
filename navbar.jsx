import React,{Component} from "react";
class Navbar extends Component{
    render(){
  let {count,qty}=this.props;
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            MySystem
        </a>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Products
                    <span className="badge badge-pill bg-secondary badge-secondary">{count}</span>
                    </a>

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Quantity
                        <span className="badge badge-pill bg-secondary badge-secondary">{qty}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
    }
}
export default Navbar;