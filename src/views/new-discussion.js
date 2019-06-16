import React from "react";
import { Redirect } from "@reach/router";

function NewDiscussion({ discussions, setDiscussions, author }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [complete, setComplete] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("asdas");
    const NewDiscussion = {
      title,
      body,
      author: author,
      date: Date.now(),
      id: discussions.length
    };
    const updatedDiscussions = discussions.concat(NewDiscussion);
    localStorage.setItem("discussions", JSON.stringify(updatedDiscussions));
    setDiscussions(updatedDiscussions);
    setComplete(true);
  }

  function handleChange(event) {
    let value = event.target.value;
    event.target.name === "title" ? setTitle(value) : setBody(value);
  }

  if (!complete) {
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
  return <Redirect to={`/discussions/${discussions.length - 1}`} noThrow />;
}
export default NewDiscussion;
