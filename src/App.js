import React from "react";
import reviews from "./data";
import Testimonials from "./Components/Testimonials";
const App = () => {
  return (
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 text-right mr-8 mb-1">
        Our Testingmonials
      </h1>
      <div className="bg-violet-400 h-[4px] w-1/5 m-auto mt-3 mr-24 " ></div>
      <Testimonials reviews = {reviews}/>

    </div>

  </div>
  )
}

export default App;
