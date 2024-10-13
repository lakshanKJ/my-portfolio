import styles from './Contact.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'



function Contact() {
    return(
        <div className={styles["contact-grid"]}>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles["contact-icon"]} />
                Email: <a href='mailto:lakshan.kj001@gmail.com'>lakshan.kj001@gmail.com</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} className={styles["contact-icon"]} />
                Telephone: <a href='tel:+94768202652'>+94 768202652</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLink} className={styles["contact-icon"]} />
                LinkedIn: <a href='https://www.linkedin.com/in/lakshanjayathilake/'>/in/lakshanjayathilake</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLink} className={styles["contact-icon"]} />
                Github: <a href='https://github.com/lakshanKJ'>/github.com/lakshanKJ</a>
            </div>
        </div>
    );
}

export default Contact;