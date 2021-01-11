import React from "react";
import Heading from '../atoms/Heading';
import Form from '../Organism/Form/Form';

export class Contact extends React.Component{

    handleOnSubmit(e) {
        console.log("CCCC");
    }
    
    render() {
        return (
            <div>
                <Heading value="Contact" />
                <Form onSubmit={this.handleOnSubmit} data={[{"label": "Name", "type":"Text", "details":"Enter Name"},
                {"label": "Email", "type":"Text", "details":"Your email"},
                {"label": "Phone Number", "type":"Number", "details":"Your Phone Number"},
                {"label": "Address", "type":"Text", "details":"Enter your Address"},
                {"label": "Comments", "type":"TextArea", "details":"Enter your comments"}]} />
                
            </div>
        );
    }
}