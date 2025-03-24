import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const friends = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
}

function App() {
  const friendsPromise = friends()
  function handelClick() {
    alert("click");
  }
  const handelClick2 = () => {
    alert("click2");
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are comming</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>Click2</button>
      <button onClick={() => alert("click4")}>Click4</button>
    </>
  );
}

export default App;
