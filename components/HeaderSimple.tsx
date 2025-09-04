"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HeaderSimple.module.scss';
import Sidebar from './Sidebar';
import { CartIcon, AccountIcon } from './IconSet';


const HeaderSimple: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <header className={styles.header}>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                <nav className={styles.nav} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/doc">Docs</Link>
                </nav>
            </Sidebar>
            <div className={styles.container}>
                <button className={styles.hamburger} onClick={() => setSidebarOpen(true)} aria-label="Open menu">
                    <span />
                    <span />
                    <span />
                </button>
                <div className={styles.logo} style={{ margin: '0 auto', textAlign: 'center' }}>SimpleLogo</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <button className={styles.iconBtn} aria-label="Cart" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <CartIcon width={28} height={28} />
                    </button>
                    <button className={styles.iconBtn} aria-label="My Account" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <AccountIcon width={28} height={28} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderSimple;
