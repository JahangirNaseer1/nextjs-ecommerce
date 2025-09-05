import React from 'react';
import Link from 'next/link';
import styles from './FooterSimple.module.scss';

const FooterSimple: React.FC = () => (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.top}>
                <div className={styles.logo}>SimpleLogo</div>
                <nav className={styles.menu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                </nav>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Boilerplate. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default FooterSimple;
