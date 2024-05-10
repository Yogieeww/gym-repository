import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
// import Button from "react-bootstrap/Button";


const FAQ = (props) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article
      className="faq "
      onClick={() => setIsAnswerShowing((prev) => !prev)}
    >
      <div>
        <h3>{props.question}</h3>
        <button className="faq__icon">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {isAnswerShowing && <p>{props.answer} </p>}
      </div>
    </article>
  );
};

export default FAQ