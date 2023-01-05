import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={Note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={Note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
