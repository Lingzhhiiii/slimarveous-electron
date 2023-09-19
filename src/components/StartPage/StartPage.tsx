import { useState, useEffect } from "react";
import styles from '../style/StartPage.module.scss'
import sendRequest from "@/Network";
import { useHistory } from "react-router-dom";
import * as Auth from '../../interface/Auth'
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/states/actions/setCurrentUser";

const StartPage = () =>{
    const [startPageState, setStartPageState] = useState(0);

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [passwordConfirmInput, setPasswordConfirmInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const loginButton = () => {
    sendRequest('/slimarveous/login', {
            username: usernameInput,
            password: passwordInput,
    }).then((response) => {
        if (response.success) {
            console.log('Login successful:', response.data);
            const loginResponse: Auth.LoginResponse = response.data;
            dispatch(setCurrentUser(loginResponse.user, passwordInput)); // 根据回复设置当前用户
            history.push('/main');
        } else {
            console.error('Login error:', response.error);
        }
        });
    }

    const signupButton = () => {
        if (passwordInput === passwordConfirmInput) {
            sendRequest('/slimarveous/register', {
                username: usernameInput,
                password: passwordInput,
            }).then((response) => {
                if (response.success) {
                console.log('Login successful:', response.data);

                } else {
                console.error('Login error:', response.error);
                }
            });
        } else {
            console.log("两次输入密码不一致");
        }

    }

    const returnButton = () => {
        setStartPageState(0);
    }

    return(
        <div className={styles.bgr}>
            <h1>Slimarveous</h1>
            <div className={startPageState === 0 ? '' : 'hidden'}>
                <div className={styles.button_container} >
                    <button onClick={()=>setStartPageState(1)} className={styles.btn}>login</button>
                    <button onClick={()=>setStartPageState(2)} className={styles.btn}>sign up</button>   
                </div>
            </div>
            <div className={startPageState === 1 ? '' : 'hidden'}>
                <div className={styles.panel_container}>
                    <input type="text" 
                        placeholder="username" 
                        className={styles.inputarea}
                        value={usernameInput}
                        onChange={(e)=>{setUsernameInput(e.target.value)}}
                    />
                    <input type="password" 
                        placeholder="password" 
                        className={styles.inputarea} 
                        value={passwordInput}
                        onChange={(e)=>{setPasswordInput(e.target.value)}}
                    />
                    <div className={styles.button_container}>
                        <button onClick={loginButton} className={styles.btn}>login</button>
                        <button onClick={()=>setStartPageState(0)} className={styles.btn}>return</button>
                    </div>
                 </div>
            </div>
            <div className={startPageState === 2 ? '' : 'hidden'}>
                <div className={styles.panel_container}>
                    <input type="text" 
                        placeholder="username" 
                        className={styles.inputarea}
                        value={usernameInput}
                        onChange={(e)=>{setUsernameInput(e.target.value)}}
                    />
                    <input type="password" 
                        placeholder="password" 
                        className={styles.inputarea} 
                        value={passwordInput}
                        onChange={(e)=>{setPasswordInput(e.target.value)}}
                    />
                    <input type="password" 
                        placeholder="confirm your password" 
                        className={styles.inputarea} 
                        value={passwordConfirmInput}
                        onChange={(e)=>{setPasswordConfirmInput(e.target.value)}}
                    />
                    <div className={styles.button_container}>
                        <button onClick={signupButton} className={styles.btn}>sign up</button>
                        <button onClick={returnButton} className={styles.btn}>return</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage;