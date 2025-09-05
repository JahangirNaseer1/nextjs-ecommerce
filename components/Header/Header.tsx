"use-client"
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';


const Header: React.FC = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.logo}>Boilerplate</div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/doc">Documentation</Link>
            </nav>
        </div>
    </header>
);

export default Header;
