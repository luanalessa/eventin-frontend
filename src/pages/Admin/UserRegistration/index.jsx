import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "../../../components/Button";
import RegisterTemplate from "../../../components/RegisterTemplate";
import * as S from "./styles";

function UserRegistration() {
  const history = useHistory();

  const onSubmit = () => {
    history.push(`/admin/users`);
  };

  return (
    <RegisterTemplate>
      <S.Title>User registration</S.Title>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            placeholder="Type the fullname of the user"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder="Define a username"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Set a password"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button onClick={onSubmit}>Register new user</Button>
        </Grid>
      </Grid>
    </RegisterTemplate>
  );
}

export default UserRegistration;