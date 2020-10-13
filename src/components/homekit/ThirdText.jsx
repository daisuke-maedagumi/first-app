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
      <h1 className={classes.textTitle}>Challenges for the future</h1>
      <div className={classes.box}>
        <p className={classes.text}>
          今後の課題はたくさんありますが、まずは開発経験を積む事だと思います。<br/>
          まずは社内の課題を私達で解決していけるように日々の学習、開発に力を入れて取り組んでいきたいと考えています。<br/>
          開発を想定したチーム開発、タスク管理を行い、いつでもチーム開発が行える体制をとっていけるようにしていきたいです。
        </p>
      </div>
    </section>
  )
}

export default SecondText
