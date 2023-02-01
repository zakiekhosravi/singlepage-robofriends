import React , { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/Users')
        .then(Response =>Response.json())
        .then(users =>this.setState({robots:users}))
        
    }

    onSearchChange=(event) =>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const {robots,searchfield} = this.state;
        const filteredRobots=this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>loading</h1>:
            (
               <div className="tc">
                    <h1 className="f1 ">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                
                </div>
                
            );
        
        
    }
   
}

export default App;