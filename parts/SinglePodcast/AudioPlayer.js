import React, { useState, useRef } from 'react';
import styles from './AudioPlayer.module.css'
import { MdVolumeUp, MdReplay10, MdForward30, MdPause, MdPlayArrow } from 'react-icons/md'

const AudioPlayer = (props) => {
    const classes = props.isShows ? `${styles.podcastPlayer}` : `${styles.podcastPlayer} ${styles.podcastPlayer__hide}`
    const audioTrackRef = useRef();
    const audioTrackProgressWrapper = useRef();
    const [isPlay, setIsPlay] = useState(false);
    const [podcastDuration, setPodcastDuration] = useState("00:00");
    const [podcastCurrentTime, setPodcastCurrentTime] = useState("00:00");
    const [barWidth, setBarWidth] = useState("0");
    const [volumeState, setVolumeState] = useState("100");

    const audioTimeConverted = (time) => {
        const tempMinutes = Math.floor(time / 60);
        const tempSeconds = Math.floor(time % 60);
        const minutes = tempMinutes < 10 ? `0${tempMinutes}` : `${tempMinutes}`;
        const seconds = tempSeconds < 10 ? `0${tempSeconds}` : `${tempSeconds}`;
        return `${minutes}:${seconds}`;
    };

    function onReplayButtonClickHandler(e) {
        e.preventDefault();
        audioTrackRef.current.currentTime -= 15
    }
    function onForwardButtonClickHandler(e) {
        e.preventDefault();
        audioTrackRef.current.currentTime += 30
    }

    function onProgressBarClickHanlder(e) {
        audioTrackRef.current.currentTime = e.nativeEvent.offsetX / audioTrackProgressWrapper.current.offsetWidth * audioTrackRef.current.duration;
    }

    function onPlayPauseClickHandler(e) {
        e.preventDefault();
        const prevPlayState = isPlay;
        setIsPlay(playState => !playState);
        if (prevPlayState) {
            audioTrackRef.current.pause();
        } else {
            audioTrackRef.current.play();
        }
    }

    function onAudioLoadedMetadata() {
        const trackDuration = audioTrackRef.current.duration;
        setPodcastDuration(audioTimeConverted(trackDuration));
    };

    function onCurrentTimeChangeHandler() {
        const currentTime = audioTimeConverted(audioTrackRef.current.currentTime);
        setPodcastCurrentTime(currentTime);
        const audioBarWidth = ((audioTrackRef.current.currentTime * 100) / audioTrackRef.current.duration).toFixed(2);
        setBarWidth(audioBarWidth);
    }

    function onAudioEndHandler() {
        setIsPlay(false);
    }

    function onVolumeChangeHandler(e) {
        setVolumeState(e.target.value);

        if (volumeState < 5) {
            audioTrackRef.current.volume = 0;
        } else if (volumeState > 95) {
            audioTrackRef.current.volume = 1;
        }
        else {
            audioTrackRef.current.volume = +volumeState / 100;
        }
    }

    return (
        <div className={classes}>
            <audio onEnded={onAudioEndHandler} onTimeUpdate={onCurrentTimeChangeHandler} onLoadedMetadata={onAudioLoadedMetadata} ref={audioTrackRef} src={props.audio}></audio>
            <div
                onClick={onProgressBarClickHanlder}
                ref={audioTrackProgressWrapper}
                className={styles.podcastPlayer__progressBar}>
                <div
                    onClick={onProgressBarClickHanlder}
                    style={{
                        width: `${barWidth}%`
                    }}
                    className={styles.podcastPlayer__progressBarFill}></div>
            </div>
            <div className={styles.podcastPlayer__controls}>
                <div className={styles.podcastPlayer__volumeAndTime}>
                    <div className={styles.podcastPlayer__volumeWrapper}>
                        <button className={styles.podcastPlayer__volume}>
                            <MdVolumeUp />
                        </button>
                        <input
                            min="0" max="100"
                            step="1"
                            onChange={onVolumeChangeHandler}
                            type="range"
                            value={volumeState} />
                    </div>
                    <div className={styles.podcastPlayer__time}>
                        <p>{podcastCurrentTime}</p>
                        <span>/</span>
                        <p>{podcastDuration}</p>
                    </div>
                </div>
                <div className={styles.podcastPlayer__playControls}>
                    <button onClick={onReplayButtonClickHandler} className={styles.podcastPlayer__back}>
                        <MdReplay10 />
                    </button>
                    <button onClick={onPlayPauseClickHandler} className={styles.podcastPlayer__playPause}>
                        {isPlay ? <MdPause /> : <MdPlayArrow />}
                    </button>
                    <button onClick={onForwardButtonClickHandler} className={styles.podcastPlayer__next}>
                        <MdForward30 />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;
