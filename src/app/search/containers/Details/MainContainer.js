import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Main from "../../components/Details/Main";

import * as action from "../../duck/actions";
import * as service from "../../duck/services";
import * as usersService from "../../../shared/duck/users/services";
import * as usersActions from '../../../shared/duck/users/actions';
import * as markdownActions from '../../../shared/duck/markdown/actions';
import * as markdownService from '../../../shared/duck/markdown/services'

const HomeContainer = props => {

    /**
     * Fetch repository list
     * @param {string} query
     *
     */
    const fetchRepositoryDetails = (query) => {
        props.actions.fetchRepositoryDetails(query);
    }

    /**
     * Fetch users info
     * * @param {string} query
     *
     */
    const fetchUsersInfo = (query) => {
        props.actions.fetchUsersInfo(query);
    }

    /**
     * Fetch markdown list
     * @param {string} user
     * @param {string} project
     * @param {string} branch
     *
     */
    const fetchMarkdown = (user,project,branch) => {
        props.actions.fetchMarkdown(user,project,branch);
    }

    return (
        <Main
            fetchRepositoryDetails={fetchRepositoryDetails}
            fetchUsersInfo={fetchUsersInfo}
            fetchMarkdown={fetchMarkdown}
            {...props}
        />
    );
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    repositories: state.repositories.singlePayload,
    repositoriesError: state.repositories.errors,
    repositoriesLoading: state.repositories.loading,
    users : state.users.payload,
    usersLoading: state.users.loading,
    usersError: state.users.errors,
    markdown : state.markdown.payload,
    markdownLoading: state.markdown.loading,
    markdownError: state.markdown.errors
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({},
                action,
                service,
                usersService,
                usersActions,
                markdownService,
                markdownActions
            ),
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
