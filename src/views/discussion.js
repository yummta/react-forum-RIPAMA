/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Comment from "../components/comment";

function Discussion({ id, discussions }) {
  const discussion = discussions[id];

  return (
    <div>
      <main>
        <h1>{discussion.title}</h1>
        <div>
          <span>By {discussion.author}</span>
          <br />
          <time>Publish {discussion.date}</time>
        </div>
        <p>{discussion.body}</p>
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea id="comment" placeholder="What are your thoughts?" />
      </main>
      <article>
        <Comment
          name={"Dexter Gutierres"}
          date={"Thu Jun 13 2019 16:34:23"}
          body={"Nice post"}
        >
          <Comment
            name={"Dexter Gutierres"}
            date={"Thu Jun 13 2019 16:34:23"}
            body={"Nice post"}
          >
            <Comment
              name={"Dexter Gutierres"}
              date={"Thu Jun 13 2019 16:34:23"}
              body={"Nice post"}
            />
          </Comment>
        </Comment>
        <Comment
          name={"Dexter Gutierres"}
          date={"Thu Jun 13 2019 16:34:23"}
          body={"Nice post"}
        >
          <Comment
            name={"Dexter Gutierres"}
            date={"Thu Jun 13 2019 16:34:23"}
            body={"Nice post"}
          />
        </Comment>
        <Comment
          name={"Dexter Gutierres"}
          date={"Thu Jun 13 2019 16:34:23"}
          body={"Nice post"}
        >
          <Comment
            name={"Dexter Gutierres"}
            date={"Thu Jun 13 2019 16:34:23"}
            body={"Nice post"}
          />
        </Comment>
      </article>
    </div>
  );
}

export default Discussion;
