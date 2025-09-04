"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HeaderSplit.module.scss';

const HeaderSplit: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className={styles.header}>
            <div className={`${styles.container}`}>
                <div className={styles.left}>
                    <div className={styles.logo}>SplitLogo</div>
                </div>
                <div className={styles.right}>
                    <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/doc">Docs</Link>
                    </nav>
                </div>
                <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
};

export default HeaderSplit;
