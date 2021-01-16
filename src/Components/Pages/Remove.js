import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Heading from "../atoms/Heading/Heading";
import Form from "../Organism/Form/Form";
import { connect } from "react-redux";
import { removeAction } from "../../Redux/Actions/imageActions";
import Container from "../molecule/Container/Container";

function Remove(props) {
    const [name, setName] = useState('');
    const { isAuthenticated } = useAuth0();

    function handleOnSubmit(e) {
        const imageName = name
        props.removeAction(imageName);
        setName('');
    }
    return (
        <Container>
        {isAuthenticated ? (
            <div style={{height: "90%", width:"50%", marginLeft:"auto", marginRight:"auto"}}>
                <Heading>Remove Image</Heading>
                <Form onSubmit={handleOnSubmit}
                    data={[{ "label": "Name", "type": "Text", "placeholder": "Enter the Name", "value": name, "setValue": setName }]} />
            </div>
        ) :
            (
                <div>
                    <Heading>Please Login</Heading>
                </div>
            )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeAction: (data) => dispatch(removeAction(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Remove)