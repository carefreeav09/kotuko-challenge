import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from '../index';
import {SearchContext} from "../../../../shared/Contexts/SearchContext";
import {details} from '../../../../../../__mock/search';

Enzyme.configure({adapter: new Adapter()});

describe('Component --- Home Component', () => {
    let wrapper;

    let props = {
        fetchRepositoryDetails: jest.fn(),
        fetchUsersInfo: jest.fn(),
        repositories: details,
        fetchMarkdown: jest.fn()
    };

    const searchContextValues = {
        searchInput : null,
        setSearchInput: jest.fn(),
        sortOption: 'best',
        setSortOption: jest.fn(),
        resultsPerPageOption: 10,
        setResultsPerPageOption: jest.fn(),
        pageNumber: 1,
        setPageNumber: jest.fn(),
    }

    beforeEach(() => {
        wrapper = mount(
            <Router>
                <SearchContext.Provider value={{...searchContextValues}} {...props}>
                    <Home {...props} />
                </SearchContext.Provider>
            </Router>
        );
    });

    it('should render correctly', () => {
        expect(wrapper).toBeDefined();
    });

    it('should call fetchRepositoryDetails on mount', ()=> {
       expect(props.fetchRepositoryDetails).toHaveBeenCalled();
    });

    it('should call fetchUsersInfo on mount', ()=> {
        expect(props.fetchUsersInfo).toHaveBeenCalled();
    });

    it('should call fetchMarkdown on mount', ()=> {
        expect(props.fetchMarkdown).toHaveBeenCalled();
    });

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('should have a image tag', () => {
        expect(wrapper.find('img')).toBeTruthy();
    });

    it('should have a markdown content', ()=> {
       expect(wrapper.find('.markdown')).toBeTruthy();
    });
});