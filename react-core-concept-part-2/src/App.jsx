import './App.css'
import Batsman from './Batsman'
function App() {
  function handelClick(){
    alert("click")
  }
  const handelClick2 = () =>{
        alert("click2")
  }
 return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>Click2</button>
      <button onClick={()=> alert("click4")}>Click4</button>
    </>
  )
}

export default App
