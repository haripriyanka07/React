import { useAuth0 } from "@auth0/auth0-react";
import { useContext , useState} from "react";
import { imageContext } from "../../AppRouter";
import Heading from "../atoms/Heading";
import Form from "../Organism/Form/Form";

export default function Remove() {

    const { setImage } = useContext(imageContext)

    const [name, setName] = useState('');
    const {isAuthenticated} = useAuth0();

    function handleOnSubmit(e) {
        setImage({type: 'remove', name:name})
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