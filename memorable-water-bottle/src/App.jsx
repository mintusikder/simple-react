import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("../public/bottle.json")
.then(res => res.json())


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading ....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
