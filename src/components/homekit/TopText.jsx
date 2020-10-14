import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  sections: {
    width: '100%',
    height: '100%'
  },
  textTitle: {
    textAlign: 'center',
    fontSize: '30px',
    color: 'rgb(29, 161, 242)'
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

const TopText = (props) => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>Welcome to Engineer page</h1>
      <div className={classes.box}>
      {(props.checkbox ? <p className={classes.text}>御覧頂きありがとうございます。<br/>
        私たちは株式会社前田組のソフトウェアエンジニアです。<br/>
        チームとしてまだ発足して間もないですが、今後待ち受けているであろうプロジェクトに向けて日々開発を行なっています。<br/><br/>
        このサイトはチームとして初めての開発であり、チームの事をもっと知ってもらいたいと思い制作しました。<br/>
        技術的に足りない所は多いですが、今あなたが思っているやりたい事、業務課題など、インターネットを使って解決できる事がありましたら是非私たちにご相談頂けると嬉しいです。<br/>
        熱意と情熱を持って皆さんの力になります。
        </p> : <p className={classes.textEn}>Thank you for visiting.<br/>
          We are a software engineer of Maeda Gumi, INC.<br/>
          Although it has just started as a team, we are developing every day for the projects that will be waiting for us in the future.<br/>
          This site was developed for the first time as a team, and I wanted to know more about the team.<br/>
          There are many technical shortcomings, but if you have something you want to do or a business problem that you can solve using the Internet, please feel free to contact us.
          We will help you with enthusiasm and passion.
        </p>)}
      </div>
    </section>
  )
}

export default TopText
