import React, {Fragment, useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import Loading from '../../../shared/Loading'
import {isEmpty} from "../../../../utils/commonUtil";

const Markdown = (props) => {
    const {fetchMarkdown, markdown, markdownLoading, user, project, branch} = props;

    useEffect(() => {
        !isEmpty(branch) && fetchMarkdown(user, project, branch);
    }, [user, project, branch]);


    return (
        <Fragment>
            <h1 className={'is-size-2'}>
                Readme.md
            </h1>
            <div className={'content markdown'}>
                {!markdownLoading && branch ?
                    <ReactMarkdown source={markdown}/>
                    :
                    <Loading/>
                }

            </div>
        </Fragment>
    );
};

export default Markdown;