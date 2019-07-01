import React from "react";
import PropTypes from "prop-types";
import ArticleList from './ArticleList/ArticleList';
import Header from './ArticleList/Header';
import Footer from './ArticleList/Footer';

const App = ({ articles }) => {
  return <div className="App">
    <Header />
    <ArticleList articles={articles} />
    <Footer />
  </div>;
};

export default App;
