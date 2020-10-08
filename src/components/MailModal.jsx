import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '450px'
  },
  contents: {
    textAlign: 'center'
  },
  button: {
    marginTop: '80px',
    textAlign: 'center'
  }
}));

export default function MailModal(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.mailOpen}
        onClose={props.handleMailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.mailOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.contents}>お問い合わせフォーム</h2>
            <TextField 
              label="お名前"
              fullWidth
              margin="normal"
            />
            <TextField 
              label="メールアドレス"
              fullWidth
              margin="normal"
            />
            <TextField 
              label="お問い合わせ内容"
              fullWidth
              margin="normal"
              multiline
              rowsMax={5}
            />
            <div className={classes.button}>
              <Button endIcon={<SendIcon/>}  variant="outlined" color="primary">
                送信する
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
