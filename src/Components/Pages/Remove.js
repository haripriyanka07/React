import { useAuth0 } from "@auth0/auth0-react";
import { useState} from "react";
// import { imageContext } from "../../AppRouter";
import Heading from "../atoms/Heading";
import Form from "../Organism/Form/Form";
import { connect } from "react-redux";
import { removeAction } from "../../Redux/Image/imageActions";

function Remove(props) {

    // const { setImage } = useContext(imageContext)

    const [name, setName] = useState('');
    const {isAuthenticated} = useAuth0();

    function handleOnSubmit(e) {
        // setImage({type: 'remove', name:name})
        const imageName = name
        props.removeAction(imageName);
        setName('');
    }

    return (
        isAuthenticated ? (
        <div>
            <Heading value="Remove Image" />
            <Form onSubmit={handleOnSubmit}
                data={[{"label":"Name", "type":"Text", "details":"Enter the Name", "value":name, "setValue": setName}]} />
        </div>
        ) : 
        (
            <div>
                <Heading value="Please Login" />
            </div>
        )
    )
}

const mapStateToProps = state => {
    return {
        images: state.images
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        removeAction: (data) => dispatch(removeAction(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Remove)