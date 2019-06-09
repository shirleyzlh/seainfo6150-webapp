import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles }) => (
    <ul className={styles.articles}>
        {
            // this iterates through the articles JSON and
            // calls your ArticleListItem component for each article object
            Object.values(articles).map(article => {
                return <ArticleListItem
                    title={article.title}
                    shortText={article.shortText}
                    pubDate={article.pubDate}
                    pubYear={article.pubYear}
                    author={article.author} />
            })
        }
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;