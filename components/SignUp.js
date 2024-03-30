import styles from '../styles/SignUp.module.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const fetch = require('node-fetch');
// import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import {login} from '../reducers/user';
import Image from 'next/image';



function SignUp(props) {
    
    const dispatch = useDispatch();

    const [signUpFirstName, setSignUpFirstName] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: signUpFirstName, username: signUpUsername, password: signUpPassword })})
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if (data.result) {
                dispatch(login({ username: signUpUsername, token: data.token }));
                setSignUpFirstName('');
                setSignUpUsername('');
                setSignUpPassword('');
                props.handleCancelSignUp();
                // setIsModalVisible(false) Pour l'utilise, il fdaut utilise le inversedataflow
              }
          });
      };
  

  return (
    <div>
        <div className={styles.registerContainer}>
            <div className={styles.registerSection}>
              <Image 
                          className={styles.twitterLogo}
                          src='/twitterBupside.png'
                          alt="twitterLogo"
                          width={60}
                          height={37}
                          />             
                <p className={styles.title}>Create your Hackatweet account</p>
                <input className={styles.input} type="text" placeholder="FirstName" id="signUpUser" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} />
                <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                <Button id="register" className={styles.registerBtn} onClick={() => handleRegister()}>Sign Up</Button>
            </div>
        </div>
    </div>
  );
}

export default SignUp;

