/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Comment from "../components/comment";

function Discussion() {
  return (
    <div>
      <main>
        <h1>title</h1>
        <p>Default title</p>
        <h2>author</h2>
        <p>Dexter Gutierres</p>
        <h2>creation date</h2>
        <p>Thu Jun 13 2019 16:34:23</p>
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
