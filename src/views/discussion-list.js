import React from "react";

function DiscussionList() {
  return (
    <section>
      {[1, 2, 3].map((el, index) => (
        <article key={index}>
          <hr />
          <a href="#">
            <h2>Super interesting title about things that I liked</h2>
          </a>
          <span>Paul Portillo</span>
        </article>
      ))}
    </section>
  );
}

export default DiscussionList;
