import React,{Component} from "react";
class quest4 extends Component {
    state = {product: {code: "MDT311",price: 50,targetSales: 20,actualSales: 30}};
   quest4fun=()=>{
    let {code,price,targetSales,actualSales}=this.state.product;;
    let tgd=targetSales>actualSales?"No":"Yes";
    return(
       <React.Fragment>
        <h3>Product code : {code}</h3>
        <h3>Price : {price}</h3>
        <h3>Sales Target : {targetSales}</h3>
        <h3>Actual Sales Value : {actualSales}</h3>
        <h3>Target Achieved : {tgd}</h3>
       </React.Fragment>

    )
   }

    render(){
      return (this.quest4fun());
    }
}
export default quest4;
