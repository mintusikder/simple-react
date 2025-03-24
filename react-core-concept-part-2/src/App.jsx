import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Totous from "./Totous";

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const friends = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     return res.json()
// }

const posts = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

const todo = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
return res.json()
}

function App() {
  // const friendsPromise = friends()
  const postPromise = posts()
  const todoPromise = todo()
  function handelClick() {
    alert("click");
  }
  const handelClick2 = () => {
    alert("click2");
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are comming</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
          {
        <Suspense fallback={<h4>Todo is Loading.....</h4>}>
            <Totous todoPromise={todoPromise}></Totous>
        </Suspense>
      }
      {
        <Suspense fallback={<h4>Post Loading ....</h4>}>
          <Posts postPromise={postPromise}></Posts>
        </Suspense>
      }
  
      <Batsman></Batsman>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>Click2</button>
      <button onClick={() => alert("click4")}>Click4</button>
    </>
  );
}

export default App;
