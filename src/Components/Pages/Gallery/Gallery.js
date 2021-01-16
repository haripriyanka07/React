import { GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import React from "react";
import Img from "../../atoms/Img/Img";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Heading from "../../atoms/Heading/Heading";
import { connect } from 'react-redux';
import Container from "../../molecule/Container/Container";
import "./Gallery.css";

class Gallery extends React.Component {

    render() {
        return (
            <Container>
                <Heading>Gallery</Heading>
                <div className="section">
                    <GridList cellHeight={200} spacing={1} className="gridList">
                        {this.props.images.map((tile) => (
                            <GridListTile key={tile.name} cols={1}>
                                <Img src={tile.url} alt={tile.info} />
                                <GridListTileBar
                                    title={tile.name}
                                    subtitle={<span>info: {tile.info}</span>}
                                    titlePosition="top"
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.name}`} className="icon">
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.imageReducer.images
    }
}

export default connect(mapStateToProps)(Gallery);