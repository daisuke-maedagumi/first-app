import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {ProfileText,ProfileImage,TextContents,TextIcon} from '../components/nakashima/index'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
    height: 'auto',
    marginBottom: 20,
    marginTop: 100,
  },

  linkName: {
    textDecoration: "none",
    fontSize: "18px",
    color: "orange",
  },
  hugehoge: {
    alignItems: "stretch",
    justify: "space-between",
    direction: "row",
    display: "flex",
    justifyContent: "stretch",
  },
  icons: {
    color: 'orange',
  },
  iconFont: {
    color: 'black'
  }
}));

const Member6 = () => {

  const classes = useStyles();


  return (
    <div className={classes.hugehoge}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <ProfileImage/>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ProfileText/>
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                  <h2>Introduction</h2>
                </Grid>
                <TextContents/>
              </Grid>
              <Grid container className="hugehoge">
                <h3>SNS</h3>
              </Grid>
              <TextIcon/>
              <Grid container className="hugehoge">
                <h3>My portfolio site</h3>
                <ListItem
                  component="a"
                  href="https://github.com/KyoheiYamamoto"
                >
                  <LanguageIcon className={classes.icons}/>
                  <ListItemText className={classes.iconFont} primary="NakajiBlog" />
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Member6
