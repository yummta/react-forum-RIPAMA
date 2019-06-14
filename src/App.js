import React from "react";
import { Router, Link } from "@reach/router";
import Login from "./views/login";
import DiscussionList from "./views/discussion-list";
import Discussion from "./views/discussion";
import NewDiscussion from "./views/new-discussion";
import NotFound from "./components/not-found";
import Header from "./components/header";

function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  function handleUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  return (
    <>
      <Header />
      <Router>
        <Login onUser={handleUser} path="/" />
        <DiscussionList path="/discussions" />
        <Discussion path="/discussions/:id" />
        <NewDiscussion path="/new" />
        <NotFound default />
      </Router>
    </>
  );
}

export default App;
