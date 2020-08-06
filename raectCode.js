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


=================
Typewriter effect practice code 
=================================



class App extends React.Component{
    constructor(props){   //props is always be the argumnet fo the class constructor
        super()
        this.state={
            name:"Rohan", 
            text:"This is codebloded i a a web developer and comoputer enginner"
        }
        console.log(props.last);
        this.handleFunc = this.handleFunc.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
    }

    handleFunc(){
        this.setState((preState=>{
            return{
                name:"Codebloded"
            }
        }));
    }

    typeWriter(){
        let text = this.state.text;
        console.log(this.state.text)
        let i=0;
        let speed =50;
        function print(){

            if(i> text.length){
                document.getElementById('root').innerHTML += text.charAt(i)
                i++;
                setTimeout(print(), speed)       
            }
        }
    }

    render(){
        return (
            <React.Fragment>

        <h1>{this.state.name} {this.props.last}</h1>
        <button onClick={this.handleFunc}>Click me</button>
        <h1 id="type">{this.state.text}</h1>
        <button onClick={this.typeWriter}>Click me</button>

            </React.Fragment>
        )
    }
} 

=====================================================================================================


========================================
//Conditonal rendrfing in  reacct

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            isLoggedIn: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState(prevState => {
            return{
                   isLoggedIn: !prevState.isLoggedIn,
                   
            }
        });
    }

  
    render(){
        let displayTxt;
        let logTxt;
        if(this.state.isLoggedIn ===true){
            logTxt="Log Out";
        } 
        else{
            logTxt = "Log In";
        }

        if(this.state.isLoggedIn=== true){
            displayTxt = "Logged in";
        }
        else{
            displayTxt = "Logged out";
        }


        return(

            <div>
                <h1>You are {displayTxt} now , click {logTxt} </h1>
        <button onClick={this.clickHandler}>{logTxt}</button>
        <h1>{this.state.txt}</h1>
            
        </div>
            )
    }

}

===========================================================================================

======================================
fetching the API using react
=======================================

class App extends React.Component{
    constructor(){
        super()
        this.state={
            info:{},
            loading:false
        }
    }
    componentDidMount(){

        this.setState({
            loading:true
        })

        fetch("https://dog.ceo/api/breeds/image/random ")
            .then(response => response.json())
            .then(data=>{
                this.setState({
                    loading:false,
                    info:data
                })
                console.log(data);
            })
        
    }

    render(){
        let txt;
        if(this.state.loading === true){
            txt = "Loading..."
        }
        else{
            txt=this.state.info.message;
        }
        return(
            <div>

        
        <img src={txt}/>
            </div>
        )
    }
}







