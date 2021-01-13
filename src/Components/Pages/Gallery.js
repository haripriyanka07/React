// import classes from "*.module.css";
import { GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import React from "react";
// import { imageContext } from "../../AppRouter";
// import Heading from "../atoms/Heading";
import Img from "../atoms/Img/Img";
import { withStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Heading from "../atoms/Heading";
// import { addAction, removeAction } from '../../Redux/Image/imageActions';
import { connect } from 'react-redux';
import '../molecule/Container/Container.css'


const Styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
      },    
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
    color: 'white',
    }
  });

class Gallery extends React.Component {
    
    render () {
        console.log(this.props);
        const {classes} = this.props;
        // console.log(classes.root);
        return (
            <div className='top'>
                <Heading value="Gallery" />
            
                <div className={classes.root}>
                
                    <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                        
                        {this.props.images.map((tile) => (
                            <GridListTile key={tile.name} cols={1}>
                                <Img src={tile.url} alt={tile.info} />
                                <GridListTileBar 
                                    title={tile.name}
                                    subtitle={<span>info: {tile.info}</span>}
                                    titlePosition="top"
                                    actionIcon={
                                        <IconButton aria-label={`star ${tile.name}`} className={classes.icon}>
                                            <StarBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.IR.images
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addAction: () => dispatch(addAction())
//     }
// }

// export default connect(
//     mapStateToProps
// )(Gallery)\

export default connect(mapStateToProps)(withStyles(Styles)(Gallery));