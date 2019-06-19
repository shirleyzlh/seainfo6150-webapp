import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage'

const ArticleListItem = ({ title, shortText, pubDate, pubYear, author, url }) => (
    <div className={styles.articleItem}>
        <div className={styles.articleImage}>
            <ArticleImage url={url} title={title}/>
        </div>
        <div className={styles.articleContent}>
            <header>
                <h1 className={styles.title}>{title}</h1>
                <p>{shortText}</p>
                <br />
            </header>
            <main className={styles.main}>
                <address><i>By: {author}</i></address>
                <time dateTime="2018-11-21 22:57:55" className={styles.dateTime}>{pubDate}</time>
            </main>
        </div>

    </div>
);

ArticleListItem.propTypes = {
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired,
    "url": PropTypes.string.isRequired
};

export default ArticleListItem;
