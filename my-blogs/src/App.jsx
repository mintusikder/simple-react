import Blogs from "./components/Bolgs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);
  console.log(readTime);
  const handelBookMark = (blog) => {
    const isAlreadyBookmarked = bookMark.find((mark) => mark.id === blog.id);
    if (isAlreadyBookmarked) {
      alert("You have already added this!");
      return;
    }
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark);
    alert("Added to bookmarks!");
  };
  const handelMarkTime = (time) => {
    const readingTime = readTime + time;
    setReadTime(readingTime);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="flex text-center mt-12">
        <div className=" w-[70%]">
          <Blogs
            handelMarkTime={handelMarkTime}
            handelBookMark={handelBookMark}
          ></Blogs>
        </div>
        <div className=" w-[30%]">
          <h2>Reading Time: {readTime}</h2>
          <h2>BookMark Time: {bookMark.length}</h2>
          {bookMark.map((mark) => (
            <p key={mark.id}>{mark.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
