import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from './index';
import {SearchContext} from "../../../shared/Contexts/SearchContext";
import {result} from '../../../../../__mock/search';

Enzyme.configure({adapter: new Adapter()});

describe('Component --- Home Component', () => {
    let wrapper;
    let props = {
        fetchRepositories: jest.fn(),
        repositories: result.items,
        repositoriesPagination : 5,
        pageNumber: 1,
        resultsPerPageOption: 10,
        setSearchInput: jest.fn(),
        setSortOption: jest.fn(),
        setResultsPerPageOption: jest.fn(),
        handleFetchRepositories: jest.fn(),
        paginate : jest.fn(),
    }

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

    it('should have a Search child component', () => {
        expect(wrapper.find('Search')).toBeDefined();
    });

    it('should have a Result child component', () => {
        expect(wrapper.find('Result')).toBeDefined();
    });

    it('should have a Pagination sub child component', () => {
        expect(wrapper.find('Pagination')).toBeDefined();
    });

    it('should render an input field', () => {
        expect(wrapper.find('input')).toBeTruthy();
    });

    it('should render select fields ', () => {
        expect(wrapper.find('select')).toBeTruthy();
    });

    it('should render a button', () => {
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('should submit the form on button click ', () => {
        wrapper.find('input').at(0).simulate('change', {
            target: {
                value: 'React'
            }
        });

        wrapper.find('select').at(0).simulate('change', {
            target: {
                value: 'best'
            }
        });

        wrapper.find('select').at(1).simulate('change', {
            target: {
                value: 10
            }
        });

        wrapper.find('button').at(0).simulate('click');
        expect(props.fetchRepositories).toHaveBeenCalled();
    });

    it('should have a list of results with links to the detail page', () => {
        expect(wrapper.find('.box')).toBeTruthy();
        expect(wrapper.find('Link')).toBeTruthy();
        expect(wrapper.find('Link').at(1).prop('to')).toEqual({"pathname": "/carefreeav09/kotuko-challenge"})
    });

    it('should render pagination buttons at the end', () => {
        expect(wrapper.find('.pagination-list')).toBeTruthy();
        expect(wrapper.find('.pagination-link')).toBeTruthy();
        expect(wrapper.find('.is-current')).toBeTruthy();
    });
});