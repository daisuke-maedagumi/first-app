import React, { useCallback, useState } from 'react';
import {PrimaryButton, TextInput} from "../components/uiKid"
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';

const SignUp = () => {

    const dispatch = useDispatch();

    const [userName, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');
    
    const inputUsername = useCallback((event) => {
        setUsername(event.target.value);
    },[setUsername]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);
    
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    },[setPassword]);
    
    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    },[setConfirmPassword]);    

    return (
        <div className="c-section-container">
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <h2 className="u-text__headline u-text-center">アカウント登録</h2>
            <div className="module-spacer--medium" />
            <TextInput 
                fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                rows={1} value={userName} type={"text"} onChange={inputUsername} 
            />
            <TextInput 
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail} 
            />
            <TextInput 
                fullWidth={true} label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword} 
            />
            <TextInput 
                fullWidth={true} label={"パスワード（再確認）"} multiline={false} required={true}
                rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword} 
            /> 
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton
                    label={"アカウントを登録する"}
                    onClick={() => dispatch(signUp(userName, email, password, confirmPassword))}
                />
            </div>
        </div>

    )
}

export default SignUp