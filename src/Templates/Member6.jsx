import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {ProfileText,ProfileImage,TextContents,TextIcon,ProfileTextEn,TextContentsEn} from '../components/nakashima/index'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import LanguageIcon from '@material-ui/icons/Language';
import Switch from '@material-ui/core/Switch';

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


const Member6 = (props) => {

  const classes = useStyles();
  const [checkbox, setCheckbox] = useState('false')

  const handlecheckBox = () => {
    setCheckbox(!checkbox)
  }
  

  return (
    <div className={classes.hugehoge}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <ProfileImage/>
          <Switch
            onClick={handlecheckBox}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {(checkbox ? <ProfileText/> :<ProfileTextEn/>)}
              </Grid>
              <Grid item>
                <Grid container className="hugehoge">
                  {(checkbox ? <h2>紹介文</h2> : <h2>Introduction</h2>)}
                </Grid>
                {(checkbox ? <TextContents/> : <TextContentsEn/>)}
                
              </Grid>
              <Grid container className="hugehoge">
                <h3>SNS</h3>
              </Grid>
              <TextIcon/>
              <Grid container className="hugehoge">
                <h3>My portfolio site</h3>
                <ListItem
                  component="a"
                  href="https://nakaji-portrfolio-blogs.netlify.app/"
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
