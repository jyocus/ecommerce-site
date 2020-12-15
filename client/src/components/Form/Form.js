import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        marginLeft: "30px", 
        marginBottom: "60px",
    },
    inputs: {
        marginTop: "20px",
        marginBottom: "20px",
    }
})); 

function Form() {
    const classes = useStyles();
    return (
        <div className={classes.form}>
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
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
                        />
                </Grid>
                </Grid>
                </form>
        </div>
        // <div className={classes.root}>
            
        // </div>
    )
}

export default Form