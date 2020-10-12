import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  sections: {
    width: '100%',
    height: '100%'
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

const TopText = () => {
  const classes = useStyles()
  return (
    <section className={classes.sections}>
      <h1 className={classes.textTitle}>Welcome to Engineer page</h1>
      <div className={classes.box}>
        <p className={classes.text}>御覧頂きありがとうございます。<br/>
        私たちは株式会社前田組のソフトウェアエンジニアです。<br/>
        チームとしてまだ発足して間もないですが、今後待ち受けているであろうプロジェクトに向けて日々開発を行なっています。<br/><br/>
        このサイトはチームとして初めての開発であり、チームの事をもっと知ってもらいたいと思い制作しました。<br/>
        技術的に足りない所は多いですが、今あなたが思っているやりたい事、業務課題など、インターネットを使って解決できる事がありましたら是非私たちにご相談頂けると嬉しいです。<br/>
        熱意と情熱を持って皆さんの力になります。
        </p>
      </div>
    </section>
  )
}

export default TopText
