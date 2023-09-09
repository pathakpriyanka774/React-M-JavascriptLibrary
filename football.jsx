import React,{Component} from "react";
class FootBallmatch extends Component{
    state={
        arr:this.props.arr,
        start:0,
       
    };
    sortfun=(n1)=>{
        let s1={...this.state};
        s1.start=1;
        switch(n1){
            case 0:s1.arr.sort((n1,n2)=>n1.team.localeCompare(n2.team));break;
            case 1:s1.arr.sort((n1,n2)=>n2.matchcount - n1.matchcount);break;
            case 2:s1.arr.sort((n1,n2)=>n2.woncount - n1.woncount);break;
            case 3:s1.arr.sort((n1,n2)=>n2.lostcount - n1.lostcount);break;
            case 4:s1.arr.sort((n1,n2)=>n2.dwncount - n1.dwncount);break;
            case 5:s1.arr.sort((n1,n2)=>n2.goalfor - n1.goalfor);break;
            case 6:s1.arr.sort((n1,n2)=>n2.goalagnt-n1.goalagnt);break;
            case 7:s1.arr.sort((n1,n2)=>n2.points-n1.points);break;
        } 
        this.setState(s1);
    }
    render(){
        let {arr}=this.state;
        const pointble=arr.map((n1)=>{
            let str=<div className="row border"><div className="col-md-2">{n1.team}</div>
            <div className="col-md-1">{n1.matchcount}</div>
            <div className="col-md-1">{n1.woncount}</div>
            <div className="col-md-1">{n1.lostcount}</div>
            <div className="col-md-1">{n1.dwncount}</div>
            <div className="col-md-2">{n1.goalfor}</div>
            <div className="col-md-2">{n1.goalagnt}</div>
            <div className="col-md-2">{n1.points}</div></div>
            return str;

        });
        return(
            <React.Fragment>
            <React.Fragment><h1 className="text-center">Points Table</h1>
                    <div className="row border bg-dark text-white"><div className="col-md-2" onClick={()=>this.sortfun(0)}>Team</div>
                <div className="col-md-1" onClick={()=>this.sortfun(1)}>Played</div>
                <div className="col-md-1" onClick={()=>this.sortfun(2)}>Won</div>
                <div className="col-md-1" onClick={()=>this.sortfun(3)}>Lost</div>
                <div className="col-md-1" onClick={()=>this.sortfun(4)}>Drawn</div>
                <div className="col-md-2" onClick={()=>this.sortfun(5)}>Goals For</div>
                <div className="col-md-2" onClick={()=>this.sortfun(6)}>Goals Against</div>
                <div className="col-md-2" onClick={()=>this.sortfun(7)}>Points</div></div>
                {pointble}
                    </React.Fragment>
            </React.Fragment>
        )
    }

}
export default FootBallmatch;