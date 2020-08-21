import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Main from "../../components/Details";

import * as action from "../../duck/actions";
import * as service from "../../duck/services";
import * as usersService from "../../../shared/duck/users/services";
import * as usersActions from '../../../shared/duck/users/actions';

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
     * Fetch repository list
     * @param {string} query
     *
     */
    const fetchUsersInfo = (query) => {
        props.actions.fetchUsersInfo(query);
    }

    return (
        <Main
            fetchRepositoryDetails={fetchRepositoryDetails}
            fetchUsersInfo={fetchUsersInfo}
            {...props}
        />
    );
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    repositories: state.repositories.payload,
    repositoriesError: state.repositories.errors,
    repositoriesLoading: state.repositories.loading,
    users : state.users.payload,
    usersLoading: state.users.loading,
    usersError: state.users.errors
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
                usersActions
            ),
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
