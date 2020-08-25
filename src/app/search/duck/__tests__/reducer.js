import React from 'react';
import repositoriesReducer from '../reducer';
import {
    REPOSITORIES_FETCH_REQUEST,
    REPOSITORIES_FETCH_REQUEST_SUCCESS,
    REPOSITORIES_FETCH_REQUEST_FAILURE,
    REPOSITORIES_CLEAN_REQUEST,
    SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS
} from '../types';

import {result, resultErrors, details} from '../../../../../__mock/search';

const payload = result.items;
const errors = resultErrors;
const singlePayload = details;

const INITIAL_STATE = {
    payload: null,
    loading: false,
    errors: {},
    pagination: {},
    singlePayload: null
};

describe('Reducer --- Search Reducer', () => {
   it('should return the Search Initial State', ()=> {
          expect(repositoriesReducer(undefined, {})).toEqual(INITIAL_STATE);
   });

   it('should handle repositoryFetchRequest', () => {
       const state = repositoriesReducer(INITIAL_STATE, {
           type: 'REPOSITORIES_FETCH_REQUEST',
       });

       expect(state).toEqual({
           ...INITIAL_STATE,
            loading: true
       })
   });

   it('should handle repositoryFetchRequestSuccess', () => {
      const state =  repositoriesReducer(INITIAL_STATE, {
          type: "REPOSITORIES_FETCH_REQUEST_SUCCESS",
          data : payload
      });

      expect(state).toEqual({
          payload: payload,
          loading: false,
          singlePayload: null,
          errors : {}
      });
   });

   it('should handle repositoryFetchRequestFailure', () => {
       const state = repositoriesReducer(INITIAL_STATE, {
           type: "REPOSITORIES_FETCH_REQUEST_FAILURE",
           error : errors
       });

       expect(state).toEqual({
           ...INITIAL_STATE,
           loading: false,
           errors: errors
       });
   });

   it('should handle single repository fetch request failure', ()=>{
      const state = repositoriesReducer(INITIAL_STATE, {
          type: SINGLE_REPOSITORIES_FETCH_REQUEST_SUCCESS,
          data: singlePayload
      });

      expect(state).toEqual({
          ...INITIAL_STATE,
          singlePayload: singlePayload,
          loading: false
      })
   });

   it('should handle repository clean request', ()=> {
      const state = repositoriesReducer(INITIAL_STATE, {
          type: REPOSITORIES_CLEAN_REQUEST,
      });

      expect(state).toEqual({
          ...INITIAL_STATE
      })
   });
});