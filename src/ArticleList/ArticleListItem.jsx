import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';

const ArticleListItem = ({ title, shortText, pubDate, pubYear, author }) => (
    <div className={styles.articleItem}>
        <header>
            <h1 className={styles.title}>{title}</h1>
            <p>{shortText}</p>
        </header>
        <main className={styles.main}>
            <address><i>By: {author}</i></address>
            <time dateTime="2018-11-21 22:57:55" className={styles.dateTime}>{pubDate}</time>
        </main>
    </div>
);

ArticleListItem.propTypes = {
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
};

export default ArticleListItem;