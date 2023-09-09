import React,{Component} from "react";
import Game2cell from "./game2cell";
import elephant from './elephant.jpg';
import crocodile from './crocodile.png';
import fish from './fish.jpg';
import giraf from './giraf.jpg';
import gorilla from './gorilla.webp';
import koala from './koala.png';
import tiger from './tiger.png';
import polarbear from './polarbear.png';
class CellMain1 extends Component{
    state={
        arr:[{img1:"elephant",open:false},
            {img1:"fish",open:false},
            {img1:"koala",open:false},
            {img1:"crocodile",open:false},
            {img1:"giraf",open:false},
            {img1:"elephant",open:false},
            {img1:"gorilla",open:false},
            {img1:"tiger",open:false},
            {img1:"koala",open:false},
            {img1:"polarbear",open:false},
            {img1:"fish",open:false},
            {img1:"crocodile",open:false},
            {img1:"giraf",open:false},
            {img1:"gorilla",open:false},
            {img1:"tiger",open:false},
            {img1:"polarbear",open:false},
        ],
           open1:-1,
           open2:-1,
           gameover:false,
           btn1:false,
        
    };
    onClickHandle=(valCell)=>{
        let s1={...this.state};
        if(s1.open2==-1){
        s1.arr[valCell].open=true;
        }
       if(s1.open1==-1){
            s1.open1=valCell;
       }
        else if(s1.open2==-1){ 
            s1.open2=valCell;
        }
        if(s1.open2!=-1){
        setTimeout(() => this.doCellsMatching (), 1000);
        s1.btn1=true;
        
        }
        this.setState(s1);
    }
    doCellsMatching=()=>{
        let s1={...this.state};
        
        console.log(s1.open1,s1.open2);
        if(s1.arr[s1.open1].img1==s1.arr[s1.open2].img1){
            s1.arr[s1.open1].img1="";
            s1.arr[s1.open2].img1="";
            s1.open1=-1;
            s1.open2=-1;
        }
        else{
            s1.arr[s1.open1].open=false;
            s1.arr[s1.open2].open=false;
            s1.open1=-1;
            s1.open2=-1;
        }
        const fd1=s1.arr.find((n1)=>{
            if(n1.open==false){
                return n1;
            }
        });
        if(fd1==undefined){
            s1.gameover=true;
        }
        s1.btn1=false;
        
        this.setState(s1);

    }
    gamebtn=()=>{
            let s1={...this.state};
            const map1=s1.arr.map((n1)=>{
                n1.open=-1;
            });
            this.setState(s1);
        
    }
    render(){
        let{arr,gameover,btn1}=this.state;
        let mystr='';
       if(gameover==true){
            mystr=<h5 className="ms-5">Game Over</h5>
       }
       
        
        return(
            <React.Fragment>
                {mystr}
                <div className="row gamerow " id="myid" >
                <Game2cell  arr1={arr[0]}  valCell={0} btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[1]} valCell={1}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[2]} valCell={2}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[3]} valCell={3}  btn1={btn1} onClickbtn={this.onClickHandle} />
                </div>
                <div className="row gamerow">
                <Game2cell  arr1={arr[4]} valCell={4}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell  arr1={arr[5]} valCell={5} btn1={btn1}  onClickbtn={this.onClickHandle} />
                <Game2cell  arr1={arr[6]} valCell={6}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell  arr1={arr[7]} valCell={7}  btn1={btn1} onClickbtn={this.onClickHandle} />
                </div>
                <div className="row gamerow">
                <Game2cell arr1={arr[8]} valCell={8}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[9]} valCell={9}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[10]} valCell={10} btn1={btn1}  onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[11]} valCell={11}  btn1={btn1} onClickbtn={this.onClickHandle} />
                </div>
                <div className="row gamerow">
                <Game2cell arr1={arr[12]} valCell={12}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[13]} valCell={13} btn1={btn1}  onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[14]} valCell={14}  btn1={btn1} onClickbtn={this.onClickHandle} />
                <Game2cell arr1={arr[15]} valCell={15} btn1={btn1}  onClickbtn={this.onClickHandle} />
                </div>
            <button className="btn btn-primary ms-4" onClick={()=>this.gamebtn()}><h5>{gameover==true?"New Game":"Reset Game"}</h5></button>
               
            </React.Fragment>
        )
    

}
}
export default CellMain1;