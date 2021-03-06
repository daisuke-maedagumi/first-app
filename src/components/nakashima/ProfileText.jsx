import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ProfileText = () => {
  return (
    <Typography gutterBottom variant="subtitle1" >
      <Grid container className="hugehoge">
        <h2>自己紹介</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>名前：中嶋　翔太（なかしましょうた）</li>
          <li>ニックネーム: ナカジ</li>
          <li>出身地：福岡県小郡市</li>
          <li>年齢：34</li>
          <li>趣味：野球、バス釣り</li>
        </ul>
      </Grid>
      <Grid container className="hugehoge">
        <h2>職歴</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>陸上自衛隊(小郡、飯塚)</li>
          <li>JR西日本新幹線テクノス</li>
        </ul>
      </Grid>
      <Grid container className="hugehoge">
        <h2>スキルセット</h2>
      </Grid>
      <Grid container className="hugehoge">
        <ul>
          <li>フロントエンド: Vue/NuxtJs, React/Redux</li>
          <li>サーバーサイド: Ruby/Rails, PHP/Laravel</li>
          <li>API: GlaphQL/NodeJs</li>
          <li>DB:mySQL, Firebase, MongoDB</li>
        </ul>
      </Grid>
    </Typography>
  )
}

export default ProfileText
