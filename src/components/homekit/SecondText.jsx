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


const SecondText = (props) => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>What you can do now</h1>
      <div className={classes.box}>
        {(props.checkbox ? <p className={classes.text}>御覧頂きありがとうございます。<br/>
          今私たちに出来る事は、残念ながら多くはありません。<br/>
          だからこそ、皆さんに力を貸して頂きたいです。皆さんの作りたい物、業務課題に感じる事を私達に作らせてください。<br/>
          出来る出来ないはやってみないとわかりませんが、チャレンジする事、それが私達を成長させてくれるからです。<br/>
          チャレンジする事が私達に今出来る事です！
        </p> : <p className={classes.textEn}> Unfortunately, there is not much we can do now. <br/>
          That is why I would like you to help us. Let us make what you want to make and what you feel about your business challenges. <br/>
          I don't know if I can't do it until I try it, but it's a challenge because it makes us grow. <br/>
          The challenge is what we can do now!
        </p>)}
      </div>
    </section>
  )
}

export default SecondText
