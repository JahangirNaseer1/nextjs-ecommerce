"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HeaderCenter.module.scss';

const HeaderCenter: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className={styles.headercenter}>
            <div className="container d-flex flex-column text-center justify-content-center align-items-center">
                <div className={styles.logo}>CenterLogo</div>
                <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/doc">Docs</Link>
                </nav>
            </div>
        </header>
    );
};

export default HeaderCenter;
