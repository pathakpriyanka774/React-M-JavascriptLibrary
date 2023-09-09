import React,{Component} from "react";
import Cell from "./cell";
class CellMain extends Component{
    state={
        arr:[{colno:1,value:-1},
            {colno:2,value:-1},
            {colno:3,value:-1},
            {colno:4,value:-1},
            {colno:5,value:-1},
            {colno:6,value:-1},
            {colno:7,value:-1},
            {colno:8,value:-1},
            {colno:9,value:-1},
        ],
            nextMove:"X",
            gameover:false,
            in1:1,
    };
    onClickHandle=(cell,nmv)=>{
        let s1={...this.state};
        s1.arr[cell].value=nmv;
        if(nmv=="X"){
        s1.nextMove="0";
        }
        else{
            s1.nextMove="X";
        }
        console.log(s1.arr);
        this.setState(s1);
    }
    gamebtn=()=>{

            let s1={...this.state};
            const map1=s1.arr.map((n1)=>{
                n1.value=-1;
            });
            this.setState(s1);
        
    }
    render(){
        let{arr,nextMove,gameover,in1}=this.state;
        const fd=arr.find((n1)=>{
            if(n1.value==-1){
                return n1;
            }
        });
        let mystr=<h1>MOVE : {nextMove}</h1>
        if(fd==undefined)
        {
            gameover=true;
            mystr=<h1>Game Over</h1>

        }
        return(
            <React.Fragment>
                {mystr}
                <div className="row gamerow">
                <Cell cellno={0} valCell={arr[0].value} nextmove={nextMove} onClickbtn={this.onClickHandle} />
                <Cell cellno={1} valCell={arr[1].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                <Cell cellno={2} valCell={arr[2].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                </div>
                <div className="row gamerow">
                <Cell cellno={3} valCell={arr[3].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                <Cell cellno={4} valCell={arr[4].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                <Cell cellno={5} valCell={arr[5].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                </div>
                <div className="row gamerow">
                <Cell cellno={6} valCell={arr[6].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                <Cell cellno={7} valCell={arr[7].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                <Cell cellno={8} valCell={arr[8].value} nextmove={nextMove}  onClickbtn={this.onClickHandle} />
                </div>
            <button className="btn btn-primary" onClick={()=>this.gamebtn()}><h5>{gameover==true?"New Game":"Reset Game"}</h5></button>
              
               

            </React.Fragment>
        )
    

}
}
export default CellMain;