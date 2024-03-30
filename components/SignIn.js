import styles from '../styles/SignIn.module.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import {login} from '../reducers/user';
import Image from 'next/image';


function SignIn(props) {

    const dispatch = useDispatch();

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword })})
      .then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					props.handleCancelSignIn();
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
                <p className={styles.title}>Connect to Hackatweet</p>
                <input className={styles.input} type="text" placeholder="username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input className={styles.input} type="password" placeholder="password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <Button className={styles.registerBtn} id="register" onClick={() => handleConnection()}>Sign In</Button>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
