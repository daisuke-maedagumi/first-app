import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NoImage from '../../assets/images/no_image.png'
import {push} from 'connected-react-router'
import {useDispatch} from 'react-redux'
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {deleteBlog} from '../../reducks/blogs/operations'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '256px',
    height: '180px'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  items: {
    marginBottom: '20px'
  }
}));



const BlogItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const images = (props.images.length > 0) ? props.images : [{path: NoImage}]

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.items}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content} onClick={() => dispatch(push('/Blogs/detail/' + props.id))}>
            <Typography component="h5" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.member}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton onClick={handleClick}>
              <EditAttributesIcon/>
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              <MenuItem
              onClick={() => {
                dispatch(push('/Administrator/edit/' + props.id))
                handleClose()
              }}
              >
                EDIT
              </MenuItem>
              <MenuItem
              onClick={() => {
                dispatch(deleteBlog(props.id))
              }}>
                DELETE
              </MenuItem>
            </Menu>
          </div>
        </div>
        <CardMedia
          onClick={() => dispatch(push('/Blogs/detail/' + props.id))}
          className={classes.cover}
          image= {images[0].path}
        />
        
      </Card>
    </div>
  )
}

export default BlogItem
