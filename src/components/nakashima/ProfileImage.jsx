import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import MemberImage from "../../assets/images/nakajilogo.png";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 128,
    height: 128,
  }
}));

const ProfileImage = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <ButtonBase className={classes.image}>
        <img src={MemberImage} alt="complex" className={classes.img} />
      </ButtonBase>
    </Grid>
  )
}

export default ProfileImage
