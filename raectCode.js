//+++++++++++#Functional Components(How to make componemts+++++++++++++++++++
//Making Functional components
function MyInfo(){
  return (
    <React.Fragment>

    <h1>This is MyInfo()</h1>
    <p>Hello sir, i am a Functional component and can be reuse many times into the react code</p>
    </React.Fragment>
  )
}

ReactDOM.render(
  <MyInfo />,
        document.getElementById('root'))



//===========================================================
 //       React State : hopw state work
//===========================================================

import React from "react";
const { Component } = require("react");


class App extends Component{
    constructor(){
        super()
        this.state={
            islog:false,
            name:"Rohan"
        }

    }
    render(){
        let log;
        let logName;
        if(this.state.islog===true && this.state.name == "Rohan"){
            log="in";
            logName=this.state.name;
        }
        else{
            log="out";
            logName="codebloded"
        }
        return(
        <h1>You are logged {log} as {logName}</h1>
        )
    }
}

export default App;

//=============================================================================================



//=====================================
Events handling in react 
//=====================================

function handleFunc(){
    console.log("I clicked on click button;)")
   

}

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
        <div onMouseOut={()=>{console.log("hoverded out")}}>
            <img onMouseOver={()=>{console.log("Hovered on the image")} } src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"/>
            <button onClick={handleFunc} >click me</button>
        </div>
        )
        
    }
}


//===============================================================================================


//======================================================
//States aand changing states in class based components 
//======================================================


class App extends React.Component{
    constructor(){
        super()
        this.state={
            imgUrl:"https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
            name:'Rohan'
        };
        this.changeImg = this.changeImg.bind(this) 
    }

    changeImg(){
        console.log("Chnaging the imgage");
        this.setState({
            name:"codebloded",  
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzt9sqN5lLJ6j4fEIYsAh-wQJnuTLkZTADYw&usqp=CAU"
    });
}
    render(){
        return (
        <div onMouseOut={()=>{console.log("hoverded out")}}>
            <h1>{this.state.name}</h1>
            <img onMouseOver={()=>{console.log("Hovered on the image")} } src={this.state.imgUrl}/>
            <button onClick={handleFunc} >click me</button>
            <button onClick={this.changeImg} >click me</button>
        </div>  
        )


        
        
    }
}
//==================================================================================================

//===================================
//Another exmple of chnaging state
//====================================


class App extends React.Component{
    constructor(){
        super()
        this.state={
            flag:0
        };
     this.handleFunc = this.handleFunc.bind(this);
    }

    handleFunc()
    {
        console.log("clicked and flaged value is changed ")
        this.setState((prevState=>{
            return{
                flag:prevState.flag+1
            }
        }));
    }
    render(){
        return(
            <div>
                <h1>{this.state.flag}</h1>
                <button onClick={this.handleFunc}>Change!</button>
            </div>
        )
    }
} 
//==============================================================================================




