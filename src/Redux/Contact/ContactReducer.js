import { ADD_CONTACT } from './ContactTypes'

export const initialState = {
    contacts: []
}

export const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {...state, contacts: [...state.contacts, action.data]};
        default:
            return state;
    }
}
// export default contactReducer;