import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ProfileText = () => {
  return (
    <Typography gutterBottom variant="subtitle1" >
      <Grid container className="hugehoge">
        <h2>Self-introduction</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>Name：中嶋　翔太（なかしましょうた）</li>
          <li>Nickname: ナカジ</li>
          <li>Birthplace：福岡県小郡市</li>
          <li>Age：34</li>
          <li>Hobby：野球、バス釣り</li>
        </ul>
      </Grid>
      <Grid container className="hugehoge">
        <h2>Work history</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>陸上自衛隊(小郡、飯塚)</li>
          <li>JR西日本新幹線テクノス</li>
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

export default ProfileText
