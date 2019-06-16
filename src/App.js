import React from "react";
import { Router } from "@reach/router";

import { Provider as UserProvider } from "./contexts/user";

import Login from "./views/login";
import DiscussionList from "./views/discussion-list";
import Discussion from "./views/discussion";
import NewDiscussion from "./views/new-discussion";
import NotFound from "./components/not-found";
import Header from "./components/header";

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || { username: "", email: "" }
  );
  const [discussions, setDiscussions] = React.useState(
    JSON.parse(localStorage.getItem("discussions")) || {}
  );

  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  function handleUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  React.useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(comments));
  }, [comments]);

  return (
    <UserProvider value={user}>
      <Header setUser={setUser} />
      <Router>
        <Login onUser={handleUser} path="/" />
        <DiscussionList path="/discussions" discussions={discussions} />
        <Discussion path="/discussions/:id" discussions={discussions} />
        <NewDiscussion
          path="/new"
          discussions={discussions}
          setDiscussions={setDiscussions}
          author={user.username}
        />
        <NotFound default />
      </Router>
    </UserProvider>
  );
}

export default App;
