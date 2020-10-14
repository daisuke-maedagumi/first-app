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
                <Typography gutterBottom variant="subtitle1">
                  <Grid container className="hugehoge">
                  {(checkbox ? <h2>自己紹介</h2> : <h2>Introduction</h2>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>名前：Shovon Rahman Shuvo</li> : <li>Name: Shovon Rahman Shuvo</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>出身地：バングラディッシュ</li> : <li>From：Bangladesh</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                    {(checkbox ? <li>年齢：27</li> : <li>Age：27</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>趣味：食べる事、旅行、釣り</li> : <li>Hobby：Eating,Travelling,Fishing</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <h2>スキルセット</h2> : <h2>Skill set</h2>)}
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
                  {(checkbox ? <h2>紹介文</h2> : <h2>Introduction</h2>)}
                </Grid>
                <Grid container className="hugehoge" direction="row">
                  {(checkbox ? <p>
                    バングラデシュのイーストウェスト大学でコンピューターサイエンスとエンジニアリングを卒業。<br/>
                    それ以来、2つの異なる会社でフルタイムのソフトウェアエンジニアとして働いています。<br/>
                    新しいテクノロジーの学習に大きな関心を持っています。<br/>
                    私の主な専門分野は、PHPでのWeb開発、データベースとしてのMySQLです。最高のPHPフレームワークの1つであるLaravelでプロジェクトを完了しました。<br/>
                    また、モバイルアプリケーション開発、機械学習など、さまざまな開発分野の学習にも興味があります。phonegap、Flutterなどのモバイルアプリ開発テクノロジーを使用していました。私の専門分野を増やすためにPythonを学び始めました。できるだけ多くのことを学びたいと思います。
                    </p> : <p>
                    Graduated in Computer Science and Engineering from East West
                    University,Bangladesh.<br/> From then working as full time
                    software engineer in two different companies. <br/>Have great
                    interest in learning new technologies.<br/> My main area of
                    expertise is web development in PHP,MySQL as Database.<br/> Have
                    done project with Laravel which is one the best PHP
                    framework. I have also interest in learning different area
                    of development like mobile application development, machine
                    learning etc. Worked with some mobile app development
                    technology like phonegap, Flutter. Started learning python
                    to increase my area of expertise. Want to learn as much as i
                    can.
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
