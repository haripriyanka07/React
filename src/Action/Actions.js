import { ADD_image, REMOVE_image } from './ActionTypes';
import { toast } from 'react-toastify';

export function addAction() {
    return function(dispatch) {
        dispatch({
            type: ADD_image
        });
        toast.success("Successfully Submitted");
    };
}
export function removeAction() {
    return function(dispatch) {
        dispatch({
            type: REMOVE_image
        });
        toast.error("Error, Please check the details carefully");
    };
}