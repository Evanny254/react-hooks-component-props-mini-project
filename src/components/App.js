import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Article from "./Article";

function App() {
  return (
    <div className="App">
     <h1>Thoughts of Dean Socrates.</h1>
     <About image={blogData.image} />
      <Header img={blogData.image} about={blogData.about} />
      <Article />
      <ArticleList  />
    </div>
  );
}

export default App;

