import React,{Component} from "react";
import elephant from './elephant.jpg';
import crocodile from './crocodile.png';
import fish from './fish.jpg';
import giraf from './giraf.jpg';
import gorilla from './gorilla.webp';
import koala from './koala.png';
import tiger from './tiger.png';
import polarbear from './polarbear.png';

class Game2cell extends Component{
    
render(){
    let {valCell,onClickbtn,arr1,btn1}=this.props;
    //document.getElementById("mybtn").disabled=btn1;
    console.log(btn1);
    let img='';

    if(arr1.open==true){
        if(arr1.img1=="elephant"){
        img=<div className="col-3 game2 border " id="mybtn" ><button className="btn" onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={elephant} /></button></div>
        }
        else if(arr1.img1=="tiger"){
            img= <div className="col-3 game2  border" id="mybtn"><button className="btn"  onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={tiger} /></button></div>
        }
        else if(arr1.img1=="giraf"){
            img= <div className="col-3 game2  border" id="mybtn"><button className="btn"   onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={giraf} /></button></div>
        }
        else if(arr1.img1=="polarbear"){
            img= <div className="col-3 game2  border" id="mybtn" ><button className="btn" onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={polarbear} /></button></div>
        }
        else if(arr1.img1=="koala"){
            img= <div className="col-3 game2  border" id="mybtn" ><button className="btn" onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={koala} /></button></div>
        }
        else if(arr1.img1=="gorilla"){
            img= <div className="col-3 game2  border" id="mybtn"><button className="btn"  onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={gorilla} /></button></div>
        }
        else if(arr1.img1=="fish"){
            img= <div className="col-3 game2  border" id="mybtn" ><button className="btn" onClick={()=>onClickbtn(valCell)} ><img className="animalimg" src={fish} /></button></div>
        }
        else if(arr1.img1=="crocodile"){
            img= <div className="col-3 game2  border" id="mybtn" ><button className="btn" onClick={()=>onClickbtn(valCell)}><img className="animalimg" src={crocodile} /></button></div>
        }
        else if(arr1.img1==""){
            img= <div className="col-3 game2gray  border"id="mybtn" onClick={()=>onClickbtn(valCell)}></div>


        }

    }
    else{
        img= <div className="col-3 game2  border" onClick={()=>onClickbtn(valCell)}></div>
    }
    return(
        <React.Fragment>
            
           {img}
           

        </React.Fragment>
    )
}
}
export default Game2cell;