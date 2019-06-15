import React from "react";
import { Router, Link } from "@reach/router";
import Login from "./views/login";
import DiscussionList from "./views/discussion-list";
import Discussion from "./views/discussion";
import NewDiscussion from "./views/new-discussion";
import NotFound from "./components/not-found";
import Header from "./components/header";

const initialDiscussions = [
  {
    id: 0,
    author: "Paul",
    title: "Title 1",
    date: "2019-06-02T00:45:43.963Z",
    body: "ueuuueueueu ueueueueueu 11",
    comments: [0]
  },
  {
    id: 1,
    author: "Tomas",
    title: "Title 2",
    date: "2019-06-02T00:45:43.963Z",
    body: "ueuuueueueu ueueueueueu 22",
    comments: [1]
  },
  {
    id: 2,
    author: "Portillo",
    title: "Title 3",
    date: "2019-06-02T00:45:43.963Z",
    body: "ueuuueueueu ueueueueueu 33",
    comments: [2]
  }
];

const initialComments = JSON.parse(
  localStorage.getItem("comments") ||
    JSON.stringify([
      {
        id: 0,
        body: "hola",
        author: "Paul",
        date: "2019-06-02T00:45:43.963Z",
        comments: [3, 4]
      },
      {
        id: 1,
        body: "hola, que tal?",
        author: "Paul",
        date: "2019-06-01T00:45:43.963Z",
        comments: [5]
      },
      {
        id: 2,
        body: "hola, que tal?",
        author: "Mayra",
        date: "2019-05-03T00:45:43.963Z",
        comments: [5]
      },
      {
        id: 3,
        body: "hola",
        author: "Paul",
        date: "2019-06-02T00:45:43.963Z",
        comments: [5]
      },
      {
        id: 4,
        body: "hola, que tal?",
        author: "Ricardo",
        date: "2019-06-01T00:45:43.963Z",
        comments: [5]
      },
      {
        id: 5,
        body: "hola, que tal?",
        author: "Paul",
        date: "2019-05-03T00:45:43.963Z",
        comments: [5]
      }
    ])
);

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || { username: "", email: "" }
  );
  const [discussions, setDiscussions] = React.useState(
    JSON.parse(localStorage.getItem("discussions")) || []
  );

  const [comments, setComments] = React.useState(initialComments);

  function handleUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  React.useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <Header />
      <Router>
        <Login onUser={handleUser} path="/" />
        <DiscussionList path="/discussions" discussions={discussions} />
        <Discussion path="/discussions/:id" />
        <NewDiscussion
          path="/new"
          discussions={discussions}
          setDiscussions={setDiscussions}
          author={user.username}
        />
        <NotFound default />
      </Router>
    </>
  );
}

export default App;
