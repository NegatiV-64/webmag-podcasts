import React, { useState, useRef } from 'react';
import styles from './AudioPlayer.module.css'
import { MdVolumeUp, MdReplay10, MdForward30, MdPause, MdPlayArrow } from 'react-icons/md'

const AudioPlayer = (props) => {

    const audioTrackRef = useRef();
    const audioTrackCurrent = audioTrackRef.current
    const [isPlay, setIsPlay] = useState(false);


    function onPlayPauseClickHandler(e) {
        e.preventDefault();
        setIsPlay(playState => !playState);

        if (isPlay) {
            audioTrackCurrent.pause();
        } else {
            audioTrackCurrent.pause();
        }
    }

    return (
        <div className={styles.podcastPlayer}>
            <audio ref={audioTrackRef} src={props.audio}></audio>
            <div className={styles.podcastPlayer__progressBar}>
                <div className={styles.podcastPlayer__progressBarFill}></div>
            </div>
            <div className={styles.podcastPlayer__controls}>
                <div className={styles.podcastPlayer__volumeAndTime}>
                    <button className={styles.podcastPlayer__volume}>
                        <MdVolumeUp />
                    </button>
                    <div className={styles.podcastPlayer__time}>
                        <p>0:15</p>
                        <span>/</span>
                        <p>45:10</p>
                    </div>
                </div>
                <div className={styles.podcastPlayer__playControls}>
                    <button className={styles.podcastPlayer__back}>
                        <MdReplay10 />
                    </button>
                    <button onClick={onPlayPauseClickHandler} className={styles.podcastPlayer__playPause}>
                        {isPlay ? <MdPause /> : <MdPlayArrow />}
                    </button>
                    <button className={styles.podcastPlayer__next}>
                        <MdForward30 />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;
