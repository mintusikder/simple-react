
import './App.css'
function App() {
  return (
    <>
      <h1>React Core Concept</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}
function Person () {
  const age = 22;
  return (
    <p>I am Mintu {age}</p>
  )
}


function Sports () {
  return(
    <div>
      <h2>Football</h2>
      <p>I Love play football</p>
    </div>
  )
}
export default App
