import React from 'react';
import Link from 'next/link';
import styles from './FooterSimple.module.scss';

const FooterSimple: React.FC = () => (
    <footer className={styles.footer}>

        <div className={styles.top}>

            <nav className={styles.menu}>
                <h5>Company</h5>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
            </nav>
            <nav className={styles.menu}>
                <h5>Resources</h5>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
            </nav>
            <nav className={styles.menu}>
                <h5>Support</h5>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
            </nav>
        </div>
        <div className={styles.bottom}>
            <div className='col-4 text-start'>
                <p>&copy; {new Date().getFullYear()} Boilerplate. All rights reserved.</p>
            </div>
            <div className='col-4'>
                <div className={styles.logo}>SimpleLogo</div>
            </div>
            <div className='col-4 text-end'>
                <nav className={styles.menufooter}>
                    <Link href="/">Terms & conditions</Link>
                    <Link href="/about">Privacy Policy</Link>

                </nav>
            </div>
        </div>

    </footer>
);

export default FooterSimple;
