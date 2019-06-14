import React from "react";
import { Link } from "@reach/router";

function DiscussionList({ discussions }) {
  if (discussions.length) {
    return (
      <section>
        {discussions.map(discussion => (
          <article key={discussion.id}>
            <hr />
            <Link to={`/discussions/${discussion.id}`}>
              <h2>{discussion.title}</h2>
            </Link>
            <span>{discussion.author}</span>
          </article>
        ))}
      </section>
    );
  } else {
    return <p>Sorry. We do not messages!</p>;
  }
}

export default DiscussionList;
