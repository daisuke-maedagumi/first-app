import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import defaultDataset from '../../dataset.js';
import '../../assets/styles/style.css'
import {AnswersList, Chats} from './index'


// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

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
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState( {
      answers: initAnswers
    })
  }

    initChats = () => {
      const initDataset = this.state.dataset[this.state.currentId];
      const chat = {
        text: initDataset.question,
        type: 'question'
      }

      const chats = this.state.chats;
      chats.push(chat)
  
      this.setState( {
        chats: chats
      })
  }

  componentDidMount() {
    this.initChats();
    this.initAnswer()
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
                <AnswersList answers={this.state.answers} />
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

