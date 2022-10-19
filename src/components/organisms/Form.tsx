import React, { useState } from "react";
import { Input } from "../atom/Input";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, category, date, text } = event.target.elements;
    console.log({
      title: title.value,
      category: category.value,
      date: date.value,
      text: text.value
    });
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <form action="" method="post" onSubmit={handleSubmit}>
        <Input
          id="title"
          type="text"
          label="title"
          name="title"
          value={title}
          onChange={setTitle}
        //   minlength="3"
        //   maxlength="25"
          required
        />
        <Input
          id="category"
          type="text"
          label="category"
          name="category"
          value={category}
          onChange={setCategory}
        //   minlength="3"
        //   maxlength="25"
          required
        />
        <Input
          id="date"
          type="text"
          label="date"
          name="date"
          value={date}
          onChange={setDate}
        //   minlength="10"
        //   maxlength="10"
          required
        />
        <Input
          id="text"
          type="text"
          label="text"
          name="text"
          value={text}
          onChange={setText}
        //   minlength="5"
        //   maxlength="250"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
