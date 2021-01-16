import { Typography } from "@material-ui/core";
import "./Paragraph.css";

const Paragraph = (props) => {
    return (
        <Typography align="center" paragraph className="paragraph">{props.children}</Typography>
    )
}
export default Paragraph;