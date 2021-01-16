import { Typography } from "@material-ui/core";

const Heading = (props) => {
    return (
        <Typography align='center' data-testid="h1tag" variant='h4'>{props.children}</Typography>
    )
}
export default Heading;

