import { ADD_IMAGE, REMOVE_IMAGE } from '../Types/imageTypes';
import { toast } from 'react-toastify';

export function addAction(data) {
    return function(type) {
        type({
            type: ADD_IMAGE,
            data: data
        });
        toast.success("Successfully Added");
    };
}
export function removeAction(imageName) {
    return function(dispatch) {
        dispatch({
            type: REMOVE_IMAGE,
            imageName: imageName
        });
        toast.success("Successfully Removed");
    };
}