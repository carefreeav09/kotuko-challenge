import {
    markdownFetchRequest,
    markdownFetchRequestSuccess,
    markdownFetchRequestFailure
} from "./actions";

import { MARKDOWN_URL} from "../../../../constants/appConfig";

export const fetchMarkdown = (user, project, branch) => {
    return (dispatch) => {
        dispatch(markdownFetchRequest());
        fetch(`${MARKDOWN_URL}${user}/${project}/${branch}/README.md`)
            .then(response => response.text())
            .then(html => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, 'text/html');
                let bodyText = doc.querySelector('body');
                dispatch(markdownFetchRequestSuccess(bodyText.innerText));
            })
            .catch(err => {
                markdownFetchRequestFailure(err.data);
            });
    };
};
