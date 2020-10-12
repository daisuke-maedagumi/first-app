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
    fontSize: '30px'
  },
  text: {
    textAlign: 'center',
  },
  box: {
    marginLeft: '30px',
    marginRight: '30px'
  }
})


const EndText = () => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>At the end</h1>
      <div className={classes.box}>
        <p className={classes.text}>
          最後までご覧頂きありがとうございます。<br/>
          もしやりたい事、業務課題など私達にお手伝い出来る事がありましたら上記✉️よりお問い合わせ頂けると幸いです。<br/>
          他にもメンバーのプロフィールページを公開していますので、御覧いただけると嬉しいです。
        </p>
      </div>
    </section>
  )
}

export default EndText
