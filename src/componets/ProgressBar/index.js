import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
    root: {
        height: 15,


        backgroundColor: lighten('#4B0082', 0.5),
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#4B0082',
    },
})(LinearProgress);



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedProgressBars(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <ColorCircularProgress size={30} thickness={5} />
            <ColorLinearProgress className={classes.margin} /> */}
            <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={props.value}
            />
            {/* <FacebookProgress /> */}
        </div>
    );
}
