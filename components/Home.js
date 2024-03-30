import styles from '../styles/Home.module.css';
// import Hashtag from './Hashtag'
// import Trends from './Trends.js';
import LastTweets from './LastTweets.js';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../reducers/user';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Trends from './Trends.js';


function Home() {

	const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [tweetInput, setTweetInput] = useState('');

  //permet d'effectuer une redirection
  const router = useRouter();

  if(!user.token){
      router.push('/login');
  }

  const handleInputChange = (event) => {
    setTweetInput(event.target.value);
  };

  const tweetInputLength = tweetInput.length

  const handleMessageSubmit = () => {

		fetch('http://localhost:3000/tweets', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ content: tweetInput, hashtags:tweetInput }),
		}).then(res => res.json())
			.then(data => {
				if (data.result) {
					setTweetInput('');
				}
			});

      const regex = /#(\w+)/g;
      let hashtags = tweetInput.match(regex)
      console.log(hashtags);


      fetch('http://localhost:3000/trends', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hashtags }),
      }).then(res => res.json())
        .then(data => {
          if (data.result) {
            setTweetInput('');
          }
        });
	};
  const handleLogout = () => {
    dispatch(logout());
  };

  // const displayHashTag = (hashTag) => {
  //   const isTweet = tweetInput.includes(hashTag);
  //   console.log('tweet => ', tweetInput);
  // }

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <div className={styles.logo}>
          <Image 
            className={styles.twitterLogo}
            src='/twitterBupside.png'
            alt="twitterLogo"
            width={80}
            height={50}
            />
        </div>
        <Button onClick={handleLogout} className={styles.btnLogout} shape="round">Logout</Button>
      </div>
      <div className={styles.mainCenter}>
        <div className={styles.tweetInput}>
          <div className={styles.mainTitle}>
            <h1 className={styles.mainTitles}>Home</h1>
          </div>
          <textarea className={styles.tweetInputField} onChange={(e) => setTweetInput(e.target.value)} maxLength="280"></textarea>
          <div className={styles.tweetButtonAndCounterContainer}>
            <p className={`${styles.counter} ${styles.terciaryTitles}`}>{tweetInputLength}/280</p>
            <button className={`${styles.tweetButton} ${styles.secondaryTitles}`} onClick={() => handleMessageSubmit()}>Tweet</button>
          </div>
        </div>
        <div className={styles.lastTweets}>
          <LastTweets/>
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.mainTitles}>Trends</h1>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
