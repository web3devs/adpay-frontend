import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Register from './register/Register';
import Login from './login/Login';

export default function Home(props) {

  const [ register, setRegister ] = useState(false);

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
                checked={register}
                onChange={() => setRegister(!register)}
                value="register"
                color="default"
              />
          }
          label={register ? "Register" : "Login"}
        >
        </FormControlLabel>
      </FormGroup>
      <FormGroup row>
        { register ?
          <Register />
          :
          <Login />
        }
      </FormGroup>
    </div>
  );
}
