import React from "react";
class Classcomponent extends React.Component{
    constructor(){
        super();
        this.state ={count:0}
    }
    increase= ()=>{
        this.setState({count:this.state.count+1});
    }
    componentDidMount(){
        console.log("It logs on first browser run ")
    }
    componentDidUpdate(prevPorp,prevState){
        prevState.count !== this.state.count ? console.log("this runs on updating the count"):""; 
    }
    render(){
        return(
            <>
             <h1>coount is {this.state.count}</h1>
             <button onClick={this.increase}>Add</button>
            </>
        )
    }
}
export default Classcomponent;