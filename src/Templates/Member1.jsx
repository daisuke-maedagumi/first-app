import React from 'react'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const Member1 = () => {
  return (
    <div>
      <p>大翼</p>
      <Grid container>
        <Grid item xs={4}>
          <Button variant="contained"　color="primary">
            Default
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained"　color="primary">
            Default
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained"　color="primary">
            Default
          </Button>
        </Grid>        
      </Grid> 
    </div>
  )
}

export default Member1