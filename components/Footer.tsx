import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Boilerplate. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
