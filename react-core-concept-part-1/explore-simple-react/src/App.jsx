
import './App.css'
import { Food } from './Food';
import { Todo } from './Todo';
function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <Todo task ="learn react"></Todo>
      <Food eat="ami khabo" isDone={true}></Food>
      <Food eat="ami khabo na" isDone={false}></Food>
      {/* <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Sports name="mintu" tec="js"></Sports>
      <Sports name="sikder" tec="react"></Sports>
      <Player name="rakib" run="33k"></Player>
      <Player name="sakib" run="55k"></Player> */}
   
    </>
  )
}

function Player ({name,run}) {
  return(
    <div className='student'>
      <p>Name: {name}</p>
      <p>Run: {run}</p>
    </div>
  )
}

function Person () {
  const personStyle = {
      color: "red"
  }
  const age = 22;
  return (
    <p style={personStyle}>I am Mintu {age}</p>
  )
}

function Student (props){
  return(
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: </p>
    </div>
  )
}


function Sports (props) {
  return(
    <div style={{
      border: "2px solid red"
    }}>
      <h2>Developer: {props.name}</h2>
      <p>Techno: {props.tec}</p>
    </div>
  )
}
export default App
