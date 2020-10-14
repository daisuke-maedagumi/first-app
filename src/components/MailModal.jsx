import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {WEBHOOK_URL} from '../webhookConfig'


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
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  
  

  const sendEmail =() => {
    const isBlank = validateRequiredInput(name, email, contact)
    const isValidEmail = validateEmailFormat(email)

    if (isBlank) {
      alert('必須入力欄が空白です。')
      return false
    } else if (!isValidEmail) {
        alert('メールアドレスの書式が異なります。')
        return false
    } else {
      const payload = {
        text: name + '様よりお問い合わせがありました。\n'
              + 'メールアドレス:' + email + '\n'
              + '【お問い合わせ内容】\n' + contact
      }

        // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
        fetch(WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert(`送信が完了しました。お問い合わせ内容は以下の通りです。
                  ---------------------------------------------
                  お名前：${name}
                  メールアドレス：${email}
                  お問い合わせ内容
                  ${contact}
                  --------------------------------------------
                  担当者よりご連絡差し上げますのでしばらくお待ちください。`);
            setContact("")
            setEmail("")
            setName("")
            return props.handleMailClose()
        })
    }
    
  }

  const inputName = useCallback((e) => {
    setName(e.target.value)
  },[setName])

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
  },[setEmail])

  const inputContact = useCallback((e) => {
    setContact(e.target.value)
  },[setContact])

  const validateEmailFormat = (email) => {
      const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return regex.test(email)
  }

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i=(i+1)|0) {
        if (args[i] === "") {
            isBlank = true;
        }
    }
    return isBlank
};

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
              label="お名前(Name)"
              fullWidth
              margin="normal"
              value={name}
              onChange={inputName}
            />
            <TextField 
              label="メールアドレス(Email)"
              fullWidth
              margin="normal"
              value={email}
              onChange={inputEmail}
              type={'email'}
            />
            <TextField 
              label="お問い合わせ内容(Inquiry content)"
              fullWidth
              margin="normal"
              multiline
              rowsMax={5}
              value={contact}
              onChange={inputContact}
            />
            <div className={classes.button}>
              <Button 
                endIcon={<SendIcon/>}  
                variant="outlined" 
                color="primary" 
                onClick={() => sendEmail(name,email,contact)}>
                  
                送信する
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
