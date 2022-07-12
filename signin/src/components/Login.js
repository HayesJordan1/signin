import React from "react";
import Grid  from "@mui/material/Grid";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
const Login=() => {
    const avatarStyle={
        backgroundColor:"Green"
    }
    const paperStyle={
     padding:"20px",
     height: "70vh",
     width: 280,
     margin:"20px auto"

    }
    const btnStyle={
        margin:"80px 0"
    }
    const textfield={
        margin:"10px"
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
              <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
             <h2>Sign In</h2>
             </Grid>
       
           
             <TextField label="Username" placeholder="Enter Username" required></TextField >
             <TextField label="Password" placeholder="Enter Password" required></TextField>
             <FormControlLabel control={<Checkbox name="Checked" color="primary"/>}
             label="Remember Me"
             />
             <Button
                 type="Submit"
                 color="primary"
                 variant="contained"
                 style={btnStyle}
                 fullWidth
                 >
                Sign In
             </Button>

             <Typography style={textfield}>
             <Link href="8">
             <b>Forgot Password</b>
             </Link>

             </Typography>

             <Typography style={textfield}>
             <Link href="8">
               Dont have an account? <b> Sign Up </b>
             </Link>

             </Typography>
             </Paper>
         </Grid>
    )
}

export default Login;