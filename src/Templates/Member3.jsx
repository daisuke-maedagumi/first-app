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

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
    maxHeight: 1000,
    marginBottom: 20,
    marginTop: 30,
  },

  image: {
    width: 128,
    height: 128,
  },
  linkName: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'orange'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  Url: {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    overflow: "hidden",
  }

}));

export default function Member3()
{
  const classes = useStyles();


  return (
    <div className={classes.root.hoge}>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Grid container alignItems="stretch" justify="space-between" direction="row">
                    <h1>
                      自己紹介
                    </h1>
                  </Grid>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <Grid container alignItems="flex-start" justify="space-between" direction="row">
                    <li>名前:山本恭平（やまもときょうへい）</li>
                  </Grid>
                  <Grid container alignItems="stretch" justify="space-between" direction="row">
                    <li>
                      年齢:24
                    </li>
                  </Grid>
                  <Grid container alignItems="stretch" justify="space-between" direction="row">
                    <li>
                      出身地:福岡県北九州市
                     </li>
                  </Grid>
                </Typography>

              </Grid>
              <Grid item>
                <Grid container alignItems="flex-start" justify="space-between" direction="row">
                  <h2>経歴</h2>
                </Grid>
              </Grid>
              <Grid container alignItems="flex-start" justify="space-between" direction="row">
                <h2>リンク先</h2>
              </Grid>
              <Box display="flex" justifyContent="stretch" alignItems="stretch" justify="space-between" direction="row">
                <Box p={3} >
                  <ListItem component="a" href="https://github.com/KyoheiYamamoto" >
                    <GitHubIcon /><ListItemText primary="Github" />
                  </ListItem>
                </Box>
                <Box p={3} >
                  <ListItem component="a" href="https://twitter.com/davidkyohei">
                    <TwitterIcon /><ListItemText primary="Twitter" />
                  </ListItem>
                </Box>
                <Box p={3} >
                  <ListItem component="a" href="https://www.instagram.com/kyohei_1642">
                    <InstagramIcon /><ListItemText primary="Instagram" />
                  </ListItem>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div >
  );
}
