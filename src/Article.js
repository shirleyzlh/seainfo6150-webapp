import React from 'react';
import PropTypes from 'prop-types';

export const Render = (props) => {
    return (
        <div className="App">
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Week 4 assignment</title>
                </head>
                <body>
                    <header>
                        <h1>{props.article.title}</h1>
                        <address><i>By: {props.article.author}</i></address>
                        <time dateTime="2018-11-21">{props.article.pubDate}</time>
                    </header>
                    <main>
                        <p>{props.article.shortText}</p>
                    </main>
                </body>
            </html>
        </div>
    );
}