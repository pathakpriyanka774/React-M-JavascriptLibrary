import React,{Component} from "react";
import PicViewer from "./PicViewerjsset7";
import PicFav from "./Favoritesjsset7";
class MainState extends Component{
    state = {pics: 
        ["https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        favorites: [],
        currentIndex: 0
    };
    handlePrew=(index)=>{
        let s1={...this.state};
        if(s1.currentIndex!=0){
        s1.currentIndex=index-1;
        }
        this.setState(s1);
    }
    handleNext=(index)=>{
        let s1={...this.state};
        if(s1.currentIndex<s1.pics.length-1){
        s1.currentIndex=index+1;
        }
        else{
            s1.currentIndex=s1.pics.length-1;
        }
        this.setState(s1);
    };
    handlefav=(pic)=>{
        console.log(pic);
        let s1={...this.state};
        const fd=s1.favorites.find((n1)=>{
            if(n1==pic){
                return n1;
            }
        });
        if(fd==undefined){
            s1.favorites.push(pic);
        }
        this.setState(s1);
    };
    handleclickpic=(index)=>{
        let s1={...this.state};
        s1.favorites.splice(index,1);
        this.setState(s1);
    }
    render(){
        let {pics,favorites,currentIndex}=this.state;
        const picMap=pics.map((n1,index)=>{
            if(index==currentIndex){
           return <PicViewer pic={n1} picindex={index} clickPrevious={this.handlePrew} clickNext={this.handleNext} clickAddfav={this.handlefav} />
            } 
        });
      return(
        <React.Fragment>
            {picMap}
            <PicFav pics={favorites} onclickpic={this.handleclickpic}/>
        </React.Fragment>
      )
    }
}
export default MainState;