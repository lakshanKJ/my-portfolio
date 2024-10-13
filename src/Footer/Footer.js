import styles from './Footer.module.css';
import React from 'react';

function Footer() {
    return (
        <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles['footer-row']}>
        
        <div className={styles["footer-section"]}>
          <h5>About Me</h5>
          <p>
            Committed to provide the best software development service for your requirement.
          </p>
        </div>
  
        
        <div className={styles["footer-section"]}>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
  
      </div>
  
      
      <div className={styles["footer-bottom"]}>
        <p>&copy; 2024 Lakshan Jayathilake. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  
    );
}

export default Footer;