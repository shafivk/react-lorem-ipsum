import React, { useState } from "react";
import data from "./data";
import Squestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div classname="container">
        <h3>Questions about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Squestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
