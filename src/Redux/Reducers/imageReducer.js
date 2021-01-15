import { ADD_IMAGE, REMOVE_IMAGE} from '../Types/imageTypes'

export const initialState = {
    images :[]
}

export const imageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_IMAGE :
            return {...state, images: [...state.images, action.data]};

        case REMOVE_IMAGE :
            const imgs = state.images
            const filteredImages = imgs.filter((val) => {
                return (val.name !== action.imageName)
            })
            return {...state, images:filteredImages};
            
        default:
            return state;
    }
}