import React from 'react'
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  githubIcon: {
    color: 'black'
  },
  twitterIcons: {
    color: 'rgb(29, 161, 242);'
  }
})

const TextIcon = () => {
  const classes = useStyles()
  return (
    <Grid container className="hugehoge">
      <Box
        display="flex"
        justifyContent="stretch"
        className="hugehoge"
      >
        <ListItem
          component="a"
          href="https://github.com/shouta-nakashima"
        >
          <GitHubIcon className={classes.githubIcon}/>
          <ListItemText className={classes.githubIcon} primary="Github" />
        </ListItem>
        <ListItem
          className={classes.twitterIcons}
          component="a"
          href="https://twitter.com/shota_nakaji"
        >
          <TwitterIcon />
          <ListItemText primary="Twitter" />
        </ListItem>
      </Box>
    </Grid>
  )
}

export default TextIcon
