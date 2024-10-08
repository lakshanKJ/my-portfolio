import styles from './About.module.css';
import aws from '../../src/assets/images/icons/icons8-aws.svg';
import android from '../../src/assets/images/icons/android.png';
import css from '../../src/assets/images/icons/css-3.png';
import github from '../../src/assets/images/icons/github.png';
import gitlab from '../../src/assets/images/icons/gitlab.png';
import html from '../../src/assets/images/icons/html-5.png';
import mysql from '../../src/assets/images/icons/icons8-mysql.svg';
import nodejs from '../../src/assets/images/icons/icons8-nodejs.svg';
import spring from '../../src/assets/images/icons/icons8-spring-boot.svg';
import java from '../../src/assets/images/icons/java.png';
import js from '../../src/assets/images/icons/js.png';
import react from '../../src/assets/images/icons/atom.png';
import python from '../../src/assets/images/icons/python.png';
import angular from '../../src/assets/images/icons/icons8-angular.svg';

function About() {
    return (
        <div className={styles.main}>
            <p className={styles['first-para']}>I am a passionate and dedicated software engineer
                with a B.Eng in Software Engineering from the
                University of Westminster. With hands-on
                experience in the industry, I have developed
                strong expertise in designing, developing, and
                deploying software solutions using a wide range
                of technologies. My technical skill set includes
                <strong> Java, Python, Node.js, Angular, React, JavaScript,
                    Spring Boot, MySQL, and AWS</strong>. I also have experience
                in <strong>Android development</strong>, enabling me to create
                seamless mobile applications. I am constantly striving
                to expand my knowledge and stay updated with the latest
                industry trends to build innovative and efficient
                solutions.
            </p>
            <div className={styles.iconSector}>
                <img src={java} alt='java' className={styles.icon}></img>


                <img src={spring} alt='spring boot' className={styles.icon}></img>


                <img src={python} alt='python' className={styles.icon}></img>


                <img src={nodejs} alt='nodejs' className={styles.icon}></img>


                <img src={js} alt='js' className={styles.icon}></img>


                <img src={angular} alt='angular' className={styles.icon}></img>


                <img src={react} alt='react' className={styles.icon}></img>


                <img src={mysql} alt='mysql' className={styles.icon}></img>


                <img src={aws} alt='aws' className={styles.icon}></img>


                <img src={android} alt='android' className={styles.icon}></img>


                <img src={github} alt='github' className={styles.icon}></img>


                <img src={gitlab} alt='gitlab' className={styles.icon}></img>


                <img src={html} alt='html' className={styles.icon}></img>


                <img src={css} alt='css' className={styles.icon}></img>

            </div>
        </div>
    );
}

export default About;