export const initialState = {
    images :[]
}

export const reducer = (state = initialState, action) => {
   
    switch(action.type){
        case 'add':
            return {...state, images: [...state.images, action.data]};
        case 'remove':
            const z = state.images
            const y = z.filter((val) => {
                return (val.name !== action.name)
            })
            // console.log(y);
            return {...state, images:y};
            
        default:
            return state;
    }
}