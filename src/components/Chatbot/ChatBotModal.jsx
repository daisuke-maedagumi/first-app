import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import defaultDataset from '../../dataset.js';
import '../../assets/styles/style.css'
import {AnswersList, Chats} from './index'

// ここにコピペ

export default class TransitionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [], 
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    };
    this.selectAnswer = this.selectAnswer.bind(this)
  }
  
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }
  
  
  
  


  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })
        this.setState({
          chats: chats
        })
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
    }
  }  

  componentDidMount() {
    const initAnswer = ""
    this.selectAnswer(initAnswer, this.state.currentId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render () {
    
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
          <Fade in={this.props.modalOpen}>
            <section className="c-section">
              <div className="c-box">
                <Chats chats={this.state.chats} />
                <AnswersList answers={this.state.answers} select={this.selectAnswer} />
                  {/* <h2 id="transition-modal-title">Transition modal</h2>
                  <p id="transition-modal-description">react-transition-group animates me.</p> */}
                </div>              
            </section>
          </Fade>
        </Modal>
      </div>
      );
    }
}

