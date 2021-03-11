import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [toggle, SetToggle] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => SetToggle(!toggle)}>
          {toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
