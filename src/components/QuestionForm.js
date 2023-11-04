
import React, { useState } from "react";

function QuestionForm({ setQuestions }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newQuestion) => {
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
        console.log(newQuestion);
      })
      .catch((error) => console.error("Error creating question: ", error));
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/* Form inputs here */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;


