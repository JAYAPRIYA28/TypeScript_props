

import './App.css';
import Greet from './Components/Greet';
import Child from './Components/Child';
import Parent from './Components/Parent';
import Event from './Components/Event';

const greetSlot = {
    countList: 10
}

const personList = [
  {
    first: "jaii",
    last: "priya"
  },
  {
    first: "jaii",
    last: "prakash"
  }
]



function App() {
  return (
    <div className="App">
      <Greet name='jaii' slot = {greetSlot} persons= {personList}  solution= "success"/>

      <Parent>
      <Child>this is child</Child>
      </Parent>
      <Event  handleClick={event => {
        console.log("you clicked me", event)
      }} handleChange={event => {
        console.log("changes happened", event, event.target.value)
      }}
      styles = {{ padding: '10px', color: 'red'}}/>
    </div>
  );
}

export default App;
