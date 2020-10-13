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
  }
})


const SecondText = () => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>What you can do now</h1>
      <div className={classes.box}>
        <p className={classes.text}>
          今私たちに出来る事は、残念ながら多くはありません。<br/>
          だからこそ、皆さんに力を貸して頂きたいです。皆さんの作りたい物、業務課題に感じる事を私達に作らせてください。<br/>
          出来る出来ないはやってみないとわかりませんが、チャレンジする事、それが私達を成長させてくれるからです。<br/>
          チャレンジする事が私達に今出来る事です！
        </p>
      </div>
    </section>
  )
}

export default SecondText
