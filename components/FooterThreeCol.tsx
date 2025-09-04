import React from 'react';
import Link from 'next/link';
import styles from '../styles/FooterThreeCol.module.scss';

const FooterThreeCol: React.FC = () => (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.top}>
                <div className={styles.logo}>ThreeColLogo</div>
                <div className={styles.menus}>
                    <div className={styles.menu}><h4>Menu 1</h4><Link href="/">Home</Link><Link href="/about">About</Link></div>
                    <div className={styles.menu}><h4>Menu 2</h4><Link href="/services">Services</Link><Link href="/doc">Docs</Link></div>
                    <div className={styles.menu}><h4>Menu 3</h4><Link href="/contact">Contact</Link><Link href="/blog">Blog</Link></div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Boilerplate. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default FooterThreeCol;
