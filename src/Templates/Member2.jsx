import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import GitHubIcon from '@material-ui/icons/GitHub';
import TopImage from "../assets/images/os.jpg";
import Switch from '@material-ui/core/Switch';

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

export default function Member2()
{
  const classes = useStyles();
  const [checkbox, setCheckbox] = useState('false')

  const handlecheckBox = () => {
    setCheckbox(!checkbox)
  }

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
                  {(checkbox ? <li>名前：山口導（やまぐちおさむ）</li> : <li>Name: Osamu Yamaguchi</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>出身地：長崎県長崎市</li> : <li>From：Nagasaki City, Nagasaki</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                    {(checkbox ? <li>年齢：22</li> : <li>Age：22</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>趣味：釣り、サッカー</li> : <li>Hobby：Fishing, soccer</li>)}
                  </Grid>
              
                </Typography>
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                {(checkbox ? <h2>紹介文</h2> : <h2>Introduction</h2>)}
                </Grid>
                {/* <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                </Box> */}

                <Grid container className="hugehoge"  direction="row">
                {(checkbox ? <p>
                    2020年3月大学を卒業（化学工学を専攻）
                    4月から前田組に入社して、6月からプログラミングの勉強を始める。<br/>
                    現在はengiennrs_teamに所属し、プログラミング言語はJavaScripで、html,css,Reactを使用中。<br/>
                    エンジニアとしての幅を広げるため日々邁進中
                  </p> : <p>
                  Graduated from university in March 2020 (major in chemical engineering) Joined Maeda-gumi in April and started studying programming in June. <br/>
                  Currently belongs to engiennrs_team, programming language is JavaScrip, and html, css, React are used.<br/>
                  Working hard every day to broaden my range as an engineer
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
                    href="https://github.com/yamaguchiosamu"
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
