import Blogs from "./components/Bolgs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const handelBookMark = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="flex text-center mt-12">
        <div className=" w-[70%]">
          <Blogs handelBookMark={handelBookMark}></Blogs>
        </div>
        <div className=" w-[30%]">
          <h2>Reading Time: </h2>
          <h2>BookMark Time: {bookMark.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
