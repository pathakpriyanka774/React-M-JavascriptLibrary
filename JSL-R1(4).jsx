import React,{Component} from "react";
class Jsl4 extends Component{
    state = {secA: 
        [{ roll: 1, sec: "A", name: "Jack", maths: 67, eng: 71, comp: 61 },
        { roll: 2, sec: "A", name: "Mary", maths: 79, eng: 74, comp: 51 },
        { roll: 3, sec: "A", name: "Steve", maths: 61, eng: 78, comp: 46 },
        { roll: 4, sec: "A", name: "Bob", maths: 75, eng: 67, comp: 68 },
        { roll: 5, sec: "A", name: "Kathy", maths: 70, eng: 63, comp: 74 },
        { roll: 6, sec: "A", name: "Meg", maths: 46, eng: 61, comp: 63 },
        { roll: 7, sec: "A", name: "Tom", maths: 72, eng: 85, comp: 65 },
        { roll: 8, sec: "A", name: "David", maths: 85, eng: 71, comp: 85 }],
        secB: 
        [{ roll: 1, sec: "B", name: "Arthur", maths: 67, eng: 55, comp: 78 },
        { roll: 2, sec: "B", name: "Kevin", maths: 69, eng: 64, comp: 68 },
        { roll: 3, sec: "B", name: "Harry", maths: 61, eng: 88, comp: 80 },
        { roll: 4, sec: "B", name: "Martin", maths: 65, eng: 60, comp: 48 },
        { roll: 5, sec: "B", name: "Pam", maths: 80, eng: 53, comp: 54 },
        { roll: 6, sec: "B", name: "Nicky", maths: 76, eng: 71, comp: 83 },
        { roll: 7, sec: "B", name: "Robert", maths: 82, eng: 65, comp: 75 },
        { roll: 8, sec: "B", name: "Susan", maths: 65, eng: 81, comp: 50 }],
        click: -1,
        stringtb:'',
    };
    secAbnt1=(secA)=>{
        let s1={...this.state};
       s1.stringtb=this.state.secA.sort((n1,n2)=>(n2.maths+n2.eng+n2.comp)-(n1.maths+n1.eng+n1.comp));
       s1.click="Performance Report of Section A - Sorted by Total";
       this.setState(s1);
    }
    secAbnt2=()=>{
        let s1={...this.state};
       s1.stringtb=this.state.secB.sort((n1,n2)=>(n2.maths+n2.eng+n2.comp)-(n1.maths+n1.eng+n1.comp));
       s1.click="Performance Report of Section B - Sorted by Total";
       this.setState(s1);
    }
    secAbnt3=()=>{
        let s1={...this.state};
        let s2arr=[...s1.secA,...s1.secB];
       s1.stringtb=s2arr.sort((n1,n2)=>(n2.maths+n2.eng+n2.comp)-(n1.maths+n1.eng+n1.comp));
       s1.click="Performance Report of All SectionS - Sorted by Total";
       this.setState(s1);
    }
    secAbnt4=()=>{
        let s1={...this.state};
       s1.stringtb=this.state.secA.sort((n1,n2)=>n1.name.localeCompare(n2.name));
       s1.click="Performance Report of Section A - Sorted by Name";
       this.setState(s1);
    }
    secAbnt5=()=>{
        let s1={...this.state};
       s1.stringtb=this.state.secB.sort((n1,n2)=>n1.name.localeCompare(n2.name));
       s1.click="Performance Report of Section B - Sorted by Name";
       this.setState(s1);
    }
    secAbnt6=()=>{
        let s1={...this.state};
        let s2arr=[...s1.secA,...s1.secB];
       s1.stringtb=s2arr.sort((n1,n2)=>n1.name.localeCompare(n2.name));
       s1.click="Performance Report of All SectionS - Sorted by Name";
       this.setState(s1);
    }
render(){
    let {secA,secB,click,stringtb}=this.state;
    let dipp='';
    let str1='';
    let title='';
    console.log(stringtb);
    if(click==-1){
        dipp='';
        title='';
    }
    else{
    const tmap=stringtb.map((n1)=>{
      let total=n1.maths+n1.eng+n1.comp;
      let str=<div className="row justify-content-center">
        <div className="col-md-1 border">{n1.roll}</div>
      <div className="col-md-1 border">{n1.sec}</div>
      <div className="col-md-2 border">{n1.name}</div>
      <div className="col-md-2 border">{n1.maths}</div>
      <div className="col-md-2 border">{n1.eng}</div>
      <div className="col-md-2 border">{n1.comp}</div>
      <div className="col-md-1 border">{total}</div>
      </div>
    return str;
    });
     str1=<div className="row justify-content-center">
          <div className="col-md-1 bg-dark text-white border">RollNo</div>
      <div className="col-md-1 bg-dark text-white border">Section</div>
      <div className="col-md-2 bg-dark text-white border">Name</div>
      <div className="col-md-2 bg-dark text-white border">Maths</div>
      <div className="col-md-2 bg-dark text-white border">English</div>
      <div className="col-md-2 bg-dark text-white border">Computers</div>
      <div className="col-md-1 bg-dark text-white border">Total</div>
    </div>
    dipp=tmap;
    title=click;
    }
return(
<React.Fragment>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt1()}>SecA by Total</button>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt2()}>SecB by Total</button>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt3()}>All Sec by Total</button>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt4()}>SecA by Name</button>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt5()}>SecB by Name</button>
<button className="btn btn-primary m-5" onClick={()=>this.secAbnt6()}>All Sec by Name</button>
<h3 className="text-center">{title}</h3>
{str1}
{dipp}
</React.Fragment>
)
}
}
export default Jsl4;
