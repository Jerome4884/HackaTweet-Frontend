import Hashtag from './Hashtag.js';
import Tweet from './Tweet.js';
import LastTweets from './LastTweets.js';
import styles from '../styles/Trends.module.css';


function Trends(props) {


    return (
        <div>
            <div className={styles.hashtagContent}>
                <p className={styles.content}>#</p>
            </div>
            <div className={styles.countHashtag}>
                <p className={styles.HashtagCounter}>1</p>
            </div>
        </div>
    )
}

export default Trends;