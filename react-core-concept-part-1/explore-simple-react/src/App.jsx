
import './App.css'
function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Sports name="mintu" tec="js"></Sports>
      <Sports name="sikder" tec="react"></Sports>
   
    </>
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
