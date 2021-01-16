import React, {useState} from "react";
import Heading from "../atoms/Heading/Heading";
import Form from "../Organism/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import { addAction } from "../../Redux/Actions/imageActions";
import Container from "../molecule/Container/Container";

function Add(props) {

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [date, setDate] = useState('');
    const {isAuthenticated} = useAuth0();

    function handleOnSubmit(e) {
        const data = {
            name,
            url,
            info,
            date
        }
        props.addAction(data);
        setName('');setDate('');setInfo('');setUrl('');
    }

    return (
        <Container>
        {isAuthenticated ? (
        <div style={{height: "90%", width:"50%", marginLeft:"auto", marginRight:"auto"}}>
            <Heading>Add Image</Heading>
            <Form onSubmit={handleOnSubmit} 
                    data= { [{"label":"URL", "type":"Text", "placeholder":"Enter the URL", "value": url, "setValue": setUrl},
                        {"label":"Name", "type":"Text", "placeholder":"Enter the name", "value":name, "setValue": setName},
                        {"label":"Information", "type":"TextArea", "placeholder":"Information", "value": info, "setValue": setInfo},
                        {"label":"Date", "type":"date", "value": date, "setValue": setDate}] }
                    /> 
        </div>
        ) : 
        (
            <div className="top">
                <Heading>Please Login</Heading>
            </div>
        )}
        </Container>
    )
}

const mapStateToProps = states => {
    return {
        images: states.imageReducer.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAction: (data) => dispatch(addAction(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)