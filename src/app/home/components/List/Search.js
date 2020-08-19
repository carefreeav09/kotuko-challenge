import React, {useState} from 'react';

const Search = (props) => {
    const {setSearchInput, setResultsPerPageOption, setSortOption, handleFetchRepositories, pageNumber} = props

    return (
        <React.Fragment>
                <span className="title">
                    Kotuko Challenge
                </span>
            <br/>
            <br/>

            <div className="columns is-desktop">
                <div className="column is-two-fifths">
                        <span className="is-size-6">
                            Repository Name
                        </span>
                    <div className="field">
                        <div className="control has-icons-left">
                            <input
                                onChange={event => setSearchInput(event.target.value)}
                                className="input is-large"
                                type="text"
                                placeholder="search by repository"
                            />
                            <span className="icon is-small is-left">
                                  <i className="fab fa-github"/>
                                </span>
                        </div>
                    </div>
                </div>

                <div className="column is-one-quarter">
                        <span className="is-size-6">
                           Sort By
                        </span>
                    <div className="field">
                        <div className="control">
                            <div className="select is-large">
                                <select onChange={(e) => setSortOption(e.target.value)}
                                        defaultValue={'best'}
                                >
                                    <option value={'best'}>Best Match</option>
                                    <option value={'stars'}>Stars</option>
                                    <option value={'forks'}>Forks</option>
                                    <option value={'help-wanted-issues'}>Help Wanted Issues</option>
                                    <option value={'updated'}>Recently Updated</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                        <span className="is-size-6">
                           Results per page
                        </span>
                    <div className="field">
                        <div className="control">
                            <div className="select is-large">
                                <select onChange={(e) => setResultsPerPageOption(e.target.value)}
                                        defaultValue={'10'}
                                >
                                    <option value={'10'}>10</option>
                                    <option value={'25'}>25</option>
                                    <option value={'50'}>50</option>
                                    <option value={'100'}>100</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <button className="button is-large is-dark btn__mt-5" onClick={e => handleFetchRepositories(e, pageNumber)}>
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;