import stream1 from "../../assets/images/stream1.png";
import stream2 from "../../assets/images/stream2.png";
import stream3 from "../../assets/images/stream3.png";
import styles from './Streaming.module.css';
import React from 'react';



function StreamPlatform() {
    return (
        <div className={styles['fm-main']}>
            <div className={styles['fm-secondary']}>
                <h2>Video Streaming Platform</h2>

                <div className={styles.content}>

                    <div className={styles.description}>
                        <p><strong>Technologies - </strong>Angular | NodeJs | AWS</p>
                        <p><strong>Key features - </strong>
                            <br></br>
                            - Video streaming

                        </p>
                        <p>This is a video platform developed to stream videos. It is a dynamic and user-friendly website designed to provide a seamless video streaming experience for users and creators alike.
                            With features such as  video uploads, and a responsive video player, the platform offers a high-quality viewing experience.
                        </p>


                    </div>

                </div>

                <div className={styles['cover-image-sector']}>
                    <img src={stream1} alt="stream website" className={styles.image1}></img>
                </div>
                <div className={styles['more-desc']}>
                    <p>I have used AWS s3 container to deploy front end and ec2 instance for the back end. Then used Cloudfront to communicate with backend and front end. Additionally, its modern design and responsive layout
                        make it visually appealing and accessible across all devices.</p>

                </div>
                <div className={styles['pics-main']}>
                    <div className={styles.pics}>
                        <img src={stream2} alt="stream website" className={styles.image2}></img>
                    </div>
                    <div className={styles.pics}>
                        <img src={stream3} alt="stream website" className={styles.image2}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StreamPlatform;