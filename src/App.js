import React from "react";
import { Router, Link } from "@reach/router";
import Login from "./views/login";
import DiscussionList from "./views/discussion-list";
import Discussion from "./views/discussion";
import NewDiscussion from "./views/new-discussion";
import NotFound from "./components/not-found";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Login path="/" />
        <DiscussionList path="/discussions" />
        <Discussion path="/discussions/:id" />
        <NewDiscussion path="/new" />
        <NotFound default />
      </Router>
    </>
  );
}

export default App;
