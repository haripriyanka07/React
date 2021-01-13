import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../../Redux/Contact/contactActions";
import Heading from '../atoms/Heading/Heading';
import Form from '../Organism/Form/Form';
import '../molecule/Container/Container'

function Contact(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [comments, setComments] = useState('');

    const {isAuthenticated} = useAuth0();

    function handleOnSubmit(e) {
        const data = {
            name,
            email,
            phoneNumber,
            address,
            comments
        }
        props.addContact(data);
        setName('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setComments('');
    }
    
    
    return (
        
        isAuthenticated ? (
        <div className='top'>
            <Heading value="Contact" />
            <Form onSubmit={handleOnSubmit} data={[{"label": "Name", "type":"Text", "details":"Enter Name", "value":name, "setValue": setName},
            {"label": "Email", "type":"Text", "details":"Your email", "value":email, "setValue": setEmail},
            {"label": "Phone Number", "type":"Number", "details":"Your Phone Number", "value": phoneNumber, "setValue": setPhoneNumber},
            {"label": "Address", "type":"Text", "details":"Enter your Address", "value": address, "setValue": setAddress},
            {"label": "Comments", "type":"TextArea", "details":"Enter your comments", "value": comments, "setValue": setComments}]} />
            
        </div>
        ):(
            <div className='top'>
                <Heading value="Please Login" />
            </div>
        )
    );
}

const mapStateToProps = states => {
    return {
        contacts: states.contactReducer.contacts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addContact: (data) => dispatch(addContact(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)