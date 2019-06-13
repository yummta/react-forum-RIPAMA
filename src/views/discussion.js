import React from "react";

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
        <section>
          <div>
            <p>Dexter Gutierres</p>
            <p>Thu Jun 13 2019 16:34:23</p>
            <p>Nice post</p>
          </div>

          <section>
            <div>
              <p>Dexter Gutierres</p>
              <p>Thu Jun 13 2019 16:34:23</p>
              <p>Hi I'm spamming</p>
            </div>
          </section>
        </section>
        <section>
          <div>
            <p>Dexter Gutierres</p>
            <p>Thu Jun 13 2019 16:34:23</p>
            <p>I will think about this all day</p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Discussion;
