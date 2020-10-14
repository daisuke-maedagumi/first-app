import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Switch from '@material-ui/core/Switch';
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
  const [checkbox, setCheckbox] = useState('false')

  const handlecheckBox = () => {
    setCheckbox(!checkbox)
  }


  return (
    <div className={classes.hugehoge}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img src={TopImage} alt="complex" className={classes.img} />
            </ButtonBase>
            <Switch
              onClick={handlecheckBox}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>                
                <Typography gutterBottom variant="subtitle1" >
                  <Grid container className="hugehoge">
                  {(checkbox ? <h2>自己紹介</h2> : <h2>Introduction</h2>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>名前：山本恭平（やまもときょうへい）</li> : <li>Name: Kyouhei Yamamoto</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>出身地：福岡県北九州市</li> : <li>From：Kitakyushu City, Fukuoka</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>年齢：24</li> : <li>Age：24</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>趣味：スポーツ観戦・旅行・読書など</li> : <li>Hobby: Watching sports, traveling, reading, etc.</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <h2>スキルセット</h2> : <h2>Skill set</h2>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>フロントエンド：HTML・CSS・JavaScript(Vue.jsを勉強なう)</li> : <li>Frontend: HTML / CSS / JavaScript (Let's study Vue.js)</li>)}
                  </Grid>

                  <Grid container className="hugehoge">
                  {(checkbox ? <li>バックエンド：PHP(Laravel)</li> : <li>Backend: PHP (Laravel)</li>)}
                  </Grid>
                </Typography>
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                {(checkbox ? <h2>紹介文</h2> : <h2>Introduction</h2>)}
                </Grid>
                <Grid container className="hugehoge"  direction="row">
                {(checkbox ? <p>
                    2019年3月大学を卒業（情報システム工学を専攻していました）。
                    学生時代にTABIPPOという団体で旅を広める活動や教育支援団体で教育支援などを行ってきました。
                    オンラインサロンでプログラミングも勉強したり教えあったりしています。
                    最近の目標はShovon達と英語での円滑なやりとりができるようになることです。
                  </p> : <p>
                    Graduated from university in March 2019 (major in information systems engineering).<br/> When I was a student, I was involved in activities to spread travel with an organization called TABIPPO and educational support with an educational support group. <br/>I also study and teach programming at an online salon. <br/>My recent goal is to be able to communicate smoothly with Shovon and others in English.
                  </p>)}
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
