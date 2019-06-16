
/** @jsx jsx */
import { jsx } from "@emotion/core";
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
      <div
        css={{
          padding: "20px",
          display: "flex"
        }}
      >
        <form
          onSubmit={handleSubmit}
          css={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
            padding: "1em",
            background: "rgba(22, 22, 22, 0.57)",
            borderRadius: "0.5em",
            "& *": { fontFamily: "Arial", fontSize: "larger" }
          }}
        >
          <h1>
            <strong>New Discussion</strong>
          </h1>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={handleChange}
            name="title"
            autoComplete="off"
          />

          <label htmlFor="body">Body </label>
          <textarea id="body" onChange={handleChange} name="body" />

          <button
            type="submit"
            name="submit"
            css={{
              backgroundColor: "black",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "larger",
              margin: "4px 2px",
              cursor: "pointer",
              marginTop: "0.5em",
              ":hover": { backgroundColor: "white", color: "black" }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  return <Redirect to={`/discussions/${newId}`} noThrow />;
}
export default NewDiscussion;
