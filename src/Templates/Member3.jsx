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
import TopImage from "../assets/images/kyohei.jpg";

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

export default function Member3()
{
  const classes = useStyles();


  return (
    <div className={classes.hugehoge}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {/* <img
                className={classes.img}
                alt="complex"
                src="../assets/images/maedagumi5.jpg"
              /> */}
              <img src={TopImage} alt="complex" className={classes.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" >
                  <Grid container className="hugehoge">
                    <h2>自己紹介</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>名前：山本恭平（やまもときょうへい）</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>出身地：福岡県北九州市</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>年齢：24</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>趣味：スポーツ観戦(野球・サッカー)など</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <h2>持っている資格</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>MOSWord2013</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>MOSExcel2013</li>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                  <h2>紹介文</h2>
                </Grid>
                {/* <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                </Box> */}

                <Grid container className="hugehoge"  direction="row">
                  <p>
                    2019年3月大学を卒業（情報システム工学を専攻していました）
                    学外ではTABIPPOという団体で旅を広める活動や教育支援団体で教育支援などを行ってきました
                    現在はプログラミングが好きです（オンラインサロンでも勉強したり教えあったりしています・アウトプットの重要性を実感してます）
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
                  <ListItem
                    component="a"
                    href="https://github.com/KyoheiYamamoto"
                  >
                    <GitHubIcon />
                    <ListItemText primary="Github" />
                  </ListItem>
                  <ListItem
                    component="a"
                    href="https://twitter.com/davidkyohei"
                  >
                    <TwitterIcon />
                    <ListItemText primary="Twitter" />
                  </ListItem>
                  <ListItem
                    component="a"
                    href="https://www.instagram.com/kyohei_1642"
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
