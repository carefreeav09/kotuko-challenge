import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Main from "../../components/List";

import * as action from "../../duck/actions";
import * as service from "../../duck/services";

const HomeContainer = props => {

    /**
     * Fetch repository list
     * @param {string} query
     *
     */
    const fetchRepositories = (query) => {
        props.actions.fetchRepositories(query);
    }

    return (
            <Main
                fetchRepositories={fetchRepositories}
                {...props}
            />
    );
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    repositories: state?.repositories?.payload?.items,
    repositoriesError: state.repositories.errors,
    repositoriesLoading: state.repositories.loading,
    repositoriesPagination: state.repositories.pagination,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({},
                action,
                service
            ),
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
