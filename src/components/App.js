import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';


const aboutData = {
  image: "",
  aboutText: "Welcome to our blog! Learn and explore with us.",
};

const articlesData = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 5,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 15,
  },
  {
    id: 3,
    title: "Function vs Class Components",
    preview: "React, meet OOJS.",
    minutes: 47,
  },
]

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <Header blogName="My React Blog" />
      <About image={aboutData.image} aboutText={aboutData.aboutText} />
      <ArticleList articles={articlesData} />
    </div>
  );
}

export default App;
