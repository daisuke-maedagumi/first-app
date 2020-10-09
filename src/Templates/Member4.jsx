import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
// import List from '@material-ui/core/List'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TopImage from "../assets/images/shovo.JPG";

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
    maxHeight: 1000,
    marginBottom: 20,
    marginTop: 100,
  },

  linkName: {
    textDecoration: "none",
    fontSize: "18px",
    color: "orange",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 128,
    height: 128,
  },
  hugehoge: {
    alignItems: "stretch",
    justify: "space-between",
    direction: "row",
    display: "flex",
    justifyContent: "stretch",
  },
  linkurl: {
    color: 'blue',
  }
}));

export default function Member4()
{
  const classes = useStyles();


  return (
    <div className={classes.hugehoge}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img src={TopImage} alt="complex" className={classes.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Grid container className="hugehoge">
                    <h2>自己紹介</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>名前：Shovon Rahman Shuvo</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>出身地：Bangladesh</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>年齢：27</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>趣味：Eating,Travelling,Fishing</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <h2>スキルセット</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>HTML5,CSS3,Jquery,Javascript,Flutter</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>Backend: PHP, Framework: Laravel Database: MySql</li>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                  <h2>紹介文</h2>
                </Grid>
                <Grid container className="hugehoge" direction="row">
                  <p>
                    Graduated in Computer Science and Engineering from East West
                    University,Bangladesh. From then working as full time
                    software engineer in two different companies. Have great
                    interest in learning new technologies. My main area of
                    expertise is web development in PHP,MySQL as Database. Have
                    done project with Laravel which is one the best PHP
                    framework. I have also interest in learning different area
                    of development like mobile application development, machine
                    learning etc. Worked with some mobile app development
                    technology like phonegap, Flutter. Started learning python
                    to increase my area of expertise. Want to learn as much as i
                    can.
                  </p>
                </Grid>
              </Grid>
              <Grid container className="hugehoge">
                <h3>SNS</h3>
              </Grid>
              <Grid container className="hugehoge">
                <Box
                  display="flex"
                  justifyContent="stretch"
                  className="hugehoge"
                >
                  <ListItem component="a" href="https://github.com/akandshuvo">
                    <GitHubIcon />
                    <ListItemText primary="Github" />
                  </ListItem>
                  <ListItem
                    component="a"
                    href="https://twitter.com/akandshuvo25"
                  >
                    <TwitterIcon />
                    <ListItemText primary="Twitter" />
                  </ListItem>
                  <ListItem
                    component="a"
                    href="https://www.instagram.com/shovonshuvo/"
                  >
                    <InstagramIcon />
                    <ListItemText primary="Instagram" />
                  </ListItem>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
