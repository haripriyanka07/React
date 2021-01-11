import React from 'react';
import AppRouter from './AppRouter';
import * as Reducer from './Components/atoms/reducer';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('test the reducer and actions', () => {

    it('should return the intital state', () => {
        expect(Reducer.initialState).toEqual({ images: [] })
    })

    it('should add object into the images if new data is added', () => {
        expect(Reducer.reducer(Reducer.initialState, {type: 'add', data: {"name":"hari", "url":"https://qph.fs.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89", "info":"info", "date":"2021-01-02"}})).toEqual({images : [{name: "hari", url: "https://qph.fs.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89", info: "info", date: "2021-01-02"}]})
    })
    
    it('should return null when images dont have any object to delete', () => {
        expect(Reducer.reducer(Reducer.initialState, {type:'remove', name:'unknown'})).toEqual(Reducer.initialState)
    })

    it('should return the updated objects after removal', () => {
        expect(Reducer.reducer(Reducer.initialState, {type: 'remove', name:'hari'})).toEqual({images: []})
    })
})