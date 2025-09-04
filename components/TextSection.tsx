import React from 'react';
import styles from '../styles/TextSection.module.scss';

const TextSection: React.FC = () => (
    <section className={styles.textSection}>
        <h2>Why Choose This Boilerplate?</h2>
        <p>
            This starter kit provides a robust foundation with Next.js, SCSS, Bootstrap, and reusable components. Build beautiful, scalable UIs faster than ever.
        </p>
    </section>
);

export default TextSection;
