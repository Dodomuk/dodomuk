import React, { PureComponent } from "react";
import {
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { Save, Delete, Update} from "@material-ui/icons";
import { NavLink, Route } from "react-router-dom";
import { grey, lightGreen } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

interface Props {
  onSetName: Function;
  onSetIntro: Function;
  onAddClub: Function;
  name : string;
  intro : string;
}
class ClubTopView extends PureComponent<Props> {
  render() {
    const {onSetName , onSetIntro , onAddClub , name, intro } = this.props;
    

    //버튼 커스터마이징
    const AddButton = withStyles((theme) => ({
      root: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[500],
        "&:hover": {
          backgroundColor: grey[700],
        },
      },
    }))(Button);

    const TrashButton = withStyles((theme) => ({
      root: {
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[500],
        "&:hover": {
          backgroundColor: lightGreen[700],
        },
      },
    }))(Button);

    //input
    return (
      <form noValidate>
        <Grid container xs={10} spacing={2}>
          <Grid item xs={3}>
            <TextField
              margin="normal"
              id="outlined-basic"
              label="name"
              variant="standard"
              value={name}
              onChange={(event) => onSetName(event.target.value)}
            />
          </Grid>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={3}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="intro"
                variant="standard"
                value={intro}
                onChange={(event) => onSetIntro(event.target.value) }
              />
            </Grid>
          </Grid>

          <Grid item>
            <AddButton
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={() => onAddClub(name,intro)}
            >
              Add
            </AddButton>
            &nbsp;&nbsp;
            <TrashButton
              variant="contained"
              color="default"
              startIcon={<Delete />}
            >
              Update
            </TrashButton>
            &nbsp;&nbsp;
            <Button variant="contained" color="default" startIcon={<Update />}>
              Delete
            </Button>
            &nbsp;&nbsp;
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default ClubTopView;
