import React,{Component} from "react";
import Books from "./books";
class Library extends Component{
    state={
        bookarr:[{name:"Hary Potter" ,author:"JK Rowlling" ,issued:false},
            {name:"War and Peace" ,author:"Leo Tolstoy" ,issued:false},
            {name:"Malgudi Days" ,author:"RK Narayan" ,issued:false},
            {name:"Gitanjali" ,author:"RN Taigor" ,issued:false}
        ],
        list:[],
    };
    handleIssue=(index)=>{
        let s1={...this.state};
        s1.list.push(s1.bookarr[index].name);
        s1.bookarr[index].issued=true;
       this.setState(s1);

    }
    returnclick=(n1,n2)=>{
        let s1={...this.state};
       s1.list.splice(n2,1);
       const  fd=s1.bookarr.findIndex((n3)=>{
            if(n3.name==n1)
            return n3;

        });
        s1.bookarr[fd].issued=false;
       this.setState(s1);

    }
    render(){
        let {bookarr,list}=this.state;
        let s1={...this.state};
        let isct='';
        let lib1='';
        let b2=bookarr.map((n1,index)=>{
            if(n1.issued==false){
        let b1=<Books name={n1.name} author={n1.author} issued={n1.issued} index={index} list={list} onissue={this.handleIssue}/>
        return b1;
            }
        });
        if(list.length==bookarr.length){
            lib1=<h3 className="mylib">Library is Empty</h3>; 
        }
        else{
            lib1=b2;
        }
        let l1=list.map((n1,index)=>{
            let str=<li>{n1}<button onClick={()=>this.returnclick(n1,index)}>Return</button></li>
            return str;
        })
        if(l1==''){
           isct=<p>No Book has been Issued</p>
        }
        else{
            isct=l1;
        }
        return(
            <React.Fragment>
                  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Library
        </a>
        <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Books Issued
                        <span className="badge badge-pill bg-secondary badge-secondary">{list.length}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
                <div className="container mydiv">
               <h3 className="mybook">Books in Library</h3>
                <div className="row row1 text-center">
               
            {lib1}</div>
            
            <h3>Issued Books</h3>
            <ul>{isct}</ul>
          
        
            </div>
            </React.Fragment>

        )
    }

}
export default Library;