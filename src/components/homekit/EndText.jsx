import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  sections: {
    width: '100%',
    height: '100%',
    marginTop: '80px'
  },
  textTitle: {
    textAlign: 'center',
    fontSize: '30px',
    color: 'rgb(29, 161, 242)',
    borderTop: 'solid 1px orange'
  },
  text: {
    textAlign: 'center',
  },
  box: {
    marginLeft: '30px',
    marginRight: '30px'
  },
  textEn: {
    textAlign: 'center',
    fontSize: '20px'
  }
})


const EndText = (props) => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>At the end</h1>
      <div className={classes.box}>
      {(props.checkbox ? <p className={classes.text}>御覧頂きありがとうございます。<br/>
        最後までご覧頂きありがとうございます。<br/>
          もしやりたい事、業務課題など私達にお手伝い出来る事がありましたら上記✉️よりお問い合わせ頂けると幸いです。<br/>
          他にもメンバーのプロフィールページを公開していますので、御覧いただけると嬉しいです。
        </p> : <p className={classes.textEn}>Thank you for watching until the end. <br/>
          If you have something you want to do, business issues, etc. that we can help you with, we would appreciate it if you could contact us from the above ✉️. <br/>
          We also have other members' profile pages open to the public, so please take a look.
        </p>)}
      </div>
    </section>
  )
}

export default EndText
