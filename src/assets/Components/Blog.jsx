import React, { useState } from "react";
import { questions } from "./quiz-data";

const Blog = () => {
  const [index, setIndex] = useState(0);
  const [opt, setOpt] = useState(0);
  const [res, setRes] = useState(0);
  const [show, setShow] = useState(false);
  const handlePrev = () => {
    setIndex(index - 1);
    if (index - 1 < 0) {
      setIndex(questions.length - 1);
    }
  };
  const handleNext = () => {
    setIndex(index + 1);
    if (index + 1 >= questions.length) {
      setIndex(0);
    }
  };
  const optOne = () => {
    if (questions[index].options[0] === questions[index].correctAnswer) {
      setRes(res + 1);
    }
  };
  const optTwo = () => {
    if (questions[index].options[1] === questions[index].correctAnswer) {
      setRes(res + 1);
    }
  };
  const optThree = () => {
    if (questions[index].options[2] === questions[index].correctAnswer) {
      setRes(res + 1);
    }
  };
  const optFour = () => {
    if (questions[index].options[3] === questions[index].correctAnswer) {
      setRes(res + 1);
    }
  };
  const showRes = () => {
    setShow(true);
  };

  return (
    <div className="container-fluid  bg-info ">
      <h2>Your Question : {questions[index].question}</h2>
      <button
        onClick={handleNext}
        style={{
          backgroundColor: "green",
          width: "85px",
          height: "85px",
          borderRadius: "50px",
          padding: "15px",
        }}
      >
        Next
      </button>
      <button
        onClick={handlePrev}
        style={{
          backgroundColor: "green",
          width: "85px",
          height: "85px",
          borderRadius: "50px",
          padding: "15px",
        }}
      >
        Prev
      </button>

      <button
        className="mx-1"
        onClick={optOne}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "95px",
          height: "65px",
        }}
      >
        {questions[index].options[0]}
      </button>
      <button
        className="mx-1"
        onClick={optTwo}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "95px",
          height: "65px",
        }}
      >
        {questions[index].options[1]}
      </button>
      <button
        className="mx-1"
        onClick={optThree}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "95px",
          height: "65px",
        }}
      >
        {questions[index].options[2]}
      </button>
      <button
        className="mx-1"
        onClick={optFour}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "95px",
          height: "65px",
        }}
      >
        {questions[index].options[3]}
      </button>
      <button className="mx-1 bg-light" onClick={showRes}>
        Show the Result <div style={{ fontSize: "20px" }}>&#128514;</div>
      </button>
      <h4>
        {show ? (
          <div>Your score: {res}</div>
        ) : (
          <div>
            No score yet dude!{" "}
            <span role="img" aria-label="face with rolling eyes emoji">
              &#128513;
            </span>
          </div>
        )}
      </h4>
    </div>
  );
};

export default Blog;
