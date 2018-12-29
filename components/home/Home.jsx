import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import Register from './register/Register';
import Login from './login/Login';

const styles = theme => ({
  formRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

function Home(props) {
  const [register, setRegister] = useState(false);
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper className={classes.paper}>
          <FormGroup className={classes.formRow}>
            <FormControlLabel
              control={
                <Switch
                  checked={register}
                  onChange={() => setRegister(!register)}
                  value="register"
                  color="default"
                />
              }
              label={register ? 'Register' : 'Login'}
            />
          </FormGroup>
          <FormGroup>{register ? <Register /> : <Login />}</FormGroup>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(Home);
