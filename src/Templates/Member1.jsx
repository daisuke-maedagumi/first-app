import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
// import List from '@material-ui/core/List'
import GitHubIcon from '@material-ui/icons/GitHub';
import TopImage from "../assets/images/ninomiya.jpg";

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
    <div className={classes.root.hugehoge}>
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
                <Typography gutterBottom variant="subtitle1">
                  <Grid container className="hugehoge">
                    <h2>自己紹介</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>名前：二ノ宮　大翼（にのみやだいすけ）</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>出身地：福岡県中間市</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>年齢：33</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>趣味：読書など</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <h2>持っている資格</h2>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>建設業経理士2級</li>
                  </Grid>
                  <Grid container className="hugehoge">
                    <li>宅地建物取引士試験合格</li>
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
                    2019年に11年間務めたハウスメーカーを退職し前々から興味を持っていたプログラミングの勉強を始め、
                    縁があって前田組に入社しました。
                    私は未経験という立場であるので、しっかりと技術力を身につけていきたいと思います。
                    こんな機能を実装したい、こんなアプリを作りたいと思った時に、即実行できるレベルのエンジニアになってけるよう
                    頑張っていきます。
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
                    href="https://github.com/daisuke-maedagumi"
                  >
                    <GitHubIcon />
                    <ListItemText primary="Github" />
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
