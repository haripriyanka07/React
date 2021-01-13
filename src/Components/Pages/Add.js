import React, {useState} from "react";
// import { imageContext } from "../../AppRouter";
import Heading from "../atoms/Heading/Heading";
import Form from "../Organism/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import { addAction } from "../../Redux/Image/imageActions";
import '../molecule/Container/Container.css'

function Add(props) {

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [date, setDate] = useState('');
    const {isAuthenticated} = useAuth0();
    // const { setImage } = useContext(imageContext)
    
    console.log(props);

    function handleOnSubmit(e) {
        // setImage({type: 'add', data: {"name":name, "url":url, "info":info, "date":date}})
        const data = {
            name,
            url,
            info,
            date
        }
        props.addAction(data);
        setName('');setDate('');setInfo('');setUrl('');
        // setUrl = '';
        // setInfo = '';
        // setDate = '';

    }

    return (
        isAuthenticated ? (
        <div className="top">
            <Heading value="Add Image" />
            <Form onSubmit={handleOnSubmit} 
                    data= { [{"label":"URL", "type":"Text", "details":"Enter the URL", "value": url, "setValue": setUrl},
                        {"label":"Name", "type":"Text", "details":"Enter the name", "value":name, "setValue": setName},
                        {"label":"Information", "type":"TextArea", "details":"Information", "value": info, "setValue": setInfo},
                        {"label":"Date", "type":"date", "value": date, "setValue": setDate}] }
                    /> 
            
        </div>
        ) : 
        (
            <div className="top">
                <Heading value="Please Login" />
            </div>
        )
    )
}

const mapStateToProps = states => {
    // console.log("states", states);
    return {
        images: states.imageReducer.images
        // addAction: (data) => state(addAction(data)),
        // removeAction: (data) => state(removeAction(data))
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("dispatch", test)
    return {
        addAction: (data) => dispatch(addAction(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)