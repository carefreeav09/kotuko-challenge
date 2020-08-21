import React, {Fragment, useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
    let [string, setString] = useState();

    useEffect(() => {
        const fetchMarkdown = () => {
            fetch('https://raw.githubusercontent.com/carefreeav09/kotuko-challenge/master/README.md')
                .then(response => response.text())
                .then(html => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, 'text/html');
                    let bodyText = doc.querySelector('body');
                    setString(String(bodyText.innerText));
                })
                .catch(err => {
                    console.warn('something went wrong', err);
                });
        }

        fetchMarkdown();
    }, [])


    return (
        <Fragment>
            <h1 className={'is-size-2'}>
                Readme.md
            </h1>
            <div className={'content markdown'}>
                <ReactMarkdown source={string} />
            </div>
        </Fragment>
    );
};

export default Markdown;