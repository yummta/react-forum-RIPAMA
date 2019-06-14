import React from "react";
import { Link } from "@reach/router";

function DiscussionList() {
  return (
    <section>
      {[1, 2, 3].map((el, index) => (
        <article key={index}>
          <hr />
          <Link to="/discussions/detashe">
            <h2>Super interesting title about things that I liked</h2>
          </Link>
          <span>Paul Portillo</span>
        </article>
      ))}
    </section>
  );
}

export default DiscussionList;
