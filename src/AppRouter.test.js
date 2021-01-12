import React from 'react';
import AppRouter from './AppRouter';
// import * as Reducer from './Components/atoms/reducer';
import {render, fireEvent, cleanup, act, screen} from '@testing-library/react';
import * as ContactReducer from "../src/Redux/Contact/ContactReducer";
import * as ImageReducer from "../src/Redux/Image/imageReducer";
import { mount, configure } from 'enzyme';
import errorPage from "../src/Components/Pages/Error";
import {Home} from "../src/Components/Pages/Home";
import {About} from "../src/Components/Pages/About";
import Contact from "../src/Components/Pages/Contact";
import Gallery from "../src/Components/Pages/Gallery";
import Add from "../src/Components/Pages/Add";
import Remove from "../src/Components/Pages/Remove";
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import {createMemoryHistory} from 'history';
import { Router, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

// jest.mock('../src/Components/Pages/Error');
// jest.mock('../src/Components/Pages/Home');
// jest.mock('../src/Components/Pages/Contact');
// jest.mock('../src/Components/Pages/About');
// jest.mock('../src/Components/Pages/Gallery');
// jest.mock('../src/Components/Pages/Add');
// jest.mock('../src/Components/Pages/Remove');

// jest.mock('firebase/app');
const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }


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
                <AppRouter />
            </Router>
        );
        expect(history.location.pathname).toBe("/");
    })

    test("Clicking about", () => {
        let testHistory, testLocation;
        render(
            <MemoryRouter initialEntries={["/About"]}>
                <AppRouter />
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
        act(() => {
            
        })
        expect(testLocation.pathname).toBe('/About');
    })
    // test('full app rendering/navigating', () => {
    //     renderWithRouter(<AppRouter />)
    //     expect(screen.getByText(/Home/i)).toBeInTheDocument()
      
    //     const leftClick = { button: 0 }
    //     userEvent.click(screen.getByText(/about/i), leftClick)
      
    //     expect(screen.getByText(/About/i)).toBeInTheDocument()
    //   })
})