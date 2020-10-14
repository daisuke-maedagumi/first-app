import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import InstagramIcon from '@material-ui/icons/Instagram';
import TopImage from "../assets/images/ys.jpg";
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

export default function Member5()
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
                <Typography gutterBottom variant="subtitle1" >
                  <Grid container className="hugehoge">
                  {(checkbox ? <h2>自己紹介</h2> : <h2>Introduction</h2>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>名前：山本晋太朗（やまもとしんたろう）</li> : <li>Name: Shintaro Yamamoto</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>出身地：福岡県北九州市</li> : <li>From：Kitakyushu City, Fukuoka</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>年齢：26</li> : <li>Age：26</li>)}
                  </Grid>
                  <Grid container className="hugehoge">
                  {(checkbox ? <li>趣味：銭湯、スケートボード</li> : <li>Hobby: skateboard,”Sentou”</li>)}
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
                  大学大学院では主に物理系の研究をしていました。<br/>
                  全く楽しくなかったので中退してアフリカに行く予定でしたが、コロナの影響で行けなくなりました。<br/>
                  銭湯が好きです。
                  </p> : <p>
                    At university graduate school, I was mainly studying physics. <br/>I wasn't having fun at all, so I planned to drop out and go to Africa, but I couldn't go because of the influence of COVID19.<br/> I like "Sentou".
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
                    href="@monkeytatata"
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
