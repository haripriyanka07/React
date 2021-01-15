import { ADD_CONTACT } from "../Types/contactTypes";
import { toast } from "react-toastify";

const addContact = (data) => {
    toast.success("SuccessFully Submitted");
    return ({
        type: ADD_CONTACT,
        data: data
    });
}
export default addContact;