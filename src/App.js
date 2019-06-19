import React from "react";
import PropTypes from "prop-types";
import ArticleList from './ArticleList/ArticleList';

const App = ({ articles }) => {
  return <div className="App">
    <ArticleList articles={articles} />
  </div>;
};

export default App;
