import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  sections: {
    width: '100%',
    height: '100%',
    marginTop: '120px'
  },
  textTitle: {
    textAlign: 'center',
    fontSize: '16px',
    color: 'orange',
    borderTop: 'solid 1px orange',
  },
  text: {
    textAlign: 'center',
    marginBottom: '30px',
    marginTop: '15px'
  },
  box: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration:'underLine',
      color: 'orange'
    }
  }
})

const Copywriter = () => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>©️2020 MAEDAGUMI,INC. Team Engineer</h1>
      <div className={classes.text}>
        <a className={classes.box} href='https://maeda-g.co.jp/'>株式会社前田組</a>
      </div>
      
    </section>
  )
}

export default Copywriter
