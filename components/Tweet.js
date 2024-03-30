import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import Image from 'next/image';



function Tweet(props) {

    fetch('http://localhost:3000/', { method: 'DELETE' })
    .then(response => response.json())
    .then(() => {

    })


    //HEART BUTTON
    const [like, setLike] = useState(false);

    const handleLikeButtonClick = () => {
        setLike(!like);
      }

    const styleLike = {
    color: like ? 'red' : 'white',
    }

    const deleteTweet = () => {
        fetch()
    }
    return (
        <div className={styles.tweet}>
                <div className={styles.tweetMetaData}>
                    <Image className={styles.profilePic}
                        src='/profilePic.jpg'
                        alt="ProfilePic"
                        width={40}
                        height={40}
                        />
                    <p className={styles.firstName}>{props.firstName}</p>
                    <p className={styles.username}>@{props.username}</p>
                    <p className={styles.date}>{props.date}</p>
                </div>
                <div className={styles.tweetContent}>
                    <p className={styles.content}>{props.content}</p>
                </div>
                <div className={styles.tweetLike}>
                    <FontAwesomeIcon icon={faHeart} className={styles.likeBtn} style={styleLike} onClick={() => handleLikeButtonClick()}/>
                    <p className={styles.likeCounter}>1</p>
                    <FontAwesomeIcon icon={faTrash} className={styles.trashBtn} />
                </div>
        </div>
    )
}

export default Tweet;