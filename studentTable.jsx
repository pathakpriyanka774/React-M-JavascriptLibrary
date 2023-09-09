import React, {Component} from "react";
class Arraytble extends Component {
    state={
   students:[{name:"Williams" ,maths:34 ,english:36 },
    {name:"George" ,maths:24 ,english:31 },
    {name:"Katherine" ,maths:36 ,english:41 },
    {name:"Sophia" ,maths:45 ,english:37 },
    {name:"Timothy" ,maths:22 ,english:19 }
 ]
    };
    getRowStyle = (m1,m2)=>(m1+m2>=60 ? "bg-success" : "bg-danger");
render(){
    let {students}=this.state;
    const sts=students.filter((s1)=> s1.maths+s1.english>=60);
    return(
        <div className="container">
        
             <div className="row border bg-dark text-white">
             <div className="col-6 border">Name</div>
             <div className="col-3 border">Maths</div>
             <div className="col-3 border">English</div>
         </div>
         {
            sts.map((st)=>(
                <div className={"row border " + this.getRowStyle(st.maths,st.english)}>
                    <div className="col-6 border">{st.name}</div>
                    <div className="col-3 border">{st.maths}</div>
                    <div className="col-3 border">{st.english}</div>
                </div>))
        }

        </div>
    );
}

}
export default Arraytble;