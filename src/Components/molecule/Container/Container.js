import { Grid } from '@material-ui/core'
import "./Container.css"

const Container = (props) => {
    return (
        <div >
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" className="root">
                    {props.children}
            </Grid>
        </div>
    )
}
export default Container;