import React , {useState , useEffect} from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

function App () {
    const [robots,setRobots] =useState([])
    const [searchfield,setSearchfield] = useState('')
    const [count,setCount]= useState(0)

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/Users',{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'},)
          .then(Response =>Response.json())
          .then(users =>{setRobots(users)});
    },[count]) //only run if count changes 

   const onSearchChange=(event) =>{
     setSearchfield(event.target.value)
    }
  
    const filteredRobots=robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
    <h1>loading</h1>:
        (
           <div className="tc">
                <h1 className="f1 ">ROBOFRIENDS</h1>
                <button onClick={()=>setCount (count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            
            </div>
            
        );

   
}

export default App;