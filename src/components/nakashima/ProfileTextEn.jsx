import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ProfileEnText = () => {
  return (
    <Typography gutterBottom variant="subtitle1" >
      <Grid container className="hugehoge">
        <h2>Self-introduction</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>Name：Shota Nakashima</li>
          <li>Nickname: Nakaji</li>
          <li>From：Ogori City, Fukuoka</li>
          <li>Age：34</li>
          <li>Hobby：Baseball、Bass fishing</li>
        </ul>
      </Grid>
      <Grid container className="hugehoge">
        <h2>Work history</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>Ground Self-Defense Force (Ogori, Iizuka)</li>
          <li>JR West Shinkansen Technos</li>
        </ul>
      </Grid>
      <Grid container className="hugehoge">
        <h2>Skill’s</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>Front　End: Vue/NuxtJs, React/Redux</li>
          <li>Server　Side: Ruby/Rails, PHP/Laravel</li>
          <li>API: GlaphQL/NodeJs</li>
          <li>DB:mySQL, Firebase, MongoDB</li>
        </ul>
      </Grid>
    </Typography>
  )
}

export default ProfileEnText
