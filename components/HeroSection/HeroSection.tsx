import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
    <section className={styles.hero}>
        <h1>Welcome to Boilerplate</h1>
        <p>Kickstart your next project with a modern, responsive setup.</p>
        <button className="btn btn-primary">Get Started</button>
    </section>
);

export default HeroSection;
