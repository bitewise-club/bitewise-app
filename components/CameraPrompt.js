import React from 'react';
import {ButtonBase, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

function CameraPrompt(){
    const classes = useStyles();

    return(
        <input type="file">
        {/*<ButtonBase*/}
        {/*    focusRipple*/}
        {/*    key="Open Camera"*/}
        {/*    className={classes.image}*/}
        {/*    focusVisibleClassName={classes.focusVisible}*/}
        {/*    style={{*/}
        {/*        width: '100%',*/}
        {/*    }}*/}
        {/*>*/}
        {/*    /!*<input id="imageInput" type='file' hidden/>*!/*/}
        {/*    <span*/}
        {/*        className={classes.imageSrc}*/}
        {/*        style={{*/}
        {/*            backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"})`,*/}
        {/*        }}*/}
        {/*    />*/}
        {/*    <span className={classes.imageBackdrop}/>*/}
        {/*    <span className={classes.imageButton}>*/}
        {/*        <Typography*/}
        {/*            component="span"*/}
        {/*            variant="h2"*/}
        {/*            color="inherit"*/}
        {/*            className={classes.imageTitle}*/}
        {/*        >*/}
        {/*          Open Camera*/}
        {/*            <span className={classes.imageMarked}/>*/}
        {/*        </Typography>*/}
        {/*      </span>*/}
        {/*</ButtonBase>*/}
        </input>
    )
}

export default CameraPrompt;