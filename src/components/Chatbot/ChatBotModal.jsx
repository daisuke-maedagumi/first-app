import React, {useState, useEffect, useCallback} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import defaultDataset from '../../dataset.js';
import '../../assets/styles/style.css'
import {AnswersList, Chats} from './index'
import {db} from '../../firebase/index'


// ここにコピペ

const TransitionsModal = () => {
    const [answers, setAnswers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentId, setCurrentId] = useState("init");
    const [dataset, setDataset] = useState({});
    const [open, setOpen] = useState(false);

    this.selectAnswer = this.selectAnswer.bind(this)
  }
  
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    
    addChats({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    
      setAnswers(nextDataset.answers)
      setCurrentId(nextQuestionId)
  }
  
  
  
  


  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500);
        break;
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500);
        break;
    }
  }
  
  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  initDataset = (dataset) => {
    this.setState({dataset: dataset})
  }

  useEffect( () => {
    (async() => {
      const dataset = this.state.dataset

      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          dataset[id] = data
        })
      })
      
      this.initDataset(dataset)
      const initAnswer = ""
      this.selectAnswer(initAnswer, this.state.currentId)
    })()
  }, [])

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }
　

  

  
    
  // const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={this.props.modalOpen}
        onClose={this.props.handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.props.modalOpen} >
          <section className="c-section">
            <div className="c-box">
              <Chats chats={chats} />
              <AnswersList answers={this.state.answers} select={selectAnswer} />
                {/* <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p> */}
              </div>              
          </section>
        </Fade>
      </Modal>
    </div>
    );


export default TransitionsModal
