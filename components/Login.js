import styles from '../styles/Login.module.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'
import Image from 'next/image';


function Login() {

	const user = useSelector((state) => state.user.value);


    const [modalSignUp, setModalSignUp] = useState(false);
    const [modalSignIn, setModalSignIn] = useState(false);

    //permet d'effectuer une redirection
    const router = useRouter();

    if(user.token){
        router.push('/home');
    }

    //Affiche le modal signup
    const ShowModalSignUp = () => {
		setModalSignUp(!modalSignUp);
        console.log('signup')
	};

    //Ferme le modal signup au click sur la X
    const handleCancelSignUp = () => {
        setModalSignUp(false);
      }

    const handleCancelSignIn = () => {
        setModalSignIn(false);
    }


    //Affiche le modal signin
    const ShowModalSignIn = () => {
		setModalSignIn(!modalSignIn);
        console.log('signin')
	};

    // if(modalSignUp){
    //     let modalContentSignUp;
    //     modalContentSignUp = (
    //         <SignUp />
    //     );
    // }

    // let modalContentSignIn;
    //     modalContentSignIn = (
    //         <SignIn />
    //     )
    

  return (
        <div className={styles.main}>
            <div className={styles.mainLeft}>
                <img src='/newTwitterBackgroundImage.png' className={styles.bkgImg} alt='background-twitter'/>
            </div>
            <div className={styles.mainRight}>
                <div className={styles.logoContainer}>
                    <Image 
                        className={styles.twitterLogo}
                        src='/twitterBupside.png'
                        alt="twitterLogo"
                        width={80}
                        height={50}
                        />              
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.textContainer}>
                        <h3 className={styles.title}>See what's happening</h3>
                        <p className={styles.subTitle} >Join Hackatweet today.</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <Button onClick={ShowModalSignUp}  className={styles.btnSignUp} type="primary" shape="round">Sign up</Button>
                        <p className={styles.textBtnContainer}>Already have an account?</p>
                        <Button onClick={ShowModalSignIn} className={styles.btnSignIn} shape="round">Sign in</Button>
                    </div> 
                </div>
            </div>

            <Modal open={modalSignUp} onCancel={handleCancelSignUp} footer={null} className="modalSignUp" getContainer="#react-modals">
                <SignUp handleCancelSignUp={handleCancelSignUp}/>
            </Modal>

            <Modal open={modalSignIn} onCancel={handleCancelSignIn} footer={null} className={styles.modalSignIn}>
                <SignIn handleCancelSignIn={handleCancelSignIn}/>
            </Modal>

        </div>
  );
}

export default Login;
