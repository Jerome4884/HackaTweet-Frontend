import Tweet from './Tweet.js';
import styles from '../styles/LastTweets.module.css';
import { useEffect, useState } from 'react';

function LastTweets() {

    const [ListOfTweets, setListOfTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(res => res.json())
          .then(data => {
            setListOfTweets(data.tweets);
          });
      }, []);


    const tweets = ListOfTweets.map((data, i) => {
        return <Tweet key={i} firstName={"John"} username={"Scott"} date={data.date} content={data.content} />;
    })


    return (
        <div className={styles.lastTweets}>
            {tweets}
        </div>
    )
}

export default LastTweets;