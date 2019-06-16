import React from "react";
import { Redirect } from "@reach/router";

function NewDiscussion({ discussions, setDiscussions, author }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [newId, setNewId] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const dateNow = Date.now();
    const newDiscussion = {
      title,
      body,
      author: author,
      date: dateNow,
      id: dateNow
    };
    const updatedDiscussions = { ...discussions, [dateNow]: newDiscussion };
    console.log(updatedDiscussions);
    localStorage.setItem("discussions", JSON.stringify(updatedDiscussions));
    setDiscussions(updatedDiscussions);
    setNewId(dateNow);
  }

  function handleChange(event) {
    let value = event.target.value;
    event.target.name === "title" ? setTitle(value) : setBody(value);
  }

  if (!newId) {
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <h1>New Discussion</h1>
          <label>
            Title
            <br />
            <input
              type="text"
              onChange={handleChange}
              name="title"
              autoComplete="off"
            />
          </label>
          <label>
            Body
            <br />
            <textarea onChange={handleChange} name="body" />
          </label>
          <button type="submit" name="submit" value="Submit">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
  return <Redirect to={`/discussions/${newId}`} noThrow />;
}
export default NewDiscussion;
