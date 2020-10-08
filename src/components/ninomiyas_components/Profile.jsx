import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: "0 2px 5px rgba(0,0,0,0.26)",
  },
  myName: {
    fontFamily: "Roboto Slab, Times New Roman, serif"

  }
  
}));


const Profile = () => {
  const classes = useStyles();
  return (
    <div className="profile">
      <h1 className="test">NINOMIYA DAISUKE</h1>
      <div>
        <Link href="https://github.com/daisuke-maedagumi" target="_blank">
          <GitHubIcon style={{ fontSize: 20, color: "lightgray", marginRight: 20 }} />
        </Link>
      </div>
      <h4 className="aboutPage-title">- Greeting -</h4>
      <p style={{textAlign: "center"}}>　ご覧くださいましてありがとうございます。<br/>
        　このSPAアプリは「自分自身を紹介するポートフォリオを、Reactで作りたい！」<br/>という強い気持ちで、
        Reactの知識0の状態から学習にチャレンジし作成いたしました。</p>
    </div>
  )
}

export default Profile
