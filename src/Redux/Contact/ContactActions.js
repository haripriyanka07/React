import { ADD_CONTACT } from "./ContactTypes";
import { toast } from "react-toastify";

export function addContact(data) {
    toast.success("SuccessFully Submitted");
    return ({
        type: ADD_CONTACT,
        data: data
    });
    
}