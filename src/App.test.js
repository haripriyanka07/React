import React from 'react';
import App from './App';
import {render, cleanup} from '@testing-library/react';
import * as ContactReducer from "../src/Redux/Reducers/contactReducer";
import * as ImageReducer from "../src/Redux/Reducers/imageReducer";
import { MemoryRouter } from 'react-router';
import {createMemoryHistory} from 'history';
import { Router, Route } from "react-router";

afterEach(cleanup)

describe('test the image reducer and actions', () => {

    it('should return the intital state', () => {
        expect(ImageReducer.initialState).toEqual({ images: [] })
    })

    it('should add object into the images if new data is added', () => {
        expect(ImageReducer.imageReducer(ImageReducer.initialState, {type: 'ADD_IMAGE', data: {"name":"hari", "url":"https://qph.fs.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89", "info":"info", "date":"2021-01-02"}})).toEqual({images : [{name: "hari", url: "https://qph.fs.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89", info: "info", date: "2021-01-02"}]})
    })
    
    it('should return null when images dont have any object to delete', () => {
        expect(ImageReducer.imageReducer(ImageReducer.initialState, {type:'REMOVE_IMAGE', name:'unknown'})).toEqual(ImageReducer.initialState)
    })

    it('should return the updated objects after removal', () => {
        expect(ImageReducer.imageReducer(ImageReducer.initialState, {type: 'REMOVE_IMAGE', name:'hari'})).toEqual({images: []})
    })
})

describe('Test the contact reducer and actions', () => {

    it('should return the intial state', () => {
        expect(ContactReducer.initialState).toEqual({ contacts: [] })
    })

    it('should add oobjects into the contacts if new data is added', () => {
        expect(ContactReducer.contactReducer(ContactReducer.initialState, {type: 'ADD_CONTACT', data: {"name": 'Hari', 'email':'sunkaripiryankaa20@gmail.com', 'phoneNumber': '8989892345', 'address': 'flatno362 address', 'comments': 'please notify me'}})).toEqual({contacts: [{name: 'Hari', email: 'sunkaripiryankaa20@gmail.com', phoneNumber: '8989892345', address: 'flatno362 address', comments: 'please notify me'}]})
    })
})

describe('Tests for App Router', () => {

    test("home page", () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(history.location.pathname).toBe("/");
    })

    test("Clicking about", () => {
        let testHistory, testLocation;
        render(
            <MemoryRouter initialEntries={["/About"]}>
                <App />
                <Route 
                    path='*'
                    render={({history, location}) => {
                        testHistory = history;
                        testLocation = location;
                        return null;
                    }}
                />
            </MemoryRouter>
        );
        expect(testLocation.pathname).toBe('/About');
    })
})