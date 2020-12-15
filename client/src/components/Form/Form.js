import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
    form: {
        marginLeft: "30px", 
        marginBottom: "60px",
    },
    inputs: {
        marginTop: "20px",
        marginBottom: "20px",
    },
    button: {
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "blue",
        color: "white"
    }
})); 

function Form() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        name: "",
        number: "",
        email: "",
        description: "",
        deadline: "",
        requestedQuotes: []
    })

      // USE EFFECT
        useEffect(()=>{
            API.getPosts().then(function(data) {
                console.log("data??", data)
            setState({...state, requestedQuotes: data.data})
            })
        }, []);

        // Helper function to capture typing
        const handleChange = (event) => {
            console.log("is this working??", event);
            const {name, value} = event.target
            setState({...state, [name]: value});
            console.log("what's in state?", state)
        };


    // Helper function for button on click
    const handleClick = (event) => {
        // grab values from state-< title body
        console.log("handle click event test", event)
        let {name, number, email, description, deadline} = state;
        event.preventDefault()
        API.savePost({
        name, number, email, description, deadline
        }).then((result) => {
        // setBlog with new userPost
            // create post obj
            let newQuote = {
            name, number, email, description, deadline
            }
            // make temp array from userPosts[]
            let tempArray = state.requestedQuotes;
            // push new obj to start of temp array
            tempArray = [newQuote, ...tempArray];
            // tempArray.push(newPost)
            // setState with new temp array, title "" body ""
            setState({
            requestedQuotes: tempArray,
            name: "",
            number: "",
            email: "",
            description: "",
            deadline: ""
            })
        })
    };


    return (
        <div className={classes.form}>
            <h1>Request A Quote</h1>
            <h3>Looking for something unique? Request a custom project quote from Kyle!</h3>
            <p>To get your custom project quote from Kyle, simply fill out the information below to the best of your ability. You'll hear from Kyle within 3-5 business days about the status of your project request.</p>
            <form>
                <Grid container className={classes.inputs}>
                <Grid item xs="12">
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Name"
                        variant="outlined"
                        name="name"
                        onChange={handleChange}
                        />
                </Grid>
                </Grid>
                <Grid container className={classes.inputs}>
                <Grid item xs="8">
                    <TextField
                        required
                        id="outlined-basic"
                        defaultValue="Phone Number"
                        variant="outlined"
                        name="phone"
                        onChange={handleChange}
                        />
                </Grid>
                </Grid>
                <Grid container className={classes.inputs}>
                <Grid item xs="8">
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Email"
                        variant="outlined"
                        name="email"
                        onChange={handleChange}
                        />
                </Grid>
                </Grid>
                <Grid container className={classes.inputs}>
                <Grid item xs="8">
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Project Description"
                        variant="outlined"
                        name="description"
                        onChange={handleChange}
                        />
                </Grid>
                </Grid>
                <Grid container className={classes.inputs}>
                <Grid item xs="8">
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Project Deadline Date"
                        variant="outlined"
                        name="deadline"
                        onChange={handleChange}
                        />
                </Grid>
                    <Grid container>
                        <Button 
                        onClick={handleClick}
                        className={classes.button}
                        variant="contained">Submit</Button>
                    </Grid>
                </Grid>
                </form>
        </div>
        // <div className={classes.root}>
            
        // </div>
    )
}

export default Form