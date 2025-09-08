import React from 'react';
import styles from './VideoSec.module.scss';



const VideoSec: React.FC = () => (
    <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
            <iframe
                src="https://www.youtube-nocookie.com/embed/eTEsWseiDdg?autoplay=1&mute=1&loop=1&playlist=eTEsWseiDdg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                tabIndex={-1}
                aria-hidden="true"
                title="Background Video"
            />
        </div>
    </section>
)

export default VideoSec;
