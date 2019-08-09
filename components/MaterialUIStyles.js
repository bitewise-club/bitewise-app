import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grid: {
        [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(30),
        },
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    image: {
        width: "100%",
        position: "relative",
        objectFit: "cover",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    p: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "large",
        },
    },
    maintitle: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large"
        },
    },
    card: {
        minWidth: 275,

    },
    title: {
        fontSize: 14,
    },
}));